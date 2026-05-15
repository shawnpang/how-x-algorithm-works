import ScrollReveal from "@/app/components/ScrollReveal";

export default function BoostsVsDemotes() {
  {/* DESIGN: TWO COLUMNS, OPPOSING — left and right sides could be visually contrasted (green/red, up/down arrows, etc.). */}
  return (
    <section className="section">
      <ScrollReveal>
        <p className="eyebrow">Step 5 &mdash; What makes a score go up or down</p>
        <h2 className="h2">Boosts vs demotes</h2>
        <p className="lede">
          The AI&apos;s 19 predictions get combined into one final score. Some predictions add to it.
          Some subtract from it. Here&apos;s the gist.
        </p>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <ScrollReveal delay={100}>
          <article>
            <h3>Pushes your score UP</h3>
            <ul className="mt-4 space-y-2">
              <li>People hitting like, reply, repost, or share</li>
              <li>People pausing to actually read (dwell time)</li>
              <li>People watching your video (longer = better)</li>
              <li>People clicking your profile after seeing the post</li>
              <li>People opening attached photos</li>
              <li>People who don&apos;t follow you choosing to follow after seeing the post</li>
            </ul>
          </article>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <article>
            <h3>Pushes your score DOWN</h3>
            <ul className="mt-4 space-y-2">
              <li>Tapping {"\"not interested\""} on your post</li>
              <li>Muting you</li>
              <li>Blocking you</li>
              <li>Reporting your post</li>
              <li>Being the 2nd / 3rd / 4th post by you in someone&apos;s feed (see special rules below)</li>
              <li>Posting content too similar to something already shown (repost dedup)</li>
            </ul>
          </article>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={300}>
        <aside className="mt-8">
          <p>
            <strong>One report counts a lot more than one like.</strong> Negative signals like reports,
            blocks, and mutes are treated as strong personal preference signals &mdash; they don&apos;t just
            affect that one post, they teach the system you&apos;re not someone this viewer wants to see.
          </p>
        </aside>
      </ScrollReveal>
    </section>
  );
}
