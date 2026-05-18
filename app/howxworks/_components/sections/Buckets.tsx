"use client";

import { useMemo, useState } from "react";
import { AUTHORS, POST_SEEDS, type Author } from "@/app/howxworks/_lib/data";
import { Icon } from "@/app/howxworks/_lib/icons";

type Mock = {
  author: Author;
  text: string;
  time: string;
  replies: number;
  reposts: number;
  likes: number;
};

function makeMock(seed: number, who?: Author): Mock {
  const r = (m: number) => Math.floor(((seed + m) * 9301 + 49297) % 233280) / 233280;
  const author = who || AUTHORS[Math.floor(r(0) * AUTHORS.length)];
  const text = POST_SEEDS[Math.floor(r(1) * POST_SEEDS.length)];
  return {
    author,
    text,
    time: ["2m", "8m", "23m", "1h", "2h", "5h"][Math.floor(r(2) * 6)],
    replies: Math.floor(r(3) * 800) + 5,
    reposts: Math.floor(r(4) * 1500) + 12,
    likes: Math.floor(r(5) * 12000) + 80,
  };
}

function FauxPost({ p, badge }: { p: Mock; badge?: string | null }) {
  return (
    <div className="fp">
      <div className="fp-av" aria-hidden="true">{p.author.ic}</div>
      <div className="fp-body">
        <div className="fp-head">
          <span className="fp-name">{p.author.n}</span>
          <span className="fp-h">{p.author.h}</span>
          <span className="fp-dot">·</span>
          <span className="fp-time">{p.time}</span>
          {badge && <span className="fp-badge">{badge}</span>}
        </div>
        <div className="fp-text">{p.text}</div>
        <div className="fp-meta">
          <span><Icon name="reply" size={13} /> {p.replies}</span>
          <span><Icon name="repost" size={13} /> {p.reposts}</span>
          <span><Icon name="heart" size={13} /> {p.likes}</span>
        </div>
      </div>
    </div>
  );
}

export default function Buckets() {
  const [tab, setTab] = useState<"foryou" | "following">("foryou");

  const inNetwork = useMemo(
    () => [1, 2, 3, 4].map((i) => makeMock(i, AUTHORS[i])),
    []
  );
  const outNetwork = useMemo(
    () => [11, 12, 13].map((i) => makeMock(i, AUTHORS[i + 4])),
    []
  );

  const isFY = tab === "foryou";
  const list = isFY
    ? [
        inNetwork[0],
        inNetwork[1],
        outNetwork[0],
        inNetwork[2],
        outNetwork[1],
        inNetwork[3],
        outNetwork[2],
      ]
    : inNetwork;

  return (
    <section className="chapter" id="ch-buckets">
      <div className="wrap">
        <div className="chapter-head">
          <span className="t-eyebrow">02 · Where posts come from</span>
          <h2 className="t-h2">
            Two buckets of posts.<br />
            One tab uses both.
          </h2>
          <p className="t-sub" style={{ maxWidth: 700 }}>
            Switch tabs to watch which posts show up. The For You tab mixes{" "}
            <b>people you follow</b> with{" "}
            <b>strangers an AI picked for you</b>. Following uses only the first.
          </p>
        </div>

        <div className="buck-grid">
          <div className="buck-left">
            <div className="buck-bucket">
              <div className="buck-bucket-h">
                <span
                  className="t-mono"
                  style={{
                    fontSize: 11,
                    color: "var(--text-3)",
                    letterSpacing: ".14em",
                  }}
                >
                  BUCKET A · IN-NETWORK
                </span>
                <h3 className="t-h3" style={{ marginTop: 6 }}>
                  &ldquo;Thunder&rdquo;
                </h3>
                <div className="d">
                  Recent posts from accounts you follow. Loaded from fast in-memory
                  storage in &lt; 1&nbsp;ms.
                </div>
              </div>
              <div className="buck-stat">
                <b>~few thousand</b> follows watched, updated live
              </div>
            </div>

            <div className="buck-bucket alt">
              <div className="buck-bucket-h">
                <span
                  className="t-mono"
                  style={{
                    fontSize: 11,
                    color: "var(--accent)",
                    letterSpacing: ".14em",
                  }}
                >
                  BUCKET B · OUT-OF-NETWORK
                </span>
                <h3 className="t-h3" style={{ marginTop: 6 }}>
                  &ldquo;Phoenix Retrieval&rdquo;
                </h3>
                <div className="d">
                  An AI compares your behaviour to all of X and pulls the closest
                  matches. You don&apos;t follow them.
                </div>
              </div>
              <div className="buck-stat">
                <b>~all of X</b> embedded, refreshed periodically
              </div>
            </div>
          </div>

          <div className="buck-right">
            <div className="phone">
              <div className="phone-tabs">
                <button
                  className={`p-tab ${isFY ? "is-active" : ""}`}
                  onClick={() => setTab("foryou")}
                >
                  For you
                </button>
                <button
                  className={`p-tab ${!isFY ? "is-active" : ""}`}
                  onClick={() => setTab("following")}
                >
                  Following
                </button>
              </div>
              <div className="phone-feed">
                {list.map((p, i) => {
                  const isOut = outNetwork.some(
                    (o) => o.author.h === p.author.h
                  );
                  return (
                    <FauxPost
                      key={i}
                      p={p}
                      badge={isOut && isFY ? "for you" : null}
                    />
                  );
                })}
              </div>
              <div className="phone-legend">
                {isFY ? (
                  <span>
                    <b style={{ color: "var(--accent)" }}>● For You:</b> mixes
                    followed + AI-picked strangers
                  </span>
                ) : (
                  <span>
                    <b>● Following:</b> only people you follow, newest first
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
