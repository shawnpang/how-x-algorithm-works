import ScrollReveal from "@/app/components/ScrollReveal";

export default function SpecialRules() {
  {/* DESIGN: 4 CARDS — could be 2x2 grid, or vertical timeline. Author diversity card needs the 4-bar visual baked in. */}
  return (
    <section className="section">
      <ScrollReveal>
        <p className="eyebrow">Step 6 &mdash; Special rules on top of the AI</p>
        <h2 className="h2">Hand-written rules the AI doesn&apos;t get to ignore</h2>
        <p className="lede">
          Even after the AI scores everything, there are a few hard-coded rules that adjust the result.
          These are deliberate decisions, not learned behaviour.
        </p>
      </ScrollReveal>

      <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <li>
          <ScrollReveal delay={100}>
            <article>
              <h3>Card 1 &mdash; Author diversity (you can&apos;t dominate a feed)</h3>
              <p className="mt-2">
                The first post by an author keeps 100% of its score. The second is multiplied by
                about 0.55. The third by 0.33. And so on.
              </p>

              <ul className="mt-4 space-y-2">
                <li>
                  <ScrollReveal delay={150}>
                    <span>1st post &mdash; 100%</span>
                    <div className="anim-grow-bar mt-1" style={{ width: "100%", height: "8px", background: "currentColor" }} />
                  </ScrollReveal>
                </li>
                <li>
                  <ScrollReveal delay={250}>
                    <span>2nd post &mdash; 55%</span>
                    <div className="anim-grow-bar mt-1" style={{ width: "55%", height: "8px", background: "currentColor" }} />
                  </ScrollReveal>
                </li>
                <li>
                  <ScrollReveal delay={350}>
                    <span>3rd post &mdash; 33%</span>
                    <div className="anim-grow-bar mt-1" style={{ width: "33%", height: "8px", background: "currentColor" }} />
                  </ScrollReveal>
                </li>
                <li>
                  <ScrollReveal delay={450}>
                    <span>4th post &mdash; 20%</span>
                    <div className="anim-grow-bar mt-1" style={{ width: "20%", height: "8px", background: "currentColor" }} />
                  </ScrollReveal>
                </li>
              </ul>

              <p className="mt-4">
                <em>Even if all your posts are great, only the first one or two get full credit per viewer.</em>
              </p>
            </article>
          </ScrollReveal>
        </li>

        <li>
          <ScrollReveal delay={200}>
            <article>
              <h3>Card 2 &mdash; Video gets a bonus</h3>
              <p className="mt-2">
                If your post has a video longer than a minimum threshold, it gets an extra scoring
                signal (video-quality-view).
              </p>
              <p className="mt-4">
                <em>Longer-than-trivial videos can earn more score than short clips or text-only posts.</em>
              </p>
            </article>
          </ScrollReveal>
        </li>

        <li>
          <ScrollReveal delay={300}>
            <article>
              <h3>Card 3 &mdash; New users get a different ranker</h3>
              <p className="mt-2">
                If you have very little history (e.g., fewer than ~100 actions), the system routes
                your feed through a different AI cluster &mdash; typically more topic-based, less personalised.
              </p>
              <p className="mt-4">
                <em>First-time users are essentially in a tutorial mode for the algorithm.</em>
              </p>
            </article>
          </ScrollReveal>
        </li>

        <li>
          <ScrollReveal delay={400}>
            <article>
              <h3>Card 4 &mdash; For You &ne; Following</h3>
              <p className="mt-2">
                On the {"\"Following\""} tab, only in-network candidates are used and there&apos;s no AI retrieval.
              </p>
              <p className="mt-2">
                On the {"\"For You\""} tab, both buckets are mixed and the AI ranker fully runs.
              </p>
              <p className="mt-4">
                <em>If you want pure chronological-style content from accounts you follow, switch tabs.</em>
              </p>
            </article>
          </ScrollReveal>
        </li>
      </ul>
    </section>
  );
}
