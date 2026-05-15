# How X's Algorithm Works

A plain-English, one-page explainer of how X (Twitter) decides what shows up in your feed. Designed for people who don't write code or read papers — but want to understand what determines whether their posts get seen.

Based on the open-source release at [github.com/xai-org/x-algorithm](https://github.com/xai-org/x-algorithm) (xAI, May 2026).

## What this is

A single-page Next.js app. Eleven sections, in narrative order:

1. **Hero** — the question this page answers
2. **The 60-second version** — the whole algorithm in 5 bullets
3. **Where posts come from** — Thunder (in-network) vs Phoenix Retrieval (out-of-network)
4. **Narrowing down** — funnel from thousands → ~50
5. **What gets filtered out** — the visibility filters
6. **The 19 reactions the AI predicts** — the prediction job
7. **Boosts vs demotes** — what raises and lowers your score
8. **Special rules** — author diversity, video bonus, new-user routing, For You vs Following
9. **What it means for creators** — actionable takeaways
10. **Common misconceptions** — myth-busting from the released code
11. **Footer**

The visual design is intentionally minimal. Every section is annotated with `{/* DESIGN: ... */}` comments so it can be redesigned (e.g. in Claude design) without touching content.

## Stack

- Next.js 16 (App Router) + TypeScript
- Tailwind v4
- No other runtime dependencies
- Pure CSS animations (no framer-motion, no chart libraries)

## Run locally

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

## Project layout

```
app/
  layout.tsx
  page.tsx                 ← composes all sections in order
  globals.css              ← .section / .eyebrow / .h2 / .lede + animations
  components/
    ScrollReveal.tsx       ← fades+rises children on scroll
    Counter.tsx            ← animated count-up
    sections/
      Hero.tsx
      SixtySeconds.tsx
      CandidateSources.tsx
      Funnel.tsx
      Filters.tsx
      NineteenReactions.tsx
      BoostsVsDemotes.tsx
      SpecialRules.tsx
      CreatorTakeaways.tsx
      MythBusting.tsx
      Footer.tsx
```

## Editing content vs editing design

- **Content** lives inside each section component. Rewrite the JSX text directly.
- **Design** is controlled by four global classes (`.section`, `.eyebrow`, `.h2`, `.lede`) in `app/globals.css`, plus minimal structural Tailwind utilities. Replace or extend those to re-skin the whole page.

## License

Educational explainer. The X algorithm source code itself is licensed by xAI — see their repo.
