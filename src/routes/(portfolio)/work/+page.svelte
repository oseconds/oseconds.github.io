<svelte:head>
	<title>Work — 0seconds</title>
	<meta name="description" content="Selected work by 0seconds across installation, video, and robotic painting." />
</svelte:head>

<main class="work-page">
	<header class="work-intro">
		<div>
			<p class="eyebrow">Selected authored works</p>
			<h1>Work</h1>
		</div>
		<p>Installation, video, and physical systems.</p>
	</header>

	<section class="work-list" aria-label="Selected works">
		<article class="work-item work-item--void">
			<div class="work-number"><span>01</span><time datetime="2023">2023</time></div>
			<a class="work-visual" href="/work/void-a" aria-label="View VOID-a">
				<img
					src="/media/portfolio/void-a/void-a-primary-poster.jpg"
					alt="VOID-a installation with an eye-like form across two displays"
					width="720"
					height="900"
				/>
			</a>
			<div class="work-copy">
				<h2><a href="/work/void-a">VOID-a</a></h2>
				<p>Interactive Installation / Realtime Visuals / Directional Sound</p>
				<p class="work-description">Viewer tracking shifts the realtime visual viewpoint while a directional speaker shapes how sound is heard.</p>
				<a class="work-link" href="/work/void-a">View project <span aria-hidden="true">↗</span></a>
			</div>
		</article>

		<article class="work-item work-item--gaze">
			<div class="work-number"><span>02</span><time datetime="2022">2022</time></div>
			<a class="work-visual" href="/work/if-you-gaze" aria-label="View If you gaze">
				<img
					src="/media/portfolio/if-you-gaze/496626927_3520912781377923_7866999277964543427_n.jpg"
					alt="Minotaur-like form in the archived If you gaze Reel cover"
					width="480"
					height="384"
					loading="lazy"
				/>
			</a>
			<div class="work-copy">
				<h2><a href="/work/if-you-gaze">If you gaze</a></h2>
				<p>Video / Generative Imagery / Sound</p>
				<p class="work-description">Filmed movement and generated imagery are composited into a shifting audiovisual portrait.</p>
				<a class="work-link" href="/work/if-you-gaze">View project <span aria-hidden="true">↗</span></a>
			</div>
		</article>

		<article class="work-item work-item--robot">
			<div class="work-number"><span>03</span><time datetime="2022">2022</time></div>
			<a class="work-visual" href="/work/robot-painting-system" aria-label="View Robot Painting System">
				<img
					src="/media/portfolio/robot-painting-system/image16.jpg"
					alt="Paint-covered robotic arm beside its wired mechanism, ball, and painted surface"
					width="2048"
					height="1536"
					loading="lazy"
				/>
			</a>
			<div class="work-copy">
				<h2><a href="/work/robot-painting-system">Robot Painting System</a></h2>
				<p>Robotic Painting / Physical Computing</p>
				<p class="work-description">A robotic arm moves a paint-covered ball across a rotating canvas, translating mechanical motion into a physical painting.</p>
				<a class="work-link" href="/work/robot-painting-system">View project <span aria-hidden="true">↗</span></a>
			</div>
		</article>
	</section>
</main>

