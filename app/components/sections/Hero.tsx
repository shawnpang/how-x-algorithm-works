import ScrollReveal from "@/app/components/ScrollReveal";

/* DESIGN: HERO — big title, prominent. Could include a subtle animated background. */

export default function Hero() {
  return (
    <section className="section">
      <ScrollReveal>
        <p className="eyebrow">Based on xAI&apos;s open-sourced code (May 2026)</p>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <h1 className="mt-4 text-4xl font-bold">
          How does X decide what you see?
        </h1>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <p className="lede mt-4">
          Every time you open X, an AI looks at thousands of posts and picks ~50 for your feed.
          This page explains how — in plain English. No math required.
        </p>
      </ScrollReveal>

      <ScrollReveal delay={300}>
        <ul className="mt-6 flex flex-wrap gap-3">
          <li>
            <span className="inline-block px-3 py-1 text-sm">5-minute read</span>
          </li>
          <li>
            <span className="inline-block px-3 py-1 text-sm">
              Updated from github.com/xai-org/x-algorithm
            </span>
          </li>
        </ul>
      </ScrollReveal>
    </section>
  );
}
