import { Letters } from "../ui/Split";
import { DATA } from "@/data/content";
import HeroScene from "../three/HeroScene";
export default function Hero() {
  return (
    <header className="hero">
      <div className="hi">
        <img
          id="fb"
          src="/images/portrait.png"
          alt="Portrait of Sagar Kumar"
          loading="lazy"
        />
        <p className="k top">Noida, India · Open to full-time roles</p>
        <h1 className="nm" aria-label="Sagar Kumar">
          <span aria-hidden="true">
            <Letters text="Sagar" />
          </span>
          <span aria-hidden="true">
            <Letters text="Kumar" />
          </span>
        </h1>
        <div className="h-intro">
          <p className="k">What I build</p>
          <h2>
            Real, working software <em>I have built.</em>
          </h2>
          <div className="hi-g">
            {DATA.intro.map((i) => (
              <div className="hi-i" key={i.t}>
                <h3>{i.t}</h3>
                <p>{i.d}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bot">
          <p className="sub">
            Full Stack Developer, MERN &amp; Next.js. I build the whole product:
            interface, API, database and the integrations between them.
          </p>
          <div className="btns">
            <a className="btn" href="#work">
              Selected work
            </a>
            <a className="btn" href="#contact">
              Get in touch
            </a>
          </div>
        </div>
        <p className="k sc">Scroll ↓</p>
        <HeroScene />
      </div>
    </header>
  );
}
