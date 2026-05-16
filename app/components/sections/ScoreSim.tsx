"use client";

import { useMemo, useState } from "react";
import { SIGNALS } from "@/app/lib/data";
import { Icon } from "@/app/lib/icons";
import { useCountUp } from "@/app/lib/hooks";

type Counts = Record<string, number>;

const INITIAL: Counts = {
  like: 120, reply: 8, repost: 4, share: 3, dwell: 60, profile: 5, video: 0,
  follow: 1, ni: 0, mute: 0, block: 0, report: 0,
};

const ROWS: { group: "positive" | "negative"; items: string[] }[] = [
  { group: "positive", items: ["like", "reply", "repost", "share", "dwell", "profile", "follow", "video"] },
  { group: "negative", items: ["ni", "mute", "block", "report"] },
];

const PRESETS: { label: string; set: Counts }[] = [
  { label: "Banger 🔥",    set: { like: 800, reply: 60, repost: 80, share: 40, dwell: 400, profile: 35, follow: 12, video: 0, ni: 2,  mute: 0, block: 0, report: 0 } },
  { label: "Normal day",   set: { like: 80,  reply: 6,  repost: 2,  share: 1,  dwell: 40,  profile: 3,  follow: 0,  video: 0, ni: 1,  mute: 0, block: 0, report: 0 } },
  { label: "Crickets",     set: { like: 5,   reply: 0,  repost: 0,  share: 0,  dwell: 8,   profile: 0,  follow: 0,  video: 0, ni: 0,  mute: 0, block: 0, report: 0 } },
  { label: "Got reported", set: { like: 200, reply: 30, repost: 8,  share: 4,  dwell: 80,  profile: 6,  follow: 1,  video: 0, ni: 15, mute: 8, block: 4, report: 3 } },
];

export default function ScoreSim() {
  const [counts, setCounts] = useState<Counts>(INITIAL);

  const sigBy = useMemo(() => {
    const m: Record<string, (typeof SIGNALS)[number]> = {};
    SIGNALS.forEach((s) => (m[s.id] = s));
    return m;
  }, []);

  const score = useMemo(() => {
    let s = 0;
    Object.entries(counts).forEach(([k, v]) => {
      const sig = sigBy[k];
      if (!sig) return;
      const factor =
        ["like", "dwell"].includes(k) ? 0.4 :
        ["share", "reply", "repost", "profile", "video"].includes(k) ? 1.0 :
        k === "follow" ? 2.0 : 5.0;
      s += sig.sign * sig.w * v * factor;
    });
    return s;
  }, [counts, sigBy]);

  const displayScore = useCountUp(score, 350);

  const adj = (k: string, delta: number) =>
    setCounts((c) => ({ ...c, [k]: Math.max(0, (c[k] || 0) + delta) }));

  const verdict =
    score > 600 ? { t: "VIRAL",  c: "var(--good)",   d: "Top ~50 candidate. This post wins screens." } :
    score > 200 ? { t: "STRONG", c: "var(--good)",   d: "Solid performance. Will reach beyond followers." } :
    score > 50  ? { t: "OK",     c: "var(--accent)", d: "Followers see it. Limited out-of-network reach." } :
    score > -50 ? { t: "WEAK",   c: "var(--text-3)", d: "Most followers won't even see this in their feed." } :
                  { t: "BURIED", c: "var(--bad)",    d: "Negative signals are crushing it. Effectively invisible." };

  return (
    <section className="chapter" id="ch-score">
      <div className="wrap">
        <div className="chapter-head">
          <span className="t-eyebrow">06 · Score simulator</span>
          <h2 className="t-h2">
            Tap reactions.<br />
            Watch the score move.
          </h2>
          <p className="t-sub" style={{ maxWidth: 720 }}>
            The 19 predictions get added with weights into one number. Higher = more screens. Here&apos;s a live version.{" "}
            <b style={{ color: "var(--bad)" }}>One report ≈ many likes lost.</b>
          </p>
        </div>

        <div className="ss-grid">
          <div className="ss-score-card">
            <div className="t-mono" style={{ fontSize: 11, letterSpacing: ".14em", color: "var(--text-3)" }}>LIVE SCORE</div>
            <div className="ss-score-num t-num" style={{ color: verdict.c }}>
              {displayScore >= 0 ? "+" : ""}
              {Math.round(displayScore).toLocaleString()}
            </div>
            <div className="ss-verdict">
              <span
                className="chip"
                style={{
                  color: verdict.c,
                  borderColor: verdict.c,
                  background: `color-mix(in oklab, ${verdict.c} 12%, transparent)`,
                }}
              >
                {verdict.t}
              </span>
              <span style={{ color: "var(--text-3)", fontSize: 14 }}>{verdict.d}</span>
            </div>

            <div className="ss-presets">
              <div className="t-mono" style={{ fontSize: 11, letterSpacing: ".14em", color: "var(--text-3)", marginBottom: 10 }}>
                TRY A PRESET
              </div>
              <div className="ss-preset-row">
                {PRESETS.map((p) => (
                  <button key={p.label} className="ss-preset" onClick={() => setCounts(p.set)}>
                    {p.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="ss-controls">
            {ROWS.map((row) => (
              <div key={row.group} className="ss-row">
                <div
                  className="t-mono ss-row-label"
                  style={{ color: row.group === "positive" ? "var(--good)" : "var(--bad)" }}
                >
                  {row.group === "positive" ? "PUSHES UP" : "PUSHES DOWN"}
                </div>
                <div className="ss-row-items">
                  {row.items.map((k) => {
                    const s = sigBy[k];
                    return (
                      <div key={k} className={`ss-item ${s.sign > 0 ? "is-pos" : "is-neg"}`}>
                        <div className="ss-item-l">
                          <span className="ss-item-ic"><Icon name={s.ic} size={14} /></span>
                          <span className="ss-item-name">{s.t}</span>
                          <span className="ss-item-w t-mono">{s.sign > 0 ? "+" : "−"}{s.w.toFixed(1)}</span>
                        </div>
                        <div className="ss-item-r">
                          <button className="ss-step minus" onClick={() => adj(k, -1)}>−</button>
                          <span className="ss-count t-num">{counts[k] || 0}</span>
                          <button
                            className="ss-step plus"
                            onClick={() => adj(k, k === "like" || k === "dwell" ? 25 : 1)}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p
          style={{
            marginTop: 24,
            fontSize: 13,
            color: "var(--text-4)",
            maxWidth: 720,
            fontFamily: "var(--font-mono)",
          }}
        >
          ILLUSTRATIVE — EXACT WEIGHTS NOT IN THE PUBLIC RELEASE
        </p>
      </div>
    </section>
  );
}
