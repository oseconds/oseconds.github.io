<svelte:head>
	<title>0seconds</title>
	<meta
		name="description"
		content="0seconds is an audiovisual artist and creative technologist working across moving image, sound, realtime systems, generative processes, and interactive media."
	/>
</svelte:head>

<main class="home-page">
	<header class="introduction">
		<div class="identity">
			<h1>0seconds</h1>
			<p class="discipline">Audiovisual Artist / Creative Technologist</p>
		</div>
		<p class="introduction-copy">
			0seconds is an audiovisual artist and creative technologist working across moving image, sound,
			realtime systems, generative processes, and interactive media.
		</p>
	</header>

	<section class="selected-work" aria-labelledby="selected-work-title">
		<h2 id="selected-work-title">Selected work</h2>

		<div class="work-sequence">
			<article class="work-entry work-entry--void">
				<a class="void-media" href="/work/void-a">
					<img
						src="/media/portfolio/void-a/void-a-primary-poster.jpg"
						alt="VOID-A installation documentation"
					/>
				</a>
				<div class="entry-details">
					<div class="entry-heading">
						<h3>VOID-A</h3>
						<time datetime="2023">2023</time>
					</div>
					<p class="entry-type">Interactive Installation / Realtime Visuals / Directional Sound</p>
					<a class="project-link" href="/work/void-a">Explore VOID-A</a>
				</div>
			</article>

			<article class="work-entry work-entry--minotaur">
				<h3>Minotaur Series</h3>
				<p class="entry-type">Acrylic Painting · Blender · Generative AI</p>
			</article>

			<article class="work-entry work-entry--masio">
				<div class="entry-details">
					<div class="entry-heading">
						<h3>MASIO @ Seoul Community Radio</h3>
						<time datetime="2023">2023</time>
					</div>
					<p class="entry-type">Realtime Audio-Reactive Visuals</p>
				</div>
			</article>

			<article class="work-entry work-entry--oumt">
				<div class="entry-details">
					<div class="entry-heading">
						<h3>OUMTT — 인간전시 空</h3>
						<time datetime="2026">2026</time>
					</div>
					<p class="entry-type">Media video production for STUDIO ARTECH</p>
				</div>
			</article>
		</div>
	</section>
</main>

<style>
	.home-page {
		--page-muted: #686761;
		width: min(100% - 48px, 1440px);
		margin-inline: auto;
		padding: clamp(40px, 7vw, 100px) 0 120px;
		color: #171715;
	}

	.introduction {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(280px, 500px);
		gap: clamp(28px, 6vw, 88px);
		align-items: end;
	}

	.identity h1 {
		margin: 0;
		font-size: clamp(64px, 12vw, 156px);
		font-weight: 400;
		letter-spacing: -0.085em;
		line-height: 0.88;
	}

	.discipline {
		margin: 20px 0 0;
		font-size: clamp(14px, 1.35vw, 18px);
		line-height: 1.45;
	}

	.introduction-copy {
		max-width: 48ch;
		margin: 0 0 2px;
		font-size: clamp(16px, 1.5vw, 19px);
		line-height: 1.65;
	}

	.selected-work {
		margin-top: clamp(88px, 13vw, 176px);
	}

	.selected-work > h2 {
		margin: 0 0 clamp(36px, 5vw, 64px);
		font-size: clamp(21px, 2.2vw, 30px);
		font-weight: 400;
		letter-spacing: -0.035em;
	}

	.work-sequence {
		display: grid;
		gap: clamp(96px, 14vw, 184px);
	}

	.work-entry {
		min-width: 0;
	}

	.entry-details {
		min-width: 0;
	}

	.entry-heading {
		display: flex;
		flex-wrap: wrap;
		align-items: baseline;
		justify-content: space-between;
		gap: 8px 20px;
	}

	.entry-heading h3,
	.work-entry--minotaur h3 {
		min-width: 0;
		margin: 0;
		font-size: clamp(22px, 2.6vw, 34px);
		font-weight: 400;
		letter-spacing: -0.045em;
		line-height: 1.15;
	}

	.entry-heading time {
		flex-shrink: 0;
		color: var(--page-muted);
		font-size: 13px;
	}

	.entry-type {
		margin: 12px 0 0;
		color: var(--page-muted);
		font-size: 15px;
		line-height: 1.55;
	}

	.work-entry--void {
		display: grid;
		grid-template-columns: minmax(0, 1.2fr) minmax(240px, 0.8fr);
		gap: clamp(24px, 7vw, 104px);
		align-items: center;
	}

	.void-media {
		display: block;
		min-width: 0;
	}

	.void-media img {
		display: block;
		width: 100%;
		height: auto;
	}

	.project-link {
		display: inline-block;
		margin-top: 20px;
		color: inherit;
		font-size: 14px;
		text-underline-offset: 4px;
	}

	.work-entry--minotaur h3 {
		font-size: clamp(48px, 10vw, 136px);
		letter-spacing: -0.075em;
		line-height: 0.95;
	}

	.work-entry--minotaur .entry-type {
		margin-top: 20px;
	}

	@media (max-width: 700px) {
		.home-page {
			width: min(100% - 32px, 1440px);
			padding-top: 44px;
		}

		.introduction {
			grid-template-columns: minmax(0, 1fr);
			gap: 26px;
		}

		.identity h1 {
			font-size: clamp(64px, 18vw, 96px);
		}

		.introduction-copy {
			max-width: 52ch;
		}

		.selected-work {
			margin-top: 92px;
		}

		.work-sequence {
			gap: 104px;
		}

		.work-entry--void {
			grid-template-columns: minmax(0, 1fr);
			gap: 24px;
		}

		.work-entry--minotaur h3 {
			font-size: clamp(48px, 13vw, 82px);
		}
	}
</style>
