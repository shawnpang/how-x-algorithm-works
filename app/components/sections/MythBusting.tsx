import ScrollReveal from "@/app/components/ScrollReveal";

export default function MythBusting() {
  {/* DESIGN: MYTH/REALITY — could be styled as flashcards or two-tone splits. */}
  return (
    <section className="section">
      <ScrollReveal>
        <p className="eyebrow">Common misconceptions</p>
        <h2 className="h2">What the open code does NOT show</h2>
        <p className="lede">
          A few things that are often assumed but aren&apos;t supported by the open-sourced code:
        </p>
      </ScrollReveal>

      <dl className="mt-8 space-y-6">
        <ScrollReveal delay={100}>
          <dt><strong>{"\"Verified / paid users get a boost.\""}</strong></dt>
          <dd className="mt-2">
            No such boost was found in the released code&apos;s ranking path. The ranker treats accounts
            equally based on learned behaviour. (This does NOT prove production has no such boost &mdash;
            only that the public release doesn&apos;t reveal one.)
          </dd>
        </ScrollReveal>

        <ScrollReveal delay={150}>
          <dt><strong>{"\"There's a list of approved / banned topics.\""}</strong></dt>
          <dd className="mt-2">
            Not in the way people imagine. There&apos;s safety filtering (spam, violence, etc.) and
            category classifiers, but no found {"\"promote this topic / suppress that topic\""} toggle
            in the released ranker.
          </dd>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <dt><strong>{"\"Ads are ranked against organic posts.\""}</strong></dt>
          <dd className="mt-2">
            No. Ads are inserted into your feed by a separate spacing rule, not scored alongside
            posts by the main ranker.
          </dd>
        </ScrollReveal>

        <ScrollReveal delay={250}>
          <dt><strong>{"\"The AI knows what your post is about and decides if it's 'good'.\""}</strong></dt>
          <dd className="mt-2">
            Sort of &mdash; but not in the way you&apos;d think. The AI predicts how <em>people like you</em>{" "}
            will react. It doesn&apos;t have a notion of {"\"quality\""} &mdash; only {"\"engagement likely.\""}
          </dd>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <dt><strong>{"\"The released model = the model running on X right now.\""}</strong></dt>
          <dd className="mt-2">
            No. The production model is <strong>retrained continuously</strong> on live data. The
            release is a frozen snapshot from one moment in time. Things may have changed since.
          </dd>
        </ScrollReveal>
      </dl>

      <ScrollReveal delay={400}>
        <aside className="mt-8">
          <p>
            We&apos;re working only from the publicly released code. Production X may differ, especially
            in things like trust/safety scores, advertiser preferences, and continuous retraining behaviour.
          </p>
        </aside>
      </ScrollReveal>
    </section>
  );
}
