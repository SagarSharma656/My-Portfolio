import { Fragment } from "react";
/** Headline words wrapped for the reveal animation. Use *text* for italic. */
export function Words({ text }: { text: string }) {
  return (
    <>
      {text
        .split(/(\*[^*]+\*)/)
        .filter(Boolean)
        .map((seg, i) => {
          const em = seg.startsWith("*"),
            t = em ? seg.slice(1, -1) : seg;
          const inner = t
            .split(/\s+/)
            .filter(Boolean)
            .map((w, j) => (
              <Fragment key={j}>
                <span className="w">
                  <span>{w}</span>
                </span>{" "}
              </Fragment>
            ));
          return em ? (
            <em key={i}>{inner}</em>
          ) : (
            <Fragment key={i}>{inner}</Fragment>
          );
        })}
    </>
  );
}
export const Letters = ({ text }: { text: string }) => (
  <>
    {[...text].map((c, i) => (
      <i key={i}>{c}</i>
    ))}
  </>
);
export const Scrub = ({ text }: { text: string }) => (
  <>
    {text.split(" ").map((w, i) => (
      <Fragment key={i}>
        <span className="sw">{w}</span>{" "}
      </Fragment>
    ))}
  </>
);
