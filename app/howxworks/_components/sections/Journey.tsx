"use client";

import { useEffect, useState } from "react";
import { Icon } from "@/app/howxworks/_lib/icons";

const STAGES = [
  { t: "You hit Post",             d: "Your post is published. The clock starts.",                                                                                                              c: "var(--accent)" },
  { t: "Indexed instantly",        d: "Within milliseconds, it lands in your followers' in-network store (Thunder).",                                                                            c: "var(--accent)" },
  { t: "Embedded for retrieval",   d: "Periodically, an AI computes an embedding of your post — a coordinate in 'topic space'. Strangers near you in that space may see it.",                    c: "var(--accent)" },
  { t: "Filters run per viewer",   d: "For each viewer, 9 hard filters drop you instantly if you match any.",                                                                                    c: "var(--warn)"   },
  { t: "AI scores 19 predictions", d: "For everyone who survives filters, the model predicts 19 reactions and sums them.",                                                                       c: "var(--good)"   },
  { t: "Author diversity penalty", d: "If you've already posted today, this one's score is multiplied by 0.55, 0.33, 0.20…",                                                                     c: "var(--bad)"    },
  { t: "Top scores fill feeds",    d: "If you're in the top ~50 for a viewer, you appear. Otherwise you don't.",                                                                                 c: "var(--good)"   },
];

export default function Journey() {
  const [step, setStep] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => {
      setStep((s) => {
        if (s >= STAGES.length - 1) {
          setPlaying(false);
          return s;
        }
        return s + 1;
      });
    }, 1800);
    return () => clearInterval(id);
  }, [playing]);

  const restart = () => {
    setStep(0);
    setPlaying(true);
  };

  return (
    <section className="chapter" id="ch-journey" style={{ background: "var(--bg-2)" }}>
      <div className="wrap">
        <div className="chapter-head">
          <span className="t-eyebrow">08 · Journey of a post</span>
          <h2 className="t-h2">
            From &quot;Post&quot; to feed.<br />
            About 7 stops, ~50 ms.
          </h2>
          <p className="t-sub" style={{ maxWidth: 700 }}>
            Press play and follow a single tweet through the system.
          </p>
        </div>

        <div className="j-controls">
          <button className="btn" onClick={restart}>
            <Icon name={playing ? "pause" : "play"} size={14} />
            {step === 0 && !playing
              ? "Play"
              : playing
              ? "Playing…"
              : step >= STAGES.length - 1
              ? "Replay"
              : "Resume"}
          </button>
          <div className="j-progress">
            {STAGES.map((_, i) => (
              <button
                key={i}
                className={`j-dot ${i <= step ? "is-on" : ""}`}
                onClick={() => {
                  setStep(i);
                  setPlaying(false);
                }}
                aria-label={`Step ${i + 1}`}
              />
            ))}
          </div>
          <span className="t-mono" style={{ fontSize: 12, color: "var(--text-3)" }}>
            STEP {String(step + 1).padStart(2, "0")} / {String(STAGES.length).padStart(2, "0")}
          </span>
        </div>

        <div className="j-card">
          <div className="j-track">
            {STAGES.map((_, i) => (
              <div
                key={i}
                className={`j-node ${i <= step ? "is-active" : ""} ${i === step ? "is-current" : ""}`}
              >
                <span className="j-node-num t-mono">{String(i + 1).padStart(2, "0")}</span>
              </div>
            ))}
            <div className="j-line" />
            <div
              className="j-line-fill"
              style={{ width: `calc(${(step / (STAGES.length - 1)) * 100}% )` }}
            />
          </div>

          <div className="j-stage">
            <div
              className="t-mono"
              style={{
                fontSize: 11,
                letterSpacing: ".14em",
                color: STAGES[step].c,
              }}
            >
              STAGE {step + 1}
            </div>
            <h3 className="t-h3" style={{ marginTop: 8 }}>{STAGES[step].t}</h3>
            <p style={{ color: "var(--text-3)", marginTop: 8, maxWidth: 600 }}>{STAGES[step].d}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
