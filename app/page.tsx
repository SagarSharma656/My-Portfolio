import { Fragment } from "react";
import { DATA } from "@/data/content";
import Hero from "@/components/sections/Hero";
import Projects from "@/components/sections/Projects";
import Motion from "@/components/motion/Motion";
import { Words, Scrub } from "@/components/ui/Split";

const marquee = [
  "MERN",
  "Next.js",
  "Real-time",
  "AI integrations",
  "Node.js",
  "WebRTC",
];
const serifH = "font-serif font-light leading-[1.1] text-paper";

export default function Home() {
  return (
    <main id="top">
      <Hero />
      <div className="mq" aria-hidden="true">
        <div>
          {[0, 1].flatMap((k) =>
            marquee.map((t) => (
              <Fragment key={k + t}>
                <span>{t}</span>
                <em>✦</em>
              </Fragment>
            )),
          )}
        </div>
      </div>

      <section id="about">
        <p className="k">01 — About</p>
        <p className="sc-t mt-[4vh]" id="sct">
          <Scrub text="I build whole products: React and Next.js interfaces, Node services, MongoDB data and the integrations that connect them, from schema to screen." />
        </p>
        <div className="cols">
          <p>
            I like owning a feature end to end, then following it through
            deployment. At Digital Night Owl I build and maintain production
            apps, including a hotel-booking voice agent on Twilio, LiveKit,
            Sarvam AI and Gemini.
          </p>
          <p>
            Before that, internships covered content management, e-commerce and
            quick commerce. Since then the work has moved toward AI integrations
            and real-time systems.
          </p>
        </div>
      </section>

      <section id="impact">
        <p className="k">02 — Results</p>
        <h2 className="big">
          <Words text="Results I can *point to.*" />
        </h2>
        <p className="max-w-[54ch] text-g1">
          These figures are as reported in my resume. Each one is explained in
          its project case study.
        </p>
        <div className="mt-[6vh] grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
          {DATA.impact.map((i) => (
            <div className="rv bg-ink p-8" key={i.s}>
              <p className="font-serif text-[clamp(56px,6vw,96px)] font-light leading-none tracking-tight">
                {i.v}
              </p>
              <p className="mt-4 text-lg leading-snug">{i.l}</p>
              <p className="k mt-3">{i.s}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="journey">
        <p className="k">03 — Journey</p>
        <h2 className="big">
          <Words text="From commerce features to *AI* and real-time systems." />
        </h2>
        <div id="jobs">
          <div id="ln" />
          {DATA.jobs.map((j) => (
            <div className="job" key={j.org}>
              <p className="k">
                {j.when}
                <br />
                {j.place}
              </p>
              <div>
                <h3 className={`text-[clamp(28px,3.4vw,50px)] ${serifH}`}>
                  {j.role}
                </h3>
                <p className="text-g1">{j.org}</p>
                <ul>
                  {j.pts.map((x) => (
                    <li className="mt-2 max-w-[62ch] text-g1" key={x}>
                      {x}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="work">
        <p className="k">04 — Selected work</p>
        <h2 className="big">
          <Words text="Selected work. *Open any* for the case study." />
        </h2>
        <Projects />
      </section>

      <section id="skills" className="bg-ink2">
        <p className="k">05 — Skills</p>
        <h2 className="big">
          <Words text="What I can do, *and what I use.*" />
        </h2>
        <div className="mt-[4vh] grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {DATA.offers.map((o) => (
            <div className="rv border border-line p-6" key={o.t}>
              <h3 className={`text-2xl ${serifH}`}>{o.t}</h3>
              <p className="mt-2 text-[15px] text-g1">{o.d}</p>
              <p className="k mt-5">Seen in: {o.p}</p>
            </div>
          ))}
        </div>
        <div className="mt-[10vh] flex flex-wrap items-end justify-between gap-4">
          <h3 className={`text-[clamp(28px,3vw,44px)] ${serifH}`}>
            Tech stack
          </h3>
          <p className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-g1">
            <span>
              <i className="mr-2 inline-block h-2.5 w-2.5 rounded-full bg-paper" />
              Used in project work
            </span>
            <span>
              <i className="mr-2 inline-block h-2.5 w-2.5 rounded-full border border-g1" />
              Hands-on / personal projects
            </span>
          </p>
        </div>
        <div className="mt-6 grid gap-px border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {DATA.skills.map((g) => (
            <div className="rv bg-ink2 p-6" key={g.title}>
              <h4 className="k !text-paper">{g.title}</h4>
              <p className="mb-4 mt-1 text-sm text-g1">{g.note}</p>
              <ul className="flex flex-wrap gap-2">
                {g.core.map((x) => (
                  <li
                    className="rounded-full bg-paper px-3 py-1 text-sm text-ink"
                    key={x}
                  >
                    {x}
                  </li>
                ))}
                {g.hands.map((x) => (
                  <li
                    className="rounded-full border border-g2 px-3 py-1 text-sm text-g1"
                    key={x}
                  >
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section id="edu">
        <p className="k">06 — Education</p>
        <div className="edu-g mt-[4vh] grid gap-[6vw] text-g1 md:grid-cols-2">
          <div>
            <h3 className={`text-[clamp(28px,3.4vw,50px)] ${serifH}`}>
              B.Tech, Computer Science and Engineering
            </h3>
            <p>AKTU, Lucknow · 2021–2025 · CGPA 7.06</p>
          </div>
          <ul>
            <li>Full Stack Web Development (MERN) — CodeHelp, Oct 2024</li>
            <li>JavaScript (Advanced) — MindLuster, Nov 2023</li>
          </ul>
        </div>
      </section>

      <section id="contact">
        <p className="k">07 — Contact</p>
        <h2 className="big !max-w-[12ch] !text-[clamp(52px,10vw,168px)]">
          <Words text="Let’s talk about the *work.*" />
        </h2>
        <p className="max-w-[44ch] text-g1">
          I’m looking for a full-time full stack role. If my projects fit what
          your team is building, I’d like to hear from you.
        </p>
        <div className="links mt-[5vh] flex flex-wrap gap-3.5">
          <a className="btn bt" href="mailto:sagar.237052@gmail.com">
            sagar.237052@gmail.com
          </a>
          <a
            className="btn bt"
            href="https://www.linkedin.com/in/sagarkumar656"
            rel="noopener"
          >
            LinkedIn
          </a>
          <a
            className="btn bt"
            href="https://github.com/SagarSharma656"
            rel="noopener"
          >
            GitHub
          </a>
        </div>
        <div className="mt-3">
          <a className="btn bt" href="tel:+919627237052">
            +91 9627237052
          </a>
        </div>
      </section>
      <Motion />
    </main>
  );
}
