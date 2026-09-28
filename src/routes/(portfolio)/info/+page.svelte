<svelte:head>
	<title>Info — 0seconds</title>
	<meta
		name="description"
		content="About 0seconds, selected projects, live audiovisual practice, and tools."
	/>
</svelte:head>

<main class="info-page">
	<h1>Info</h1>

	<section class="about-section" aria-labelledby="about-title">
		<h2 id="about-title">About</h2>
		<div class="about-copy">
			<p>
				0seconds is an audiovisual artist and creative technologist working across moving image, sound,
				realtime systems, generative processes, and interactive media.
			</p>
			<p>
				Beginning with electronic music composition and live performance, the practice expanded into
				VJing, motion graphics, realtime audiovisual systems, physical computing, and interactive
				installation.
			</p>
			<p>
				Recent work explores relationships between image, sound, bodies, machines, and generative
				systems. The practice moves between artistic production and tool-making, often using custom
				realtime workflows to connect visual, sonic, and physical processes.
			</p>
		</div>
	</section>

	<div class="info-sections">
		<section class="info-section" aria-labelledby="selected-projects-title">
			<h2 id="selected-projects-title">Selected Projects</h2>
			<ul class="work-records">
				<li>
					<time datetime="2023">2023</time>
					<a href="/work/void-a">VOID-A</a>
				</li>
				<li>
					<time datetime="2026">2026</time>
					<div>
						<span>OUMTT — 인간전시 空</span>
						<p class="record-detail">Media video production for STUDIO ARTECH</p>
					</div>
				</li>
			</ul>
		</section>

		<section class="info-section" aria-labelledby="live-title">
			<h2 id="live-title">Live / Audiovisual</h2>
			<ul class="live-records">
				<li>
					<p class="live-record-title">
						<time datetime="2023">2023</time>
						<span>MASIO @ Seoul Community Radio</span>
					</p>
					<p class="record-detail">Realtime Audio-Reactive Visuals</p>
				</li>
				<li>
					<p class="live-record-title">CKNS × MASIO — K1d_Mo0n SUMMER MIX</p>
					<p class="record-detail">Live VJ Performance</p>
				</li>
			</ul>
		</section>
		<section class="info-section" aria-labelledby="tools-title">
			<h2 id="tools-title">Tools / Code</h2>
			<div>
				<ul class="tool-list">
					<li>Ableton Signal Rack</li>
					<li>MaxP5jsTemplate</li>
					<li>Custom Ableton OSD</li>
				</ul>
				<p class="profile-link">
					<a href="https://github.com/oseconds">GitHub profile</a>
				</p>
			</div>
		</section>
	</div>
</main>

<style>
	.info-page {
		--page-muted: #686761;
		width: min(100% - 48px, 1120px);
		margin-inline: auto;
		padding: clamp(40px, 7vw, 100px) 0 120px;
		color: #171715;
	}

	.info-page > h1 {
		margin: 0;
		font-size: clamp(48px, 8vw, 88px);
		font-weight: 400;
		letter-spacing: -0.07em;
		line-height: 0.95;
	}

	.about-section,
	.info-section {
		display: grid;
		grid-template-columns: minmax(170px, 240px) minmax(0, 1fr);
		column-gap: clamp(28px, 6vw, 88px);
		align-items: start;
	}

	.about-section {
		margin-top: clamp(48px, 8vw, 92px);
		margin-bottom: clamp(68px, 10vw, 120px);
	}

	.about-section h2,
	.info-section h2 {
		margin: 5px 0 0;
		font-size: 14px;
		font-weight: 500;
		letter-spacing: 0.045em;
		line-height: 1.4;
	}

	.about-copy {
		max-width: 690px;
	}

	.about-copy p {
		margin: 0 0 18px;
		font-size: clamp(16px, 1.45vw, 18px);
		line-height: 1.7;
	}

	.about-copy p:last-child {
		margin-bottom: 0;
	}

	.info-sections {
		display: grid;
		gap: clamp(36px, 5vw, 60px);
	}

	.work-records,
	.live-records,
	.tool-list {
		margin: 0;
		padding: 0;
		list-style: none;
	}

	.work-records {
		display: grid;
		gap: 14px;
	}

	.work-records li {
		display: grid;
		grid-template-columns: 64px minmax(0, 1fr);
		gap: 18px;
		line-height: 1.55;
	}

	.work-records time,
	.live-record-title time {
		color: var(--page-muted);
		font-size: 14px;
	}

	.info-page a {
		color: inherit;
		text-underline-offset: 4px;
	}

	.live-records {
		display: grid;
		gap: 22px;
	}

	.live-record-title,
	.record-detail {
		margin: 0;
		line-height: 1.55;
	}

	.live-record-title time {
		margin-right: 18px;
	}

	.record-detail {
		margin-top: 3px;
		color: var(--page-muted);
		font-size: 14px;
	}

	.tool-list,
	.profile-link {
		margin: 0;
		line-height: 1.6;
	}

	.tool-list {
		display: grid;
		gap: 5px;
	}

	.profile-link {
		margin-top: 16px;
	}

	@media (max-width: 700px) {
		.info-page {
			width: min(100% - 32px, 1120px);
			padding-top: 44px;
		}

		.about-section,
		.info-section {
			grid-template-columns: minmax(0, 1fr);
			row-gap: 16px;
		}

		.about-section {
			margin-top: 48px;
			margin-bottom: 72px;
		}

		.about-section h2,
		.info-section h2 {
			margin-top: 0;
		}

		.info-sections {
			gap: 38px;
		}

		.work-records li {
			grid-template-columns: 54px minmax(0, 1fr);
			gap: 12px;
		}
	}
</style>
