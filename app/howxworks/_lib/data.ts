export type Chapter = { id: string; num: string; title: string };

export const CHAPTERS: Chapter[] = [
  { id: "ch-tldr",      num: "01", title: "60-second version" },
  { id: "ch-buckets",   num: "02", title: "Two buckets" },
  { id: "ch-funnel",    num: "03", title: "The funnel" },
  { id: "ch-filters",   num: "04", title: "What gets filtered" },
  { id: "ch-signals",   num: "05", title: "19 signals" },
  { id: "ch-score",     num: "06", title: "Score simulator" },
  { id: "ch-diversity", num: "07", title: "Author rule" },
  { id: "ch-journey",   num: "08", title: "Journey of a post" },
  { id: "ch-feed",      num: "09", title: "Feed re-ranking" },
  { id: "ch-scorecard", num: "10", title: "Will this go viral?" },
  { id: "ch-myths",     num: "11", title: "Common myths" },
];

export type Author = { h: string; n: string; ic: string };

export const AUTHORS: Author[] = [
  { h: "@elonmusk",   n: "Elon Musk",        ic: "🧑‍🚀" },
  { h: "@karpathy",   n: "Andrej Karpathy",  ic: "🧠" },
  { h: "@sama",       n: "Sam Altman",       ic: "👤" },
  { h: "@levelsio",   n: "@levelsio",        ic: "🌴" },
  { h: "@naval",      n: "Naval",            ic: "📜" },
  { h: "@balajis",    n: "Balaji",           ic: "🌐" },
  { h: "@paulg",      n: "Paul Graham",      ic: "💡" },
  { h: "@visakanv",   n: "Visa",             ic: "🧵" },
  { h: "@swyx",       n: "swyx",             ic: "🎙️" },
  { h: "@dhh",        n: "DHH",              ic: "🏎️" },
  { h: "@patrickc",   n: "Patrick Collison", ic: "🔧" },
  { h: "@danabra_mov",n: "Dan Abramov",      ic: "⚛️" },
];

export const POST_SEEDS: string[] = [
  "the algorithm has officially read my diary",
  "you don't have writer's block, you have taste exceeding skill",
  "shipped a new feature. nobody noticed. perfect.",
  "the best startups feel illegal at first",
  "AI is going to replace your job. specifically yours. I checked",
  "muting the word 'banger' has improved my life 30%",
  "made a chart of all my charts",
  "every problem looks like a thread when you sell threads",
  "I quit my job to scroll professionally",
  "the For You tab knows things about me I haven't told my therapist",
  "spent 3 hours optimizing a function that runs once a year",
  "remote work was great until I started commuting to my desk",
  "if your post has more than one idea, it's two posts",
  "the algorithm rewards what the algorithm rewards",
  "twitter is just a chat room with a sales funnel",
  "nobody read your post. it's fine. so did mine",
  "good code is code that ships. bad code is code that ships faster",
  "first principles is a fancy way of saying 'I disagree'",
  "the best onboarding is a friend showing you",
  "engagement bait works. that's why we hate it. and use it",
];

export function nfmt(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(n >= 10_000 ? 0 : 1).replace(/\.0$/, "") + "K";
  return n.toLocaleString();
}

export function nFull(n: number): string {
  return Math.round(n).toLocaleString();
}

export function fakePost(seed: number = Math.random()) {
  const aIdx = Math.floor(((seed * 9301 + 49297) % 233280) / 233280 * AUTHORS.length);
  const tIdx = Math.floor(((seed * 32717 + 11171) % 233280) / 233280 * POST_SEEDS.length);
  return { author: AUTHORS[aIdx], text: POST_SEEDS[tIdx] };
}

export type Signal = {
  id: string;
  t: string;
  ic: IconName;
  sign: 1 | -1;
  w: number;
  d: string;
};

export type IconName =
  | "heart" | "reply" | "repost" | "share" | "eye" | "x" | "check" | "warn"
  | "play" | "pause" | "image" | "dot" | "ban" | "flag" | "user" | "click"
  | "muted" | "block" | "follow" | "arrow-up" | "arrow-down";

export const SIGNALS: Signal[] = [
  { id: "like",     t: "Like",              ic: "heart",      sign: 1,  w: 1.0, d: "Default engagement. The cheapest positive signal — fast and frequent." },
  { id: "reply",    t: "Reply",             ic: "reply",      sign: 1,  w: 3.0, d: "Strong signal. A reply means you stopped, read, and wrote something." },
  { id: "repost",   t: "Repost",            ic: "repost",     sign: 1,  w: 2.5, d: "You're putting your name on it. Treated as high-trust." },
  { id: "quote",    t: "Quote",             ic: "repost",     sign: 1,  w: 2.7, d: "Like a repost, but with your own take added. Counts a lot." },
  { id: "click",    t: "Click anywhere",    ic: "click",      sign: 1,  w: 0.8, d: "Any tap on the post — meaningful but cheap." },
  { id: "profile",  t: "Profile click",     ic: "user",       sign: 1,  w: 1.4, d: "After seeing your post, they want to know who you are. Big deal." },
  { id: "video",    t: "Watch video",       ic: "play",       sign: 1,  w: 2.2, d: "Longer watches score higher. Video gets a dedicated extra slot." },
  { id: "photo",    t: "Open photo",        ic: "image",      sign: 1,  w: 0.9, d: "Tap to expand an image. Lightweight positive signal." },
  { id: "share",    t: "Share",             ic: "share",      sign: 1,  w: 1.8, d: "Open the share sheet. Real intent to spread it." },
  { id: "dm",       t: "Share via DM",      ic: "share",      sign: 1,  w: 2.4, d: "Personally recommending to someone. Very strong signal." },
  { id: "copylink", t: "Copy link",         ic: "share",      sign: 1,  w: 1.5, d: "About to paste elsewhere. Tracked as a share." },
  { id: "dwell",    t: "Dwell",             ic: "eye",        sign: 1,  w: 2.0, d: "You stopped scrolling and read. Can't be faked." },
  { id: "qclick",   t: "Click quoted post", ic: "click",      sign: 1,  w: 0.9, d: "Curiosity about the inner quoted post." },
  { id: "follow",   t: "Follow author",     ic: "follow",     sign: 1,  w: 3.5, d: "After seeing the post, you want more. The strongest positive." },
  { id: "ni",       t: "Not interested",    ic: "x",          sign: -1, w: 2.5, d: "Explicit 'hide this'. Heavily weighted." },
  { id: "mute",     t: "Mute author",       ic: "muted",      sign: -1, w: 4.0, d: "You don't want this person anymore. Big personal preference signal." },
  { id: "block",    t: "Block author",      ic: "block",      sign: -1, w: 6.0, d: "Nuclear. The strongest negative signal short of reporting." },
  { id: "report",   t: "Report post",       ic: "flag",       sign: -1, w: 8.0, d: "Outweighs many likes. Teaches the system you really don't want this." },
  { id: "scroll",   t: "Scroll past",       ic: "arrow-down", sign: -1, w: 0.4, d: "Soft negative. You saw it and chose not to engage." },
];
