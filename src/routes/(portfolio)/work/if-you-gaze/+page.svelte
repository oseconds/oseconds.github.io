<svelte:head>
	<title>If you gaze — 0seconds</title>
	<meta name="description" content="If you gaze, a 2022 video work combining filmed movement, generated imagery, animation, and sound." />
</svelte:head>

<main class="project gaze-page">
	<article>
		<header class="opening">
			<div class="heading">
				<p class="eyebrow">2022 <span>·</span> Video / Generative Imagery / Sound</p>
				<h1>If you<br /><em>gaze</em></h1>
				<p class="intro">A figure changes shape between filmed movement and generated imagery, held together through animation and sound.</p>
				<p class="inspiration">The 2022 process post names Picasso’s Minotaur series as an inspiration.</p>
			</div>
			<figure class="cover">
				<img src="/media/portfolio/if-you-gaze/496626927_3520912781377923_7866999277964543427_n.jpg" alt="Instagram Reel cover showing a horned bull-like form framing a raised arm against a pale background" width="480" height="384" fetchpriority="high" />
				<figcaption>Archived Instagram Reel cover</figcaption>
			</figure>
		</header>

		<section class="film" aria-labelledby="film-title">
			<div class="film-heading">
				<p class="section-index">01 / VIDEO</p>
				<h2 id="film-title">A shifting figure,<br />in motion.</h2>
			</div>
			<figure class="player">
				<!-- svelte-ignore a11y_media_has_caption: this archived copy has audio, but no verified caption source -->
				<video
					src="/media/portfolio/if-you-gaze/AQOwlujb0Js5kK7GF6DJMSfJF6Uk6m-dKe4LWEVc28KWtZHFd5vE-9IrlkdDSznc8ZK2O37Q6_HlxKOylVnOPHk.mp4"
					poster="/media/portfolio/if-you-gaze/496626927_3520912781377923_7866999277964543427_n.jpg"
					aria-label="If you gaze animation in a locally preserved Facebook platform copy"
					controls
					playsinline
					preload="metadata"
				></video>
				<figcaption>Facebook video copy · 21.5 seconds · 426 × 340</figcaption>
			</figure>
			<div class="film-note">
				<p>Source note: This Facebook platform copy has not been verified as the same exact export as the YouTube result.</p>
				<a href="https://youtu.be/1QaB-1zvylU" target="_blank" rel="noreferrer">Watch the YouTube result <span aria-hidden="true">↗</span></a>
			</div>
		</section>

		<section class="process" aria-labelledby="process-title">
			<div class="process-intro">
				<p class="section-index">02 / PROCESS FRAGMENTS</p>
				<h2 id="process-title">Images from different stages</h2>
			</div>
			<div class="process-grid">
				<figure>
					<img src="/media/portfolio/if-you-gaze/process-01.jpg" alt="Filmed figure raising an arm against a green background" width="2040" height="1148" loading="lazy" />
					<figcaption><span>01</span> Runway · background removal</figcaption>
				</figure>
				<figure>
					<img src="/media/portfolio/if-you-gaze/process-02.jpg" alt="Raised arms integrated with generated horns and a pale background" width="1530" height="1530" loading="lazy" />
					<figcaption><span>02</span> Midjourney · image integration</figcaption>
				</figure>
				<figure>
					<img src="/media/portfolio/if-you-gaze/process-03.jpg" alt="Generated gray figure with red details and transformed facial features" width="1024" height="1024" loading="lazy" />
					<figcaption><span>03</span> Stable Diffusion · img2img</figcaption>
				</figure>
				<figure>
					<img src="/media/portfolio/if-you-gaze/process-04.jpg" alt="Figure with a red heart over the head and outlined dark clothing" width="1530" height="1530" loading="lazy" />
					<figcaption><span>04</span> Composite / color stage</figcaption>
				</figure>
				<figure>
					<img src="/media/portfolio/if-you-gaze/process-05.jpg" alt="Later red creature-like transformation of the figure" width="1024" height="1024" loading="lazy" />
					<figcaption><span>05</span> Later transformation</figcaption>
				</figure>
			</div>
			<p class="process-source">Archived process screenshots from the 2022 workflow.</p>
		</section>
	</article>
</main>

