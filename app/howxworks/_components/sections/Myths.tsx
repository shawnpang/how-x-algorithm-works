"use client";

import { useState } from "react";
import { Icon } from "@/app/howxworks/_lib/icons";

const MYTHS = [
  {
    myth: "Verified / paid users get a boost.",
    truth: "No such boost was found in the released ranker. Accounts are treated equally by learned behaviour.",
    caveat: "Doesn't prove production has none — only that the public release doesn't reveal one.",
  },
  {
    myth: "There's a list of approved / banned topics.",
    truth: "There's safety filtering and category classifiers — but no 'promote this topic / suppress that' toggle in the released code.",
    caveat: "Trust & safety enforcement is real. It's not a topic dial, though.",
  },
  {
    myth: "Ads are ranked against organic posts.",
    truth: "Ads are inserted by a separate spacing rule. They're not scored alongside posts by the main ranker.",
    caveat: "Ad relevance is a whole other system, not this one.",
  },
  {
    myth: "The AI knows your post is 'good' or 'bad'.",
    truth: "It doesn't. It predicts what people like you will do. 'Quality' is just a stand-in for predicted engagement.",
    caveat: "This is why baity content can score well — and why 'just be authentic' is bad advice.",
  },
  {
    myth: "The released model = the model running on X right now.",
    truth: "Production is retrained continuously on live data. The release is a frozen snapshot from one moment in time.",
    caveat: "Things may have changed since — especially around trust/safety and advertiser preferences.",
  },
];

export default function Myths() {
  const [open, setOpen] = useState<number>(0);

  return (
    <section className="chapter no-border" id="ch-myths">
      <div className="wrap">
        <div className="chapter-head">
          <span className="t-eyebrow">11 · Common misconceptions</span>
          <h2 className="t-h2">
            What the open code<br />
            <span style={{ color: "var(--bad)" }}>does NOT</span> show.
          </h2>
          <p className="t-sub" style={{ maxWidth: 720 }}>
            Things people assume but the public release doesn&apos;t support. Tap to expand.
          </p>
        </div>

        <div className="m-stack">
          {MYTHS.map((m, i) => (
            <div key={i} className={`m-card ${open === i ? "is-open" : ""}`}>
              <button className="m-head" onClick={() => setOpen(open === i ? -1 : i)}>
                <span className="t-mono m-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="m-myth">
                  <span className="m-tag t-mono">CLAIM</span> &ldquo;{m.myth}&rdquo;
                </span>
                <span className="m-toggle">{open === i ? "−" : "+"}</span>
              </button>
              <div className="m-body">
                <div className="m-truth">
                  <span className="m-tag t-mono" style={{ color: "var(--good)" }}>ACTUAL</span>
                  <span>{m.truth}</span>
                </div>
                <div className="m-caveat">
                  <Icon name="warn" size={14} />
                  <span>{m.caveat}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
