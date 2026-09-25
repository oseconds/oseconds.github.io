<svelte:head>
	<title>VOID-A — 0seconds</title>
	<meta
		name="description"
		content="A portfolio project page for VOID-A. Curated project details and media will be added here."
	/>
</svelte:head>

<main class="project-page">
	<header class="site-header" aria-label="Site identity">
		<p class="site-name">0seconds</p>
		<p class="section-name">Selected work</p>
	</header>

	<article>
		<section class="intro" aria-labelledby="project-title">
			<p class="eyebrow">Project</p>
			<h1 id="project-title">VOID-A</h1>
			<p class="overview">
				Project overview placeholder. Curated description and context will be added when the
				approved project material is available.
			</p>
		</section>

		<figure class="hero">
			<div class="media-placeholder" role="img" aria-label="Placeholder for VOID-A hero media">
				<span>Hero media placeholder</span>
			</div>
			<figcaption>Curated project media will appear here.</figcaption>
		</figure>

		<section class="continuation" aria-label="Additional project media">
			<div class="continuation-marker" aria-hidden="true">01</div>
			<div class="continuation-placeholder" role="img" aria-label="Placeholder for additional VOID-A media">
				<span>Additional media placeholder</span>
			</div>
		</section>
	</article>
</main>

<style>
	:global(body:has(.project-page)) {
		margin: 0;
		background: #f3f2ef;
	}

	.project-page {
		width: min(100% - 48px, 1440px);
		margin: 0 auto;
		padding: 28px 0 96px;
		color: #171715;
		font-family: Arial, Helvetica, sans-serif;
	}

	.site-header {
		display: flex;
		justify-content: space-between;
		align-items: baseline;
		padding-bottom: 22px;
		border-bottom: 1px solid #c9c8c2;
		font-size: 12px;
		letter-spacing: 0.04em;
	}

	.site-header p {
		margin: 0;
	}

	.site-name {
		font-weight: 700;
	}

	.section-name {
		color: #66655f;
	}

	.intro {
		padding: clamp(66px, 11vw, 156px) 0 62px;
		max-width: 760px;
	}

	.eyebrow {
		margin: 0 0 18px;
		color: #686761;
		font-size: 11px;
		letter-spacing: 0.12em;
		text-transform: uppercase;
	}

	h1 {
		margin: 0;
		font-size: clamp(64px, 13vw, 176px);
		font-weight: 500;
		letter-spacing: -0.085em;
		line-height: 0.85;
	}

	.overview {
		max-width: 460px;
		margin: 36px 0 0;
		color: #595852;
		font-size: clamp(15px, 1.4vw, 18px);
		line-height: 1.55;
	}

	.hero {
		margin: 0;
	}

	.media-placeholder,
	.continuation-placeholder {
		display: grid;
		place-items: center;
		background: #d9d8d2;
		color: #75746e;
	}

	.media-placeholder {
		aspect-ratio: 16 / 9;
		width: 100%;
	}

	.media-placeholder span,
	.continuation-placeholder span {
		font-size: 12px;
		letter-spacing: 0.06em;
		text-transform: uppercase;
	}

	figcaption {
		margin-top: 10px;
		color: #73726d;
		font-size: 11px;
	}

	.continuation {
		display: grid;
		grid-template-columns: 1fr minmax(240px, 42%);
		gap: 24px;
		align-items: start;
		margin-top: clamp(72px, 12vw, 164px);
	}

	.continuation-marker {
		padding-top: 12px;
		border-top: 1px solid #c9c8c2;
		color: #77766f;
		font-size: 11px;
	}

	.continuation-placeholder {
		aspect-ratio: 4 / 3;
	}

	@media (max-width: 640px) {
		.project-page {
			width: min(100% - 32px, 1440px);
			padding-top: 20px;
		}

		.intro {
			padding-bottom: 42px;
		}

		.continuation {
			grid-template-columns: 1fr;
			gap: 16px;
		}

		.continuation-placeholder {
			width: min(100%, 420px);
		}
	}
</style>
