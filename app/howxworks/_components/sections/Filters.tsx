import { Icon } from "@/app/howxworks/_lib/icons";
import type { IconName } from "@/app/howxworks/_lib/data";

const FILTERS: { ic: IconName; t: string; d: string }[] = [
  { ic: "block",  t: "Blocked authors",       d: "Anyone you've blocked. Obvious one." },
  { ic: "muted",  t: "Muted authors",         d: "Same idea, quieter. They post — you don't see it." },
  { ic: "ban",    t: "Muted keywords",        d: "Words on your block list. The whole post is filtered out." },
  { ic: "eye",    t: "Already seen",          d: "A probabilistic 'have I shown this?' filter. No repeats." },
  { ic: "warn",   t: "Too old",               d: "There's a hard max age. Stale posts get dropped." },
  { ic: "user",   t: "Your own posts",        d: "X doesn't show you your own stuff in your feed." },
  { ic: "repost", t: "Duplicate reposts",     d: "Only one version of the same thing survives." },
  { ic: "flag",   t: "Safety violations",     d: "Spam, gore, violence, policy violations." },
  { ic: "ban",    t: "Inaccessible accounts", d: "Private, suspended, paywalled if you haven't paid." },
];

export default function Filters() {
  return (
    <section className="chapter" id="ch-filters">
      <div className="wrap">
        <div className="chapter-head">
          <span className="t-eyebrow">04 · Filters</span>
          <h2 className="t-h2">Posts that never even get scored.</h2>
          <p className="t-sub" style={{ maxWidth: 700 }}>
            Before any AI runs, these get dropped from the pile. If your post hits any of these for a given viewer, it&apos;s invisible — no matter how good it is.
          </p>
        </div>

        <div className="filt-grid">
          {FILTERS.map((f, i) => (
            <div key={i} className="filt-card">
              <div className="filt-x"><Icon name="x" size={18} stroke={2} /></div>
              <div className="filt-ic"><Icon name={f.ic} size={20} /></div>
              <div className="filt-t">{f.t}</div>
              <div className="filt-d">{f.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
