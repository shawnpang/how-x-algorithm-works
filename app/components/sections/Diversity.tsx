"use client";

import { useState } from "react";
import { AUTHORS } from "@/app/lib/data";
import { Icon } from "@/app/lib/icons";

const DIV_RULE = [
  { n: 1, pct: 100, label: "1st post" },
  { n: 2, pct: 55,  label: "2nd post" },
  { n: 3, pct: 33,  label: "3rd post" },
  { n: 4, pct: 20,  label: "4th post" },
  { n: 5, pct: 12,  label: "5th post" },
];

export default function Diversity() {
  const [n, setN] = useState(3);

  const me = AUTHORS[0];
  const posts = DIV_RULE.slice(0, n);

  return (
    <section className="chapter" id="ch-diversity">
      <div className="wrap">
        <div className="chapter-head">
          <span className="t-eyebrow">07 · Hand-written rule</span>
          <h2 className="t-h2">
            You can&apos;t dominate.<br />
            Each post by the same author<br />
            <span style={{ color: "var(--bad)" }}>counts less than the last.</span>
          </h2>
          <p className="t-sub" style={{ maxWidth: 720 }}>
            Even if all your posts are great, only the first one or two get full credit per viewer. This is hard-coded — the AI doesn&apos;t get to override it.
          </p>
        </div>

        <div className="div-grid">
          <div className="div-left">
            <div className="t-mono" style={{ fontSize: 11, letterSpacing: ".14em", color: "var(--text-3)" }}>
              IF YOU POST {n} TIME{n > 1 ? "S" : ""} TODAY...
            </div>
            <div className="div-slider-row">
              <input
                type="range"
                min="1"
                max="5"
                step="1"
                value={n}
                onChange={(e) => setN(parseInt(e.target.value))}
                className="div-slider"
              />
              <span className="t-num" style={{ fontSize: 36, fontWeight: 700, minWidth: 60, textAlign: "right" }}>
                {n}×
              </span>
            </div>
            <p style={{ color: "var(--text-3)", fontSize: 15, lineHeight: 1.5, marginTop: 12 }}>
              {n === 1 && "One post gets full reach. This is the sweet spot."}
              {n === 2 && "Your 2nd post earns ~55% of what the 1st would have."}
              {n === 3 && "By post 3, you're at ~⅓ effective score. Each one cannibalizes the last."}
              {n === 4 && "Post 4 is at ~20%. Diminishing returns turn into vanishing returns."}
              {n === 5 && "By post 5 you're shouting into a vacuum. Most of these are wasted."}
            </p>
            <div className="div-takeaway">
              <Icon name="warn" size={18} />
              <span>
                <b>Quality &gt; quantity.</b> Posting 5 mediocre things hurts more than 1 great one.
              </span>
            </div>
          </div>

          <div className="div-right">
            {posts.map((p, i) => (
              <div key={p.n} className="div-post" style={{ animationDelay: `${i * 80}ms` }}>
                <div className="div-post-meta">
                  <div className="div-post-num t-mono">#{p.n}</div>
                  <div>
                    <div className="div-post-label">{p.label}</div>
                    <div className="div-post-sub">
                      @{me.h.replace("@", "")} · post #{p.n} today
                    </div>
                  </div>
                </div>
                <div className="div-post-bar-wrap">
                  <div
                    className="div-post-bar"
                    style={{
                      width: `${p.pct}%`,
                      background:
                        p.pct >= 60 ? "var(--good)" :
                        p.pct >= 30 ? "var(--accent)" :
                        "var(--bad)",
                    }}
                  >
                    <span className="div-post-pct t-num">{p.pct}%</span>
                  </div>
                </div>
                <div className="div-post-score t-num">×{(p.pct / 100).toFixed(2)}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="div-extras">
          <div className="extra-card">
            <span className="t-mono" style={{ fontSize: 11, letterSpacing: ".14em", color: "var(--good)" }}>BONUS</span>
            <h3 className="t-h3" style={{ marginTop: 8 }}>Video gets extra credit</h3>
            <p style={{ color: "var(--text-3)", fontSize: 14, marginTop: 8 }}>
              If your post has a video longer than a threshold, it gets an extra scoring signal (video-quality-view). Longer ≠ trivially better — but trivial clips don&apos;t qualify.
            </p>
          </div>
          <div className="extra-card">
            <span className="t-mono" style={{ fontSize: 11, letterSpacing: ".14em", color: "var(--warn)" }}>NEW ACCOUNT</span>
            <h3 className="t-h3" style={{ marginTop: 8 }}>The system has a tutorial mode</h3>
            <p style={{ color: "var(--text-3)", fontSize: 14, marginTop: 8 }}>
              If you have few interactions (~&lt;100), your feed is routed to a different cluster — more topic-based, less personalised. First-time users get training-wheels ranking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
