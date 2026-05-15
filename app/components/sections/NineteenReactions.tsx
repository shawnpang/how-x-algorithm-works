{/* DESIGN: 19 ACTIONS — could be a grid of small icons. Or two columns of pills. */}

import ScrollReveal from "@/app/components/ScrollReveal";

const positive: string[] = [
  "Like (favorite)",
  "Reply",
  "Repost",
  "Quote tweet",
  "Click anywhere on the post",
  "Click the author's profile",
  "Watch the video",
  "Open the photo",
  "Share",
  "Share via DM",
  "Share via copy-link",
  "Dwell (stop scrolling and read)",
  "Click a quoted post inside it",
  "Follow the author",
];

const negative: string[] = [
  "Tap “not interested”",
  "Block the author",
  "Mute the author",
  "Report the post",
];

export default function NineteenReactions() {
  return (
    <section className="section">
      <ScrollReveal>
        <p className="eyebrow">Step 4 — The AI&apos;s prediction job</p>
        <h2 className="h2">19 ways you might react</h2>
        <p className="lede">
          For every post that survives filtering, an AI predicts how likely you are to do each of these 19 things.
          That&apos;s the entire {"“"}thinking{"”"} part of the ranker.
        </p>
      </ScrollReveal>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        <ScrollReveal delay={150}>
          <article>
            <h3>
              <span>Positive — these push the score up</span>
            </h3>
            <ul className="mt-4 space-y-2">
              {positive.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </ScrollReveal>

        <ScrollReveal delay={300}>
          <article>
            <h3>
              <span>Negative — these push the score DOWN</span>
            </h3>
            <ul className="mt-4 space-y-2">
              {negative.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </ScrollReveal>
      </div>

      <ScrollReveal delay={450}>
        <aside className="mt-8">
          <p>
            These predictions are then added together with weights. We don&apos;t know the exact weights from the
            released code, but we know the structure: positive actions add to your score, negative actions subtract.{" "}
            <strong>Getting one report can outweigh several likes.</strong>
          </p>
        </aside>
      </ScrollReveal>
    </section>
  );
}
