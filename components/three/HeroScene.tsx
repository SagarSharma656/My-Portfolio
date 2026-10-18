"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

/** Vertex shader: portrait particles. uF = formation, uP = scroll dissolve, uS = pointer activity, uM = pointer position. */
const VS = `attribute vec3 aR;attribute float aL;uniform float uP,uF,uT,uPx,uS;uniform vec2 uM;varying float vA;
void main(){vec3 p=position;vec3 dir=(aR-.5)*2.;
float d=smoothstep(aR.x*.55,aR.x*.55+.45,uP);float f=smoothstep(aR.z*.5,aR.z*.5+.5,uF);
vec3 o=dir*vec3(5.,3.2,6.)*d;o.x+=sin(uT*.4+aR.y*6.28)*.3*d;o.y+=cos(uT*.35+aR.x*6.28)*.3*d;
o+=dir*vec3(6.,5.,8.)*(1.-f);p+=o;p.z+=sin(uT+aR.x*20.)*.012;
vec2 dm=position.xy-uM;float m=exp(-dot(dm,dm)*9.)*(1.-d)*uS;vec2 nn=normalize(dm+1e-4);p.xy+=(nn+vec2(-nn.y,nn.x)*.8)*m*.18;p.z+=m*.5;
vec4 mv=modelViewMatrix*vec4(p,1.);gl_Position=projectionMatrix*mv;gl_PointSize=(.95+aL*1.25)*uPx*(6./-mv.z);vA=(.3+.7*aL)*(1.-d*.5)*f;}`;
const FS = `varying float vA;uniform float uFade;void main(){float r=length(gl_PointCoord-.5);if(r>.5)discard;gl_FragColor=vec4(vec3(.96,.96,.94),vA*uFade*smoothstep(.5,.15,r));}`;

/**
 * Portrait particle scene + hero scroll timeline.
 * Three.js is imported lazily inside the effect so it never blocks first paint.
 * Everything is cleaned up on unmount (timeline, ScrollTriggers, listeners, GPU resources).
 */
