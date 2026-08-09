import Lottie from "lottie-react";

/** Minimal hand-authored Lottie: a dot easing down inside a mouse outline. */
const scrollAnim = {
  v: "5.7.4",
  fr: 60,
  ip: 0,
  op: 90,
  w: 120,
  h: 200,
  nm: "scroll",
  ddd: 0,
  assets: [],
  layers: [
    {
      ddd: 0,
      ind: 1,
      ty: 4,
      nm: "dot",
      sr: 1,
      ks: {
        o: {
          a: 1,
          k: [
            { t: 0, s: [0], i: { x: [0.4], y: [1] }, o: { x: [0.4], y: [0] } },
            { t: 20, s: [100], i: { x: [0.4], y: [1] }, o: { x: [0.4], y: [0] } },
            { t: 60, s: [100], i: { x: [0.4], y: [1] }, o: { x: [0.4], y: [0] } },
            { t: 85, s: [0] },
          ],
        },
        r: { a: 0, k: 0 },
        p: {
          a: 1,
          k: [
            { t: 0, s: [60, 60, 0], i: { x: 0.3, y: 1 }, o: { x: 0.4, y: 0 }, to: [0, 8, 0], ti: [0, -8, 0] },
            { t: 85, s: [60, 118, 0] },
          ],
        },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      shapes: [
        {
          ty: "gr",
          it: [
            { ty: "el", p: { a: 0, k: [0, 0] }, s: { a: 0, k: [12, 12] } },
            { ty: "fl", c: { a: 0, k: [0, 0.961, 0.831, 1] }, o: { a: 0, k: 100 } },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } },
          ],
        },
      ],
      ip: 0,
      op: 90,
      st: 0,
      bm: 0,
    },
    {
      ddd: 0,
      ind: 2,
      ty: 4,
      nm: "body",
      sr: 1,
      ks: {
        o: { a: 0, k: 70 },
        r: { a: 0, k: 0 },
        p: { a: 0, k: [60, 90, 0] },
        a: { a: 0, k: [0, 0, 0] },
        s: { a: 0, k: [100, 100, 100] },
      },
      shapes: [
        {
          ty: "gr",
          it: [
            { ty: "rc", p: { a: 0, k: [0, 0] }, s: { a: 0, k: [56, 96] }, r: { a: 0, k: 28 } },
            { ty: "st", c: { a: 0, k: [0, 0.961, 0.831, 1] }, o: { a: 0, k: 100 }, w: { a: 0, k: 4 }, lc: 2, lj: 2 },
            { ty: "tr", p: { a: 0, k: [0, 0] }, a: { a: 0, k: [0, 0] }, s: { a: 0, k: [100, 100] }, r: { a: 0, k: 0 }, o: { a: 0, k: 100 } },
          ],
        },
      ],
      ip: 0,
      op: 90,
      st: 0,
      bm: 0,
    },
  ],
};

export default function ScrollDownLottie({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-center gap-2 pointer-events-none ${className}`} aria-hidden="true">
      <Lottie animationData={scrollAnim} loop autoplay style={{ width: 44, height: 74 }} />
      <span className="text-[10px] tracking-[0.3em] uppercase text-primary/70 font-display">Scroll</span>
    </div>
  );
}
