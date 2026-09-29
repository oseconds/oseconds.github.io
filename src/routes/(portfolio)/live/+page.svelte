<svelte:head>
	<title>Live — 0seconds</title>
</svelte:head>

<main class="section-page">
	<header class="section-intro">
		<h1>Live</h1>
		<p>VJ, realtime audiovisual, and performance work.</p>
	</header>
</main>

<style>
	.section-page {
		width: min(100% - 48px, 1440px);
		margin-inline: auto;
		padding: clamp(40px, 7vw, 100px) 0 120px;
		color: #171715;
	}

	.section-intro {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(260px, 450px);
		gap: 32px;
		align-items: end;
	}

	.section-intro h1 {
		margin: 0;
		font-size: clamp(72px, 13vw, 172px);
		font-weight: 400;
		letter-spacing: -0.085em;
		line-height: 0.85;
	}

	.section-intro p {
		max-width: 32ch;
		margin: 0 0 4px;
		font-size: clamp(17px, 1.65vw, 21px);
		line-height: 1.5;
	}

	@media (max-width: 700px) {
		.section-page {
			width: min(100% - 32px, 1440px);
			padding-top: 44px;
		}

		.section-intro {
			grid-template-columns: minmax(0, 1fr);
			gap: 24px;
			align-items: start;
		}
	}
</style>
