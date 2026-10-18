"use client";
import { useEffect, useRef, useState } from "react";
import { DATA } from "@/data/content";
import { placeholder } from "@/lib/placeholder";

const items = DATA.projects.map((p) => ({
  ...p,
  img: p.img ?? placeholder(p.name),
}));

const pad = (n: number) => String(n).padStart(2, "0");

export default function Projects() {
  const [sel, setSel] = useState<number | null>(null);
  const ref = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const d = ref.current;
    if (d && sel !== null && !d.open) d.showModal();
  }, [sel]);

  const p = sel === null ? null : items[sel];

  return (
    <>
      <div className="hs">
        <div className="track" id="plist">
          {items.map((q, i) => (
            <article className="card" key={q.name}>
              <div className="im">
                <img src={q.img} alt={`${q.name}`} />
              </div>
              <div className="ci">
                <div>
                  <p className="k">
                    {pad(i + 1)} / {pad(items.length)} · {q.cat}
                  </p>
                  <h3>
                    <button onClick={() => setSel(i)} aria-haspopup="dialog">
                      {q.name}
                    </button>
                  </h3>
                </div>
                <div>
                  <p>{q.sum}</p>
                  <p className="mono">{q.stack.join(" · ")}</p>
                  {q.out && <p className="out">{q.out}</p>}
                  <div className="cl">
                    {q?.live && (
                      <a href={q.live} rel="noopener">
                        Live ↗
                      </a>
                    )}
                    {q?.code && (
                      <a href={q.code} rel="noopener">
                        Code ↗
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
      <dialog
        ref={ref}
        aria-label="Project case study"
        onClose={() => setSel(null)}
        onClick={(e) => {
          if (e.target === ref.current) ref.current?.close();
        }}
      >
        {p && (
          <>
            <form method="dialog">
              <button className="x">Close ✕</button>
            </form>
            <p className="k">{p.cat}</p>
            <h2>{p.name}</h2>
            <p className="lead">{p.what}</p>
            <img src={p.img} alt={`${p.name} screenshot (placeholder)`} />
            <h3 className="k">Context</h3>
            <p>{p.ctx}</p>
            {p.role && (
              <>
                <h3 className="k">My role</h3>
                <p>{p.role}</p>
              </>
            )}
            <h3 className="k">Implementation</h3>
            <ul>
              {p.built.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
            {p.out && (
              <>
                <h3 className="k">Reported outcome</h3>
                <p>{p.out}</p>
              </>
            )}
            <h3 className="k">Stack</h3>
            <p className="mono">{p.stack.join(" · ")}</p>
            <h3 className="k">Links</h3>
            <p>
              {
                p.live && (
                  <a href={p.live} rel="noopener">
                    Live ↗
                  </a>
                )
              }{"  "}
              {
                p.code && (
                  <a href={p.code} rel="noopener">
                    Code ↗
                  </a>
                ) 
              }
          
            </p>
          </>
        )}
      </dialog>
    </>
  );
}
