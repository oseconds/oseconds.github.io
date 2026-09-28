# 0seconds Portfolio

## Repository role

This repository is the SvelteKit presentation and publication layer for 0seconds. It also hosts standalone web experiments.

Portfolio source content and curation have their canonical source in `oseconds/knowledge-workspace`. This repository presents approved input; do not independently reinterpret raw evidence or change visibility, approval, or publication meaning.

## Portfolio boundary and routes

Portfolio work is the default scope. Build and extend it under `src/routes/(portfolio)/`, with portfolio-specific code in `src/lib/` and portfolio-specific media under `static/media/` as needed.

`src/routes/(portfolio)/` owns the portfolio shell and navigation. The root `src/routes/+layout.svelte` and `+layout.ts` remain app-wide; keep portfolio navigation inside the route group so it does not appear on Canvas routes.

Current public information architecture:

- `/` — portfolio entry and selected highlights
- `/work` — major works and case studies that need explanation
- `/archive` — image-led visual archive and selected visual material
- `/live` — VJ, realtime audiovisual, and live performance work
- `/info` — About, selected history/CV, links, and contact

Current route structure:

```text
src/routes/
├─ +layout.svelte
├─ +layout.ts
├─ (portfolio)/
│  ├─ +layout.svelte
│  ├─ +page.svelte
│  ├─ work/
│  │  ├─ +page.svelte
│  │  └─ void-a/+page.svelte
│  ├─ archive/+page.svelte
│  ├─ live/+page.svelte
│  └─ info/+page.svelte
├─ canvas-preview/
└─ canvas/
```

These section roles describe the current direction; they do not authorize pre-emptive generic schemas, registries, or CMS infrastructure. Preserve the existing `/work/void-a` route and its presentation unless the task explicitly concerns it.

## Canvas boundary

Canvas Preview is a standalone experiment and is out of scope by default. Its independent namespace is:

- `src/lib/canvas/`
- `src/routes/canvas-preview/`
- `src/routes/canvas/`
- `docs/canvas-preview.adoc`

Do not inspect, search, refactor, reorganize, or modify Canvas-specific code during portfolio work unless one of the following applies:

- the user explicitly asks for Canvas work;
- a portfolio change directly depends on shared code and requires a compatibility check;
- a route, build, or global configuration change creates a concrete regression risk for Canvas.

When an exception applies, inspect only the minimum Canvas-related context needed. Keep portfolio and Canvas as independent presentation boundaries. Portfolio shell and navigation must not apply to Canvas routes. Do not restructure, merge, redesign, or reuse Canvas internals for the portfolio, and do not treat Canvas patterns as the default for portfolio code.

## Content handling

Work, Archive, and Live have distinct presentation roles. Do not independently reclassify work or move it between sections; follow source curation and approval. Use provenance-sensitive information—including media, dates, roles, authorship, credits, and project status—only to the extent supported by the source. If information is insufficient, report the gap instead of inferring it.

## Architecture and implementation

- Preserve the existing SvelteKit, Svelte 5, TypeScript, and `adapter-static` setup.
- Prefer the smallest working diff and preserve the `(portfolio)` route-group boundary.
- Do not introduce dynamic `[slug]` routes, CMS/content collections, registries, archive manifests, or generic data schemas before an actual need is established.
- Extract shared components only after demonstrated repetition; avoid generic card/grid systems without a repeated requirement.
- Keep artwork and media visually dominant over interface chrome.
- Preserve source aspect ratios; crop only when the task explicitly calls for an intentional crop.
- Preserve accessibility and responsive behavior.
- Do not change deployment or publication behavior unless explicitly requested.
- Avoid unrelated cleanup, migration, formatting, or architectural work.

## Verification

- For substantive code changes, run `npm run check`.
- When routes, static paths, build configuration, or deployment behavior change, also run `npm run build`.
- For route or layout changes, check that portfolio and Canvas boundaries remain intact.
- For media changes, check paths, aspect ratio, and overflow.
- Report unrelated pre-existing issues separately; do not expand the task to fix them.
