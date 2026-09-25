# 0seconds Portfolio

This repository is the SvelteKit presentation and publication layer for 0seconds. It also hosts standalone web experiments.

## Default Scope

Portfolio work is the default scope.

Build and extend the portfolio through the root site routes and portfolio-specific library code.

Canvas Preview is an existing standalone experiment and is out of scope by default.

Do not inspect, search, refactor, reorganize, or modify Canvas-specific code during portfolio work unless one of the following is true:

- the user explicitly asks for Canvas work;
- a portfolio change directly depends on shared code that requires checking Canvas compatibility;
- a build, route, or global configuration change creates a concrete regression risk for Canvas.

When one of these exceptions applies, inspect only the minimum Canvas-related context required for the task.

## Boundaries

Canvas Preview is independently namespaced under:

- `src/lib/canvas/`
- `src/routes/canvas-preview/`
- `src/routes/canvas/`
- `docs/canvas-preview.adoc`

Do not restructure, merge, redesign, or reuse Canvas internals for the portfolio unless explicitly requested.

Do not treat existing Canvas patterns as the default architecture for new portfolio code.

Portfolio source content and curation originate in `oseconds/knowledge-workspace`.

Treat material brought into this repository as presentation input. Do not independently reinterpret raw production evidence or change approval, visibility, or publication meaning.

## Implementation

Preserve the existing SvelteKit, Svelte 5, TypeScript, and static-adapter setup unless a task requires changing it.

Prefer the smallest working diff and follow existing project patterns.

Create portfolio-specific code independently from Canvas-specific code unless a genuinely shared requirement has been demonstrated.

Extract shared components only from demonstrated repeated needs rather than designing a large generic system up front.

Keep artwork and media visually dominant over interface chrome.

Preserve source aspect ratios unless an intentional crop is explicitly part of the task.

Do not change deployment or publication behavior unless explicitly requested.

Avoid unrelated cleanup, migration, formatting, or architectural work.

## Verification

For substantive code changes, run `npm run check`.

When routes, build configuration, static paths, or deployment behavior change, also run `npm run build`.

If verification reveals an issue inside Canvas that was not caused by the current portfolio change, report it separately rather than expanding the task to fix Canvas.