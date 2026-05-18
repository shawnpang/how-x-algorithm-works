"use client";

import { useEffect, useMemo, useRef } from "react";
import { fakePost } from "@/app/howxworks/_lib/data";
import { XGlyph } from "@/app/howxworks/_lib/icons";

type Item = { author: { h: string; n: string; ic: string }; text: string; cls?: string };

function HeroFeedRow({
  y,
  items,
  speed = 28,
  offset = 0,
}: {
  y: number;
  items: Item[];
  speed?: number;
  offset?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let r = 0;
    let x = offset;
    const tick = () => {
      x -= speed / 60;
      if (ref.current) {
        const w = ref.current.scrollWidth / 2;
        if (-x > w) x += w;
        ref.current.style.transform = `translateX(${x}px)`;
      }
      r = requestAnimationFrame(tick);
    };
    r = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(r);
  }, [speed, offset]);

  return (
    <div className="row" style={{ top: y }} ref={ref}>
      {[...items, ...items].map((it, i) => (
        <span key={i} className={`post ${it.cls || ""}`}>
          <span style={{ opacity: 0.6 }}>{it.author.h}</span>
          <span>
            {it.text.slice(0, 38)}
            {it.text.length > 38 ? "…" : ""}
          </span>
        </span>
      ))}
    </div>
  );
}

export default function Hero() {
  const rows = useMemo(() => {
    const seeds = (n: number, mult: number) =>
      Array.from({ length: n }, (_, i) => fakePost(((i + 1) * mult) / 100));
    const make = (n: number, mult: number, keepRate: number): Item[] =>
      seeds(n, mult).map((p) => ({
        ...p,
        cls:
          Math.random() < keepRate
            ? "kept"
            : Math.random() < 0.4
            ? "dropped"
            : "",
      }));
    return [
      make(14, 11, 0.06),
      make(14, 23, 0.08),
      make(14, 37, 0.05),
      make(14, 53, 0.09),
    ];
  }, []);

  return (
    <section className="hero">
      <div className="wrap">
        <div className="eyebrow-row">
          <span
            className="chip"
            style={{ color: "var(--accent)", borderColor: "var(--accent)" }}
          >
            <span
              style={{
                display: "inline-block",
                width: 8,
                height: 8,
                borderRadius: "50%",
                background: "var(--accent)",
              }}
            />
            Based on xAI&apos;s open-sourced code · May 2026
          </span>
        </div>

        <h1 className="t-h1">
          Every time you open{" "}
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.04em",
              whiteSpace: "nowrap",
              verticalAlign: "baseline",
            }}
          >
            <XGlyph size={66} />,
          </span>
          <br />
          an AI picks <span className="accent">~50 posts</span>
          <br />
          out of thousands.
        </h1>

        <p className="t-sub" style={{ marginTop: 32, maxWidth: 680 }}>
          Here&apos;s exactly how it chooses — in plain English. No math. Eleven
          interactive sections, ~5&nbsp;minutes.
        </p>

        <div className="sub-row">
          <span>
            <span className="k">11</span> chapters
          </span>
          <span>
            <span className="k">8</span> interactive demos
          </span>
          <span>
            <span className="k">5 min</span> read
          </span>
          <span>
            by{" "}
            <a
              href="https://twitter.com/0xshawnpang"
              target="_blank"
              rel="noopener"
              style={{
                color: "var(--text)",
                borderBottom: "1px solid var(--border-2)",
              }}
            >
              @0xshawnpang
            </a>
          </span>
        </div>
      </div>

      <div className="live-feed" aria-hidden="true">
        <HeroFeedRow y={20} items={rows[0]} speed={22} offset={0} />
        <HeroFeedRow y={70} items={rows[1]} speed={32} offset={-120} />
        <HeroFeedRow y={120} items={rows[2]} speed={18} offset={-60} />
        <HeroFeedRow y={170} items={rows[3]} speed={26} offset={-200} />
      </div>

      <div className="wrap" style={{ marginTop: 28 }}>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <span className="chip good">
            <span>●</span> kept by the algorithm
          </span>
          <span className="chip" style={{ color: "var(--text-4)" }}>
            <span style={{ textDecoration: "line-through" }}>filtered out</span>
          </span>
          <span className="chip">scrolling = real-time ranking</span>
        </div>
      </div>
    </section>
  );
}
