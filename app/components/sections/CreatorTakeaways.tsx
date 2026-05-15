import ScrollReveal from "@/app/components/ScrollReveal";

export default function CreatorTakeaways() {
  {/* DESIGN: NUMBERED TAKEAWAYS — could be cards with big numbers, or a checklist. */}
  return (
    <section className="section">
      <ScrollReveal>
        <p className="eyebrow">What this means for you</p>
        <h2 className="h2">If you post on X &mdash; the practical version</h2>
        <p className="lede">Translating the algorithm into things you can actually do.</p>
      </ScrollReveal>

      <ol className="mt-8 space-y-6">
        <li>
          <ScrollReveal delay={100}>
            <article>
              <h3><strong>Quality beats quantity.</strong></h3>
              <p className="mt-2">
                Because of the author-diversity rule, posting 5 mediocre things in a row hurts more
                than helps. Your 3rd post that day gets ~&#8531; the credit of your 1st.
              </p>
            </article>
          </ScrollReveal>
        </li>

        <li>
          <ScrollReveal delay={150}>
            <article>
              <h3><strong>The first hour matters.</strong></h3>
              <p className="mt-2">
                Old posts get filtered out by an age rule. Whatever engagement you&apos;ll get, you
                want it to happen while you&apos;re still in the eligible pool.
              </p>
            </article>
          </ScrollReveal>
        </li>

        <li>
          <ScrollReveal delay={200}>
            <article>
              <h3><strong>Different reactions count differently.</strong></h3>
              <p className="mt-2">
                A reply, repost, or share signals stronger interest than a like. Dwell time
                (people pausing to read) counts too &mdash; and you can&apos;t fake it.
              </p>
            </article>
          </ScrollReveal>
        </li>

        <li>
          <ScrollReveal delay={250}>
            <article>
              <h3><strong>Negative reactions are not just neutral &mdash; they&apos;re harmful.</strong></h3>
              <p className="mt-2">
                A single report, mute, or block carries more weight than several likes. Posting
                baity content that earns reports is a net loss.
              </p>
            </article>
          </ScrollReveal>
        </li>

        <li>
          <ScrollReveal delay={300}>
            <article>
              <h3><strong>Video tends to do well.</strong></h3>
              <p className="mt-2">
                There&apos;s a literal extra scoring slot for video views, and longer videos qualify for it.
              </p>
            </article>
          </ScrollReveal>
        </li>

        <li>
          <ScrollReveal delay={350}>
            <article>
              <h3><strong>You can&apos;t trick the AI by being someone else.</strong></h3>
              <p className="mt-2">
                The ranker uses learned embeddings from your post&apos;s content + your account history.
                There&apos;s no {"\"verified user boost\""} hack visible in the public code &mdash; though that
                doesn&apos;t mean none exists in production.
              </p>
            </article>
          </ScrollReveal>
        </li>
      </ol>
    </section>
  );
}
