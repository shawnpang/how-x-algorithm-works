{/* DESIGN: TWO COLUMNS — could be illustrated as two pipelines feeding a funnel below. */}

import ScrollReveal from "@/app/components/ScrollReveal";

export default function CandidateSources() {
  return (
    <section className="section">
      <ScrollReveal>
        <p className="eyebrow">Step 1 — Where posts come from</p>
        <h2 className="h2">Two giant buckets of posts</h2>
        <p className="lede">
          Before X ranks anything, it has to gather candidates. There are two sources, and they work very differently.
        </p>
      </ScrollReveal>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <ScrollReveal delay={150}>
          <article>
            <h3>
              {"“In-network”"} <span>(called Thunder in the code)</span>
            </h3>
            <p className="mt-2">Recent posts from people you follow.</p>
            <ul className="mt-4 space-y-2">
              <li>Kept in fast memory so it loads in under a millisecond</li>
              <li>Comes from your follow list (typically a few thousand accounts)</li>
              <li>Updated in real time as people post</li>
            </ul>
          </article>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <article>
            <h3>
              {"“Out-of-network”"} <span>(called Phoenix Retrieval)</span>
            </h3>
            <p className="mt-2">Posts from the rest of X that an AI thinks you&apos;ll like.</p>
            <ul className="mt-4 space-y-2">
              <li>An AI compares your past behaviour to a pool of posts and picks the closest matches</li>
              <li>Doesn&apos;t require you to follow the author</li>
              <li>
                Refreshed less often (the AI&apos;s {"“"}map{"”"} of all posts is updated periodically, not instantly)
              </li>
            </ul>
          </article>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={450}>
        <p className="mt-8">
          If you&apos;re using the <strong>Following</strong> tab, only the in-network bucket is used. The{" "}
          <strong>For You</strong> tab uses both.
        </p>
      </ScrollReveal>
    </section>
  );
}
