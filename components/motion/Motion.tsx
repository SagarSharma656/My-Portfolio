"use client";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const all = (s: string) => gsap.utils.toArray<HTMLElement>(s);
const once = (trigger: Element | string, start: string) => ({
  trigger,
  start,
  once: true,
});

/** Scroll choreography for everything below the hero. GSAP owns these elements; React only renders them. */
export default function Motion() {
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion:reduce)").matches) return;
    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();
    mm.add("(min-width:900px)", () => {
      const tr = document.querySelector<HTMLElement>("#plist")!,
        hs = document.querySelector<HTMLElement>(".hs")!,
        len = () => tr.scrollWidth - hs.clientWidth;
      const tw = gsap.to(tr, {
        x: () => -len(),
        ease: "none",
        scrollTrigger: {
          trigger: hs,
          pin: true,
          scrub: 0.7,
          start: "top top",
          end: () => "+=" + len(),
          invalidateOnRefresh: true,
        },
      });
      all(".card").forEach((c) => {
        gsap.fromTo(
          c.querySelector("img"),
          { xPercent: 0 },
          {
            xPercent: -10,
            ease: "none",
            scrollTrigger: {
              trigger: c,
              containerAnimation: tw,
              start: "left right",
              end: "right left",
              scrub: true,
            },
          },
        );
        gsap.from(c.querySelector(".im"), {
          clipPath: "inset(0 100% 0 0)",
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: c,
            containerAnimation: tw,
            start: "left 90%",
            once: true,
          },
        });
      });
    });
    const ctx = gsap.context(() => {
      gsap.to("#bar", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: { scrub: 0.3, start: 0, end: "max" },
      });
      all(".big").forEach((h) =>
        gsap.from(h.querySelectorAll(".w>span"), {
          yPercent: 115,
          duration: 1,
          ease: "power4.out",
          stagger: 0.06,
          scrollTrigger: once(h, "top 85%"),
        }),
      );
      gsap.to(".sw", {
        opacity: 1,
        stagger: 0.1,
        ease: "none",
        scrollTrigger: {
          trigger: "#sct",
          start: "top 80%",
          end: "bottom 40%",
          scrub: true,
        },
      });
      gsap.from(".cols p", {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: once(".cols", "top 88%"),
      });
      gsap.to("#ln", {
        scaleY: 1,
        ease: "none",
        scrollTrigger: {
          trigger: "#jobs",
          start: "top 70%",
          end: "bottom 70%",
          scrub: true,
        },
      });
      all(".job").forEach((j) =>
        gsap.from(j, {
          opacity: 0,
          x: 60,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: once(j, "top 85%"),
        }),
      );
      ScrollTrigger.batch(".rv", {
        start: "top 92%",
        once: true,
        onEnter: (b) =>
          gsap.fromTo(
            b,
            { opacity: 0, y: 36 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.08,
              ease: "power3.out",
              overwrite: true,
            },
          ),
      });
      gsap.from(".edu-g>*", {
        opacity: 0,
        y: 40,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: once(".edu", "top 88%"),
      });
      gsap.from(".links .btn", {
        opacity: 0,
        y: 30,
        stagger: 0.12,
        scrollTrigger: once(".links", "top 92%"),
      });
      const skew = gsap.quickTo(document.querySelector(".mq div")!, "skewX", {
        duration: 0.4,
      });
      ScrollTrigger.create({
        onUpdate: (s) =>
          skew(gsap.utils.clamp(-14, 14, s.getVelocity() / -180)),
      });
      all(".btn").forEach((b) => {
        const xt = gsap.quickTo(b, "x", { duration: 0.4 }),
          yt = gsap.quickTo(b, "y", { duration: 0.4 });
        b.addEventListener("pointermove", (e) => {
          const r = b.getBoundingClientRect();
          xt((e.clientX - r.left - r.width / 2) * 0.25);
          yt((e.clientY - r.top - r.height / 2) * 0.35);
        });
        b.addEventListener("pointerleave", () => {
          xt(0);
          yt(0);
        });
      });
    });
    ScrollTrigger.sort();
    ScrollTrigger.refresh();
    document.fonts.ready.then(() => ScrollTrigger.refresh());
    return () => {
      mm.revert();
      ctx.revert();
    };
  }, []);
  return null;
}
