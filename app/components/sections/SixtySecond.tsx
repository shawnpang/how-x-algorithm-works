"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/app/lib/icons";

const STEPS = [
  { t: "Gather candidates",       d: "Pulls fresh posts from people you follow + a giant pool the AI thinks you'll like." },
  { t: "Filter the obvious nos",  d: "Blocks, mutes, seen-it, too-old, spam — gone before anything gets scored." },
  { t: "AI scores everything",    d: "Predicts 19 ways you might react to each post — like, reply, scroll, report…" },
  { t: "Add it up",               d: "Likes & replies push score up. Reports & mutes push it down (hard)." },
  { t: "Top ~50 win",             d: "The highest scores fill your feed. No one author can dominate." },
];

export default function SixtySecond() {
  const [active, setActive] = useState(0);
  const [auto, setAuto] = useState(true);

  useEffect(() => {
    if (!auto) return;
    const id = setInterval(() => setActive((a) => (a + 1) % STEPS.length), 2400);
    return () => clearInterval(id);
  }, [auto]);

  return (
    <section className="chapter" id="ch-tldr">
      <div className="wrap">
        <div className="chapter-head">
          <span className="t-eyebrow">01 · The 60-second version</span>
          <h2 className="t-h2">In one breath.</h2>
        </div>

        <div className="sixty-grid">
          {STEPS.map((s, i) => (
            <button
              key={i}
              className={`sixty-card ${i === active ? "is-active" : ""}`}
              onClick={() => { setActive(i); setAuto(false); }}
              onMouseEnter={() => { setActive(i); setAuto(false); }}
            >
              <div className="num t-mono">{String(i + 1).padStart(2, "0")}</div>
              <div className="t-h3">{s.t}</div>
              <div className="d">{s.d}</div>
              <div className="progress" aria-hidden="true">
                <div className="bar" style={{ width: i === active ? "100%" : "0%" }} />
              </div>
            </button>
          ))}
        </div>

        <div className="sixty-actions">
          <button className="btn ghost" onClick={() => setAuto((a) => !a)}>
            <Icon name={auto ? "pause" : "play"} size={14} />
            {auto ? "Pause" : "Play"} auto-tour
          </button>
          <span className="t-mono" style={{ fontSize: 13, color: "var(--text-3)" }}>
            Click any step to lock it. Scroll for the full version ↓
          </span>
        </div>
      </div>
    </section>
  );
}
