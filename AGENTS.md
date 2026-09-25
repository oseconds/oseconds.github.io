# 0seconds Portfolio

This repository is the SvelteKit presentation and publication layer for 0seconds. It also hosts standalone web experiments.

## Boundaries

- Grow the main portfolio from the root site routes.
- Keep Canvas Preview independently namespaced under `src/lib/canvas/`, `src/routes/canvas-preview/`, and `src/routes/canvas/`.
- Do not restructure, merge, or redesign Canvas as part of portfolio work unless explicitly requested.
- Portfolio source content and curation originate in `oseconds/knowledge-workspace`. Treat material brought into this repository as presentation input; do not independently reinterpret raw production evidence or change approval/publication meaning.
- Keep `docs/canvas-preview.adoc` as Canvas-specific documentation.

## Implementation

- Preserve the existing SvelteKit, Svelte 5, TypeScript, and static-adapter setup unless a task requires changing it.
- Prefer the smallest working diff and follow existing project patterns.
- Extract shared components from demonstrated repeated needs rather than designing a large generic system up front.
- Keep artwork and media visually dominant over interface chrome.
- Preserve source aspect ratios unless an intentional crop is explicitly part of the task.
- Do not change deployment or publication behavior unless explicitly requested.

## Verification

- For substantive code changes, run `npm run check`.
- When routes, build configuration, static paths, or deployment behavior change, also run `npm run build`.
