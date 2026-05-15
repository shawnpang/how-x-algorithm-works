{/* DESIGN: FILTER GRID — looks good as a 2-column grid of small cards. Each card could have an icon. */}

import ScrollReveal from "@/app/components/ScrollReveal";

type Filter = {
  title: string;
  detail: string;
};

const filters: Filter[] = [
  { title: "Posts from people you blocked", detail: "Obvious one." },
  { title: "Posts from people you muted", detail: "Same, but quieter." },
  { title: "Posts with words you muted", detail: "Your muted-keyword list." },
  {
    title: "Posts you've already seen",
    detail: "Tracked with a probabilistic “have I shown this?” filter.",
  },
  { title: "Posts that are too old", detail: "There's a max age — old stuff gets dropped." },
  { title: "Your own posts", detail: "X doesn't show you your own posts in your feed." },
  { title: "Duplicate reposts of the same thing", detail: "Only the original or one version survives." },
  { title: "Posts that fail safety checks", detail: "Spam, gore, violence, content policy violations." },
  {
    title: "Posts from accounts you can't see",
    detail: "Private accounts you don't follow, suspended accounts, paywalled content you haven't paid for.",
  },
];

export default function Filters() {
  return (
    <section className="section">
      <ScrollReveal>
        <p className="eyebrow">Step 3 — What gets filtered out</p>
        <h2 className="h2">Posts that never even get scored</h2>
        <p className="lede">
          Before any AI ranks anything, these posts get dropped from the pile automatically:
        </p>
      </ScrollReveal>

      <ScrollReveal delay={150}>
        <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {filters.map((f) => (
            <li key={f.title}>
              <article>
                <h3>{f.title}</h3>
                <p className="mt-1">{f.detail}</p>
              </article>
            </li>
          ))}
        </ul>
      </ScrollReveal>

      <ScrollReveal delay={300}>
        <p className="mt-8">
          If your post matches any of these for a given viewer, it&apos;s invisible to that viewer — no matter how good
          the AI thinks it is.
        </p>
      </ScrollReveal>
    </section>
  );
}
