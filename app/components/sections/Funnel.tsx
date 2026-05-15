{/* DESIGN: FUNNEL — horizontal bars shrinking dramatically. Could be redone as a real funnel/triangle shape. */}

import ScrollReveal from "@/app/components/ScrollReveal";
import Counter from "@/app/components/Counter";

type Stage = {
  label: string;
  value: number;
  display?: string;
  widthPercent: number;
  delay: number;
};

const stages: Stage[] = [
  { label: "Candidates gathered", value: 10000, widthPercent: 100, delay: 0 },
  { label: "After filters (blocked, seen, etc.)", value: 2000, widthPercent: 20, delay: 150 },
  { label: "Scored by the AI ranker", value: 2000, widthPercent: 20, delay: 300 },
  { label: "Top picks shown to you", value: 50, display: "~50", widthPercent: 0.5, delay: 450 },
];

export default function Funnel() {
  return (
    <section className="section">
      <ScrollReveal>
        <p className="eyebrow">Step 2 — Narrowing down</p>
        <h2 className="h2">From thousands to fifty</h2>
        <p className="lede">
          Each time you open the app, the system starts with a huge pool and shrinks it stage by stage. Approximate
          numbers below — actual numbers vary by user.
        </p>
      </ScrollReveal>

      <ol className="mt-8 space-y-4">
        {stages.map((stage) => (
          <ScrollReveal key={stage.label} delay={stage.delay}>
            <li className="grid grid-cols-1 sm:grid-cols-12 gap-2 items-center">
              <span className="sm:col-span-5">{stage.label}</span>
              <span className="sm:col-span-2">
                {stage.display === "~50" ? (
                  <>
                    ~<Counter to={stage.value} />
                  </>
                ) : (
                  <Counter to={stage.value} />
                )}
              </span>
              <div className="sm:col-span-5">
                <div
                  className="anim-grow-bar min-w-[12px] h-3 bg-neutral-800"
                  style={{ width: `${stage.widthPercent}%` }}
                  aria-hidden="true"
                />
              </div>
            </li>
          </ScrollReveal>
        ))}
      </ol>

      <ScrollReveal delay={600}>
        <p className="mt-6">
          <small>These are rough order-of-magnitude numbers, not exact counts from the code.</small>
        </p>
      </ScrollReveal>
    </section>
  );
}
