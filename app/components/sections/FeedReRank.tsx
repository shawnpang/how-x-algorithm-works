"use client";

import { useMemo, useState } from "react";
import { AUTHORS, POST_SEEDS, type Author } from "@/app/lib/data";
import { Icon } from "@/app/lib/icons";

type FeedPost = {
  id: string;
  author: Author;
  text: string;
  ageMin: number;
  eng: number;
  replies: number;
  reposts: number;
  likes: number;
  filterReason: string | null;
};

const FEED_POSTS: FeedPost[] = (() => {
  const items: FeedPost[] = [];
  const presetTimes = [2, 5, 12, 18, 25, 40, 55, 90, 130, 200, 320, 480];
  const engs = [240, 30, 980, 8, 65, 1500, 12, 180, 22, 410, 95, 5];
  for (let i = 0; i < 12; i++) {
    const a = AUTHORS[i % AUTHORS.length];
    const text = POST_SEEDS[(i * 3) % POST_SEEDS.length];
    const eng = engs[i];
    items.push({
      id: "p" + i,
      author: a,
      text,
      ageMin: presetTimes[i],
      eng,
      replies: Math.floor(eng * 0.08) + 1,
      reposts: Math.floor(eng * 0.12) + 1,
      likes: Math.floor(eng * 4) + 5,
      filterReason: i === 4 ? "muted-word" : i === 8 ? "seen" : i === 11 ? "too-old" : null,
    });
  }
  return items;
})();

function FeedItem({ p, rankBadge, dimmedReason }: { p: FeedPost; rankBadge: string; dimmedReason: string | null }) {
  return (
    <div className={`fr-item ${dimmedReason ? "is-dim" : ""}`}>
      <div className="fr-rank t-mono">{rankBadge}</div>
      <div className="fr-av" aria-hidden="true">{p.author.ic}</div>
      <div className="fr-body">
        <div className="fr-head">
          <span className="fr-name">{p.author.n}</span>
          <span className="fr-h">{p.author.h}</span>
          <span className="fr-dot">·</span>
          <span className="fr-time">{p.ageMin < 60 ? `${p.ageMin}m` : `${Math.round(p.ageMin / 60)}h`}</span>
        </div>
        <div className="fr-text">{p.text}</div>
        <div className="fr-meta">
          <span><Icon name="reply" size={12} /> {p.replies}</span>
          <span><Icon name="repost" size={12} /> {p.reposts}</span>
          <span><Icon name="heart" size={12} /> {p.likes.toLocaleString()}</span>
        </div>
        {dimmedReason && <div className="fr-tag">filtered: {dimmedReason}</div>}
      </div>
    </div>
  );
}

function ModeBtn({
  active, onClick, eyebrow, t, d, c,
}: {
  active: boolean;
  onClick: () => void;
  eyebrow: string;
  t: string;
  d: string;
  c: string;
}) {
  return (
    <button className={`fr-mode ${active ? "is-active" : ""}`} onClick={onClick}>
      <div className="eyebrow t-mono" style={{ color: c }}>{eyebrow}</div>
      <div className="t">{t}</div>
      <div className="d">{d}</div>
    </button>
  );
}

type Mode = "chrono" | "filtered" | "ranked";

export default function FeedReRank() {
  const [mode, setMode] = useState<Mode>("ranked");

  const list = useMemo<(FeedPost & { dimmed: string | null })[]>(() => {
    if (mode === "chrono") {
      return [...FEED_POSTS].sort((a, b) => a.ageMin - b.ageMin).map((p) => ({ ...p, dimmed: null }));
    }
    if (mode === "filtered") {
      return [...FEED_POSTS].sort((a, b) => a.ageMin - b.ageMin).map((p) => ({ ...p, dimmed: p.filterReason }));
    }
    return [...FEED_POSTS]
      .filter((p) => !p.filterReason)
      .sort((a, b) => b.eng - a.eng)
      .map((p) => ({ ...p, dimmed: null }));
  }, [mode]);

  return (
    <section className="chapter" id="ch-feed">
      <div className="wrap">
        <div className="chapter-head">
          <span className="t-eyebrow">09 · Re-ranking demo</span>
          <h2 className="t-h2">
            Same 12 posts.<br />
            Three different feeds.
          </h2>
          <p className="t-sub" style={{ maxWidth: 720 }}>
            Watch the same set of posts get re-ordered as filters and ranking turn on. Tap a mode.
          </p>
        </div>

        <div className="fr-grid">
          <div className="fr-controls">
            <ModeBtn
              active={mode === "chrono"}
              onClick={() => setMode("chrono")}
              eyebrow="MODE 01"
              t="Pure chronological"
              d="What you'd see if nothing was filtered or scored. Newest first."
              c="var(--text-3)"
            />
            <ModeBtn
              active={mode === "filtered"}
              onClick={() => setMode("filtered")}
              eyebrow="MODE 02"
              t="Filters applied"
              d="Still chronological — but blocked / muted / too-old / seen are dropped."
              c="var(--warn)"
            />
            <ModeBtn
              active={mode === "ranked"}
              onClick={() => setMode("ranked")}
              eyebrow="MODE 03"
              t="Filtered + ranked"
              d="What you actually see. Filters + AI predicted engagement score."
              c="var(--good)"
            />

            <div className="fr-note">
              <Icon name="warn" size={14} />
              <span>
                Notice how the highest-engagement post (1.5K likes) is post #6 chronologically — but ranks #1 once the algorithm runs. Recency only matters as a filter.
              </span>
            </div>
          </div>

          <div className="fr-feed">
            <div className="fr-feed-header">
              <span className="t-mono">
                {mode === "chrono"
                  ? "← NEWEST · TIMELINE"
                  : mode === "filtered"
                  ? "← NEWEST · FILTERED"
                  : "← HIGHEST SCORE · RANKED"}
              </span>
              <span className="t-mono" style={{ color: "var(--text-3)" }}>
                {list.filter((p) => !p.dimmed).length} shown
              </span>
            </div>
            <div className="fr-feed-body">
              {list.map((p, i) => (
                <FeedItem
                  key={p.id}
                  p={p}
                  rankBadge={`#${String(i + 1).padStart(2, "0")}`}
                  dimmedReason={p.dimmed}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
