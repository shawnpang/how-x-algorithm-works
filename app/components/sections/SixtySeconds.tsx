import ScrollReveal from "@/app/components/ScrollReveal";

/* DESIGN: NUMBERED STEPS — could be a horizontal scroll, vertical stepper, or icons. */

export default function SixtySeconds() {
  return (
    <section className="section">
      <ScrollReveal>
        <p className="eyebrow">The 60-second version</p>
      </ScrollReveal>

      <ScrollReveal delay={100}>
        <h2 className="h2 mt-2">In one breath</h2>
      </ScrollReveal>

      <ScrollReveal delay={200}>
        <ol className="mt-4 space-y-4 list-decimal pl-6">
          <li>
            <strong>X gathers candidate posts</strong> — from people you follow + a giant pool
            of posts the AI thinks you&apos;ll like.
          </li>
          <li>
            <strong>It filters out the obvious nos</strong> — blocked authors, things
            you&apos;ve seen, posts you&apos;ve muted, old stuff, spam.
          </li>
          <li>
            <strong>An AI scores every remaining post</strong> — predicting 19 different ways
            you might react (like, reply, scroll past, report…).
          </li>
          <li>
            <strong>Those predictions are added up</strong> — likes/replies push the score UP.
            Reports/mutes push it DOWN.
          </li>
          <li>
            <strong>The top scores win your screen</strong> — usually ~50 posts, with a rule
            that the same person can&apos;t dominate.
          </li>
        </ol>
      </ScrollReveal>
    </section>
  );
}