export default function HeroScene() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const root = document.documentElement;
    const hero = document.querySelector<HTMLElement>(".hero");
    const cv = document.querySelector<HTMLCanvasElement>("#gl");
    if (!hero || !cv) return;
    const rm = matchMedia("(prefers-reduced-motion:reduce)").matches;
    if (rm) root.classList.add("rm");
    const Z = { p: 0 };
    let sync: (() => void) | null = null,
      dead = false,
      stop = () => {};

    const ctx = gsap.context(() => {
      if (rm) return;
      gsap.from(".nm i", {
        yPercent: 115,
        duration: 1.3,
        ease: "power4.out",
        stagger: 0.06,
        delay: 1.5,
      });
      gsap.from(".top,.bot,.sc", {
        opacity: 0,
        y: 20,
        duration: 1,
        delay: 2,
        stagger: 0.15,
      });
      gsap
        .timeline({
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.6,
          },
        })
        .to(Z, { p: 1, ease: "none", duration: 1, onUpdate: () => sync?.() }, 0)
        .to(
          ".nm span:first-child",
          { xPercent: -70, opacity: 0, duration: 0.28, ease: "power2.in" },
          0.1,
        )
        .to(
          ".nm span:last-child",
          { xPercent: 70, opacity: 0, duration: 0.28, ease: "power2.in" },
          0.1,
        )
        .to(".bot,.top,.sc", { opacity: 0, y: 30, duration: 0.15 }, 0.08)
        .fromTo(".h-intro", { opacity: 0 }, { opacity: 1, duration: 0.06 }, 0.5)
        .from(
          ".h-intro .k,.h-intro h2,.h-intro .hi-i",
          {
            opacity: 0,
            y: 50,
            stagger: 0.05,
            duration: 0.1,
            ease: "power2.out",
          },
          0.5,
        )
        .to(".h-intro", { opacity: 0, y: -60, duration: 0.06 }, 0.94);
    });

    (async () => {
      try {
        const THREE = await import("three");
        if (dead) return;
        const r = new THREE.WebGLRenderer({
          canvas: cv,
          alpha: true,
          antialias: false,
        });
        const im = new Image();
        im.src = "/images/portrait.png";
        await im.decode();
        if (dead) {
          r.dispose();
          return;
        }
        const w = im.width,
          h = im.height,
          c = document.createElement("canvas");
        c.width = w;
        c.height = h;
        const x = c.getContext("2d")!;
        x.drawImage(im, 0, 0);
        const d = x.getImageData(0, 0, w, h).data;
        const mob = innerWidth < 760,
          W = 2.8,
          H = (W * h) / w;
        const pos: number[] = [],
          rnd: number[] = [],
          lum: number[] = [];
        for (let i = 0; i < w * h; i++) {
          if (d[i * 4 + 3] < 60 || (mob && Math.random() < 0.5)) continue;
          const l = d[i * 4] / 255,
            X = i % w,
            Y = Math.floor(i / w);
          pos.push(
            (X / w - 0.5 + (Math.random() - 0.5) / w) * W,
            -(Y / h - 0.5) * H,
            (l - 0.5) * 0.4,
          );
          rnd.push(Math.random(), Math.random(), Math.random());
          lum.push(l);
        }
        const sc = new THREE.Scene(),
          cam = new THREE.PerspectiveCamera(35, 1, 0.1, 50);
        cam.position.z = 6.2;
        const g = new THREE.BufferGeometry();
        g.setAttribute("position", new THREE.Float32BufferAttribute(pos, 3));
        g.setAttribute("aR", new THREE.Float32BufferAttribute(rnd, 3));
        g.setAttribute("aL", new THREE.Float32BufferAttribute(lum, 1));
        const u = {
          uP: { value: 0 },
          uF: { value: rm ? 1 : 0 },
          uT: { value: 0 },
          uPx: { value: 1 },
          uS: { value: 0 },
          uM: { value: new THREE.Vector2(9, 9) },
          uFade: { value: 1 },
        };
        const m = new THREE.ShaderMaterial({
          uniforms: u,
          vertexShader: VS,
          fragmentShader: FS,
          transparent: true,
          depthWrite: false,
        });
        const grp = new THREE.Group();
        grp.add(new THREE.Points(g, m));
        sc.add(grp);
        let VW = 1,
          VH = 1,
          vis = true,
          mx = 0,
          my = 0,
          tx = 0,
          ty = 0,
          sp = 0,
          ptx = 0,
          pty = 0,
          raf = 0;
        const fit = () => {
          const a = innerWidth / innerHeight,
            vh = 2 * Math.tan(THREE.MathUtils.degToRad(17.5)) * cam.position.z,
            vw = vh * a;
          r.setPixelRatio(Math.min(devicePixelRatio, mob ? 1.5 : 2));
          r.setSize(innerWidth, innerHeight, false);
          cam.aspect = a;
          cam.updateProjectionMatrix();
          u.uPx.value = r.getPixelRatio();
          grp.scale.setScalar(Math.min(1, (vh * 0.9) / H, (vw * 0.82) / W));
          grp.position.set(0, a < 1 ? vh * 0.02 : 0, 0);
          VW = vw;
          VH = vh;
          if (rm) r.render(sc, cam);
        };
        const onMove = (e: PointerEvent) => {
          tx = (e.clientX / innerWidth) * 2 - 1;
          ty = -((e.clientY / innerHeight) * 2 - 1);
        };
        const io = new IntersectionObserver(([e]) => {
          vis = e.isIntersecting;
        });
        stop = () => {
          cancelAnimationFrame(raf);
          removeEventListener("resize", fit);
          removeEventListener("pointermove", onMove);
          io.disconnect();
          g.dispose();
          m.dispose();
          r.dispose();
        };
        fit();
        addEventListener("resize", fit);
        if (rm) {
          r.render(sc, cam);
          return;
        }
        io.observe(hero);
        addEventListener("pointermove", onMove, { passive: true });
        const t0 = performance.now();
        const loop = () => {
          raf = requestAnimationFrame(loop);
          if (!vis) return;
          u.uT.value = (performance.now() - t0) / 1e3;
          mx += (tx - mx) * 0.05;
          my += (ty - my) * 0.05;
          sp = sp * 0.9 + Math.hypot(tx - ptx, ty - pty) * 3;
          ptx = tx;
          pty = ty;
          u.uS.value = Math.min(1, sp);
          grp.rotation.y = mx * 0.05 + Z.p * 0.9;
          grp.rotation.x = -my * 0.03;
          grp.position.z = Z.p * 1.6;
          u.uM.value.set(
            (mx * VW) / 2 / grp.scale.x,
            ((my * VH) / 2 - grp.position.y) / grp.scale.x,
          );
          r.render(sc, cam);
        };
        loop();
        sync = () => {
          u.uP.value = gsap.utils.clamp(0, 1, (Z.p - 0.1) / 0.8);
          u.uFade.value = 1 - THREE.MathUtils.smoothstep(Z.p, 0.82, 1);
        };
        ctx.add(() => {
          gsap.to(u.uF, {
            value: 1,
            duration: 3,
            ease: "power2.out",
            delay: 1.1,
          });
        });
      } catch {
        root.classList.add("nogl");
      }
    })();

    return () => {
      dead = true;
      stop();
      ctx.revert();
    };
  }, []);
  return null;
}
