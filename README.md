# 0seconds

Portfolio website and interactive web experiments.

## Structure

- `src/routes/` — SvelteKit routes for the portfolio site and standalone web tools
- `src/lib/canvas/` — Canvas Preview implementation
- `static/media/` — site and experiment media
- `docs/` — project-specific documentation that does not belong in the repository root

## Portfolio

The repository root will grow into the main 0seconds portfolio site.

Portfolio content and curation are maintained separately in [oseconds/knowledge-workspace](https://github.com/oseconds/knowledge-workspace). This repository is the presentation and publication layer.

## Canvas Preview

Canvas Preview remains an independent interactive tool inside this SvelteKit application. Its documentation lives in:

`docs/canvas-preview.adoc`

The portfolio may link to or surface Canvas Preview later, but the Canvas implementation remains separately namespaced under `src/lib/canvas/` and its existing routes.
