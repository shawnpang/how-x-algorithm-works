"use client";

import { useState } from "react";
import { SIGNALS } from "@/app/lib/data";
import { Icon } from "@/app/lib/icons";

export default function Signals() {
  const [picked, setPicked] = useState<string>("like");
  const sig = SIGNALS.find((s) => s.id === picked)!;

  return (
    <section className="chapter" id="ch-signals" style={{ background: "var(--bg-2)" }}>
      <div className="wrap">
        <div className="chapter-head">
          <span className="t-eyebrow">05 · The AI&apos;s prediction job</span>
          <h2 className="t-h2">
            <span style={{ color: "var(--good)" }}>19 ways</span> you might react.<br />
            That&apos;s the entire AI.
          </h2>
          <p className="t-sub" style={{ maxWidth: 720 }}>
            For every post, the model predicts how likely you are to do each of these things. Hover any one to see what it does.{" "}
            <b style={{ color: "var(--text)" }}>Weights are illustrative</b> — exact production values aren&apos;t in the public release.
          </p>
        </div>

        <div className="sig-grid">
          {SIGNALS.map((s) => (
            <button
              key={s.id}
              className={`sig-tile ${s.sign > 0 ? "is-pos" : "is-neg"} ${s.id === picked ? "is-on" : ""}`}
              onMouseEnter={() => setPicked(s.id)}
              onClick={() => setPicked(s.id)}
            >
              <div className="sig-ic"><Icon name={s.ic} size={18} /></div>
              <div className="sig-t">{s.t}</div>
              <div className="sig-w t-mono">{s.sign > 0 ? "+" : "−"}{s.w.toFixed(1)}</div>
            </button>
          ))}
        </div>

        <div className="sig-detail">
          <div className="sig-detail-l">
            <div
              className="t-mono"
              style={{
                fontSize: 11,
                letterSpacing: ".14em",
                color: sig.sign > 0 ? "var(--good)" : "var(--bad)",
              }}
            >
              {sig.sign > 0 ? "POSITIVE SIGNAL — PUSHES SCORE UP" : "NEGATIVE SIGNAL — PUSHES SCORE DOWN"}
            </div>
            <h3 className="t-h3" style={{ marginTop: 8 }}>{sig.t}</h3>
            <p style={{ color: "var(--text-3)", marginTop: 8, fontSize: 16, maxWidth: 480 }}>{sig.d}</p>
          </div>
          <div className="sig-detail-r">
            <div className="weight-bar">
              <div className="weight-label t-mono">REL. WEIGHT</div>
              <div className="weight-track">
                <div
                  className="weight-fill"
                  style={{
                    width: `${Math.min(100, sig.w * 12)}%`,
                    background: sig.sign > 0 ? "var(--good)" : "var(--bad)",
                  }}
                />
              </div>
              <div
                className="t-num"
                style={{
                  fontSize: 28,
                  fontWeight: 700,
                  color: sig.sign > 0 ? "var(--good)" : "var(--bad)",
                }}
              >
                {sig.sign > 0 ? "+" : "−"}{sig.w.toFixed(1)}
              </div>
            </div>
          </div>
        </div>

        <p style={{ marginTop: 28, fontSize: 14, color: "var(--text-3)", maxWidth: 720 }}>
          One report can outweigh many likes. The AI doesn&apos;t have a notion of &quot;quality&quot; — only &quot;engagement likely&quot;. It&apos;s predicting{" "}
          <i>what people like you will do</i>, not judging your post.
        </p>
      </div>
    </section>
  );
}