<style>
	.project { --ink: #191916; --muted: #77766f; color: var(--ink); width: min(100% - 64px, 1320px); margin: 0 auto; padding: 28px 0 116px; font: 16px/1.55 system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
	figure { margin: 0; }
	img, video { display: block; width: 100%; height: auto; }
	figcaption { margin-top: 9px; color: var(--muted); font-size: 12px; letter-spacing: .015em; }
	.eyebrow, .section-index { margin: 0; color: var(--muted); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; }
	.eyebrow span { padding: 0 5px; }
	.opening { display: grid; grid-template-columns: 1fr 1fr; align-items: center; gap: clamp(44px, 10vw, 150px); padding: 52px 8% 126px 4%; }
	h1 { margin: 43px 0 28px; font-size: clamp(74px, 13vw, 178px); font-weight: 450; letter-spacing: -.09em; line-height: .76; }
	h1 em { font-family: Georgia, 'Times New Roman', serif; font-weight: 400; letter-spacing: -.09em; }
	.intro { max-width: 450px; margin: 0; font-size: clamp(18px, 2.3vw, 28px); line-height: 1.25; letter-spacing: -.035em; }
	.inspiration { max-width: 390px; margin: 26px 0 0; color: var(--muted); font-size: 13px; }
	.cover img { aspect-ratio: 5 / 4; object-fit: cover; }
	.film { display: grid; grid-template-columns: .55fr 1.2fr .6fr; gap: clamp(24px, 4vw, 56px); align-items: end; border-top: 1px solid #c9c8c1; padding: 29px 0 138px; }
	.film-heading h2, .process-intro h2 { margin: 39px 0 0; font-size: clamp(32px, 4vw, 56px); font-weight: 450; letter-spacing: -.06em; line-height: 1.02; }
	.player video { aspect-ratio: 426 / 340; background: #e4e2db; }
	.player figcaption { font-variant-numeric: tabular-nums; }
	.film-note { padding-bottom: 4px; color: var(--muted); font-size: 13px; }
	.film-note p { margin: 0 0 20px; }
	.project a { color: var(--ink); text-decoration-thickness: 1px; text-underline-offset: 4px; }
	.project a:focus-visible { outline: 2px solid currentColor; outline-offset: 5px; }
	.process { border-top: 1px solid #c9c8c1; padding: 29px 0 126px; }
	.process-intro { display: grid; grid-template-columns: .8fr 2.1fr; gap: 36px; align-items: start; margin-bottom: 48px; }
	.process-intro h2 { margin: 0; }
	.process-grid { display: grid; grid-template-columns: repeat(5, minmax(0, 1fr)); align-items: start; gap: clamp(14px, 1.6vw, 24px); }
	.process-grid figure { min-width: 0; }
	.process-grid img { width: 100%; height: auto; }
	.process-grid figcaption { display: flex; gap: 8px; line-height: 1.45; }
	.process-grid figcaption span { flex: none; color: var(--ink); font-variant-numeric: tabular-nums; }
	.process-source { margin: 34px 0 0; color: var(--muted); font-size: 12px; line-height: 1.55; }
	@media (max-width: 850px) {
		.project { width: min(100% - 36px, 660px); padding-top: 12px; }
		.opening { grid-template-columns: 1fr; gap: 42px; padding: 36px 0 88px; }
		h1 { font-size: clamp(78px, 19vw, 132px); }
		.cover { width: min(100%, 520px); justify-self: end; }
		.film { grid-template-columns: 1fr 1fr; align-items: start; padding-bottom: 90px; }
		.film-heading { grid-column: 1 / -1; }
		.film-heading h2 { margin-top: 22px; }
		.film-note { align-self: center; }
		.process-intro { grid-template-columns: 1fr 1fr; gap: 18px 26px; margin-bottom: 38px; }
		.process-intro .section-index { grid-column: 1 / -1; }
		.process-grid { grid-template-columns: 1fr 1fr; gap: 34px 24px; }
	}
	@media (max-width: 520px) {
		.film { grid-template-columns: 1fr; gap: 20px; }
		.film-heading, .process-intro .section-index { grid-column: auto; }
		.film-note { max-width: 380px; }
		.process-intro { grid-template-columns: 1fr; }
		.process-grid { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 28px 16px; }
		.process-grid figure:first-child { grid-column: 1 / -1; }
		.process { padding-bottom: 84px; }
	}
</style>
