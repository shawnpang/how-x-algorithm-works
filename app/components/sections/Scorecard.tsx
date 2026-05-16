"use client";

import { useMemo, useState } from "react";

type Answer = "yes" | "no";

const Q: { id: string; q: string; sub: string; yes: number; no: number }[] = [
  { id: "first_hour",   q: "Will you push it in the first hour after posting?",
    sub: "Replying to early commenters, sharing in DMs — keeps early signals strong.",
    yes: 18, no: -6 },
  { id: "single_idea",  q: "Does the post contain exactly one idea?",
    sub: "If you have two ideas, that's two posts. Multi-topic posts ranker-confuse and engagement-dilute.",
    yes: 14, no: -8 },
  { id: "first_today",  q: "Is this your first post today?",
    sub: "Author diversity penalty: post #2 ≈ 55%, #3 ≈ 33%, #4 ≈ 20%.",
    yes: 16, no: -10 },
  { id: "dwell_worth",  q: "Will people stop scrolling to read it?",
    sub: "Dwell time is a strong signal you can't fake. A worth-reading post earns it.",
    yes: 18, no: -4 },
  { id: "reply_worthy", q: "Does it invite a reply, not just a like?",
    sub: "Replies count ~3× a like. A question or hot take outperforms a statement.",
    yes: 14, no: -2 },
  { id: "video",        q: "Does it have a video over the minimum length?",
    sub: "Video-quality-view is an extra scoring slot. Long-enough video qualifies.",
    yes: 12, no: 0 },
  { id: "no_bait",      q: "Is it free of report/mute bait?",
    sub: "One report can outweigh many likes. Bait earns negative signals fast.",
    yes: 8, no: -22 },
  { id: "follow_after", q: "Could a stranger see this and want to follow you?",
    sub: "Profile-clicks and follows-after-view are the strongest positives in the ranker.",
    yes: 14, no: -3 },
];

const VERDICTS = [
  { min: 90,   t: "EXPLOSIVE", c: "var(--good)",   d: "All the right signals lined up. If the audience matches the AI's predictions, this will land hard." },
  { min: 60,   t: "STRONG",    c: "var(--good)",   d: "Solid reach beyond your follower base. Out-of-network bucket likely to amplify it." },
  { min: 30,   t: "DECENT",    c: "var(--accent)", d: "Your followers will mostly see it. Out-of-network reach modest." },
  { min: 0,    t: "QUIET",     c: "var(--warn)",   d: "Will land in some followers' For You. Not built to travel further." },
  { min: -1e9, t: "BURIED",    c: "var(--bad)",    d: "Negative signals likely. Most followers won't even see it." },
];

export default function Scorecard() {
  const [ans, setAns] = useState<Record<string, Answer>>({});

  const score = useMemo(() => {
    let s = 50;
    Q.forEach((q) => {
      const a = ans[q.id];
      if (a === "yes") s += q.yes;
      else if (a === "no") s += q.no;
    });
    return Math.max(0, Math.min(100, s));
  }, [ans]);

  const answered = Object.keys(ans).length;
  const verdict = VERDICTS.find((v) => score >= v.min)!;

  return (
    <section className="chapter" id="ch-scorecard" style={{ background: "var(--bg-2)" }}>
      <div className="wrap">
        <div className="chapter-head">
          <span className="t-eyebrow">10 · Creator scorecard</span>
          <h2 className="t-h2">
            Will <i>this</i> post go viral?<br />
            Answer 8 questions.
          </h2>
          <p className="t-sub" style={{ maxWidth: 720 }}>
            A diagnostic, not an oracle. Each yes/no maps to a behaviour the algorithm rewards or punishes.
          </p>
        </div>

        <div className="sc-grid">
          <div className="sc-questions">
            {Q.map((q, i) => (
              <div key={q.id} className="sc-q">
                <div className="sc-q-num t-mono">{String(i + 1).padStart(2, "0")}</div>
                <div className="sc-q-body">
                  <div className="sc-q-title">{q.q}</div>
                  <div className="sc-q-sub">{q.sub}</div>
                </div>
                <div className="sc-q-ctl">
                  <button
                    className={`sc-pick ${ans[q.id] === "yes" ? "is-on-yes" : ""}`}
                    onClick={() => setAns((a) => ({ ...a, [q.id]: "yes" }))}
                  >
                    Yes
                  </button>
                  <button
                    className={`sc-pick ${ans[q.id] === "no" ? "is-on-no" : ""}`}
                    onClick={() => setAns((a) => ({ ...a, [q.id]: "no" }))}
                  >
                    No
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="sc-result">
            <div className="sc-result-card">
              <div className="t-mono" style={{ fontSize: 11, letterSpacing: ".14em", color: "var(--text-3)" }}>
                VIRAL SCORE · {answered}/{Q.length} ANSWERED
              </div>
              <div className="sc-big t-num" style={{ color: verdict.c }}>{score}</div>
              <div className="sc-bar">
                <div className="sc-bar-fill" style={{ width: `${score}%`, background: verdict.c }} />
              </div>
              <div className="sc-verdict">
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
              </div>
              <p style={{ color: "var(--text-3)", marginTop: 16, fontSize: 14, lineHeight: 1.5 }}>{verdict.d}</p>
              <button className="btn ghost" onClick={() => setAns({})} style={{ marginTop: 20 }}>
                Reset
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