<style>
	.work-page {
		--page-muted: #686761;
		width: min(100% - 48px, 1440px);
		margin-inline: auto;
		padding: clamp(40px, 7vw, 100px) 0 120px;
		color: #171715;
	}

	.work-intro {
		display: grid;
		grid-template-columns: minmax(0, 1fr) minmax(260px, 450px);
		gap: 32px;
		align-items: end;
		margin-bottom: clamp(88px, 13vw, 176px);
	}

	.eyebrow {
		margin: 0 0 18px;
		color: var(--page-muted);
		font-size: 13px;
		letter-spacing: 0.05em;
		text-transform: uppercase;
	}

	.work-intro h1 {
		margin: 0;
		font-size: clamp(72px, 13vw, 172px);
		font-weight: 400;
		letter-spacing: -0.085em;
		line-height: 0.85;
	}

	.work-intro > p {
		max-width: 32ch;
		margin: 0 0 4px;
		font-size: clamp(17px, 1.65vw, 21px);
		line-height: 1.5;
	}

	.work-list {
		border-top: 1px solid #c9c8c2;
	}

	.work-item {
		display: grid;
		grid-template-columns: 64px minmax(0, 1fr) minmax(0, 0.95fr);
		gap: clamp(20px, 4.2vw, 64px);
		align-items: end;
		min-width: 0;
		padding: clamp(56px, 8vw, 116px) 0;
		border-bottom: 1px solid #c9c8c2;
	}

	.work-number {
		align-self: start;
		display: grid;
		gap: 9px;
		color: var(--page-muted);
		font-size: 13px;
	}

	.work-number span {
		color: #171715;
	}

	.work-visual {
		display: block;
		min-width: 0;
	}

	.work-visual img {
		display: block;
		width: 100%;
		height: auto;
	}

	.work-copy {
		min-width: 0;
		padding-bottom: 4px;
	}

	.work-copy h2 {
		margin: 0;
		font-size: clamp(36px, 5.2vw, 76px);
		font-weight: 400;
		letter-spacing: -0.065em;
		line-height: 1.02;
	}

	.work-copy h2 a {
		color: inherit;
		text-decoration: none;
	}

	.work-copy h2 a:hover {
		text-decoration: underline;
		text-decoration-thickness: 1px;
		text-underline-offset: 7px;
	}

	.work-copy p {
		max-width: 32ch;
		margin: 18px 0 0;
		color: var(--page-muted);
		font-size: 15px;
		line-height: 1.55;
	}

	.work-copy .work-description {
		max-width: 42ch;
		margin-top: 14px;
		color: #3f3f3b;
		font-size: 16px;
	}

	.work-link {
		display: inline-block;
		margin-top: 30px;
		color: inherit;
		font-size: 14px;
		text-underline-offset: 4px;
	}

	.work-visual:focus-visible,
	.work-copy a:focus-visible {
		outline: 2px solid currentColor;
		outline-offset: 5px;
	}

	.work-item--void .work-visual {
		width: min(75%, 390px);
	}

	.work-item--robot .work-visual {
		width: min(100%, 540px);
	}

	.work-item--robot .work-copy h2 {
		max-width: 12ch;
	}

	.work-item--gaze .work-visual {
		width: min(100%, 480px);
	}

	@media (max-width: 800px) {
		.work-page {
			width: min(100% - 32px, 1440px);
			padding-top: 44px;
		}

		.work-intro {
			grid-template-columns: minmax(0, 1fr);
			gap: 28px;
			margin-bottom: 88px;
		}

		.work-intro h1 {
			font-size: clamp(72px, 18vw, 120px);
		}

		.work-item {
			grid-template-columns: 52px minmax(0, 1fr);
			gap: 22px 20px;
			padding-block: 68px;
		}

		.work-number {
			grid-column: 1;
			grid-row: 1 / 3;
		}

		.work-visual {
			grid-column: 2;
			grid-row: 1;
			justify-self: start;
		}

		.work-copy {
			grid-column: 2;
			grid-row: 2;
		}

		.work-item--void .work-visual {
			width: min(78%, 390px);
		}

		.work-item--robot .work-visual {
			width: min(100%, 540px);
		}

		.work-item--gaze .work-visual {
			width: min(88%, 480px);
		}
	}

	@media (max-width: 520px) {
		.work-item {
			grid-template-columns: 1fr;
			gap: 22px;
			padding-block: 52px;
		}

		.work-number,
		.work-visual,
		.work-copy {
			grid-column: 1;
			grid-row: auto;
		}

		.work-number {
			display: flex;
			gap: 14px;
		}

		.work-copy h2 {
			font-size: clamp(42px, 11vw, 64px);
		}

		.work-item--void .work-visual {
			width: 78%;
		}

		.work-item--robot .work-visual {
			width: 100%;
		}

		.work-item--gaze .work-visual {
			width: 90%;
		}
	}
</style>
