<svelte:head>
	<title>Robot Painting System — 0seconds</title>
	<meta name="description" content="A 2022 robotic painting and physical computing project developed through an iterative process of making and testing." />
</svelte:head>

<main class="project robot-page">
	<article>
		<header class="intro">
			<div class="intro-copy">
				<p class="eyebrow">2022 <span>·</span> Robotic Painting / Physical Computing</p>
				<h1>Robot<br />Painting<br />System</h1>
				<p class="dek">A hand sets the arm’s path; the robot repeats it in paint.</p>
				<p class="title-note">Portfolio working title</p>
			</div>
			<figure class="result">
				<img src="/media/portfolio/robot-painting-system/image4.jpg" alt="Abstract painting made by the robotic painting system, with rolling arcs and layered marks in red, blue, yellow, and black" width="1416" height="1374" fetchpriority="high" />
				<figcaption>The resulting painting</figcaption>
			</figure>
		</header>

		<section class="idea" aria-labelledby="idea-title">
			<p class="section-index">01 / THE IDEA</p>
			<div>
				<h2 id="idea-title">From repetition to a painted trace</h2>
				<p>The project began with the idea of a robot repeatedly lifting a ball uphill, returning it to its starting point, and beginning again. It shifted toward a painting system: a ball carrying paint would travel across a tilted canvas, leaving a mark as the canvas turned.</p>
				<p>The proposed controls let a visitor choose a color and decide when to act. Those timing and color choices shaped the design, though the available record does not establish how fully each interaction worked in the exhibition.</p>
			</div>
		</section>

		<section class="build" aria-labelledby="build-title">
			<div class="section-head">
				<p class="section-index">02 / BUILDING A MOVEMENT</p>
				<h2 id="build-title">A hand guided the arm before the arm moved on its own.</h2>
			</div>
			<figure class="wide-image">
				<img src="/media/portfolio/robot-painting-system/image19.jpg" alt="Wooden frame and articulated robotic arm under construction" width="1536" height="2048" loading="lazy" />
				<figcaption>Constructing the arm and its frame</figcaption>
			</figure>
			<div class="pair">
				<figure>
					<img src="/media/portfolio/robot-painting-system/image17.jpg" alt="Painting system setup with robot, wiring, paint containers, and a marked surface" width="2048" height="1536" loading="lazy" />
					<figcaption>Robot and painting setup</figcaption>
				</figure>
				<div class="build-copy">
					<p>The arm was built around an Arduino and servo motors. To shape its path, a wooden dummy arm fitted with potentiometers could be moved by hand; the recorded angles could then guide the actual arm.</p>
					<p>The project notes document the construction, movement recording, and troubleshooting, including a servo failure on the exhibition day. The photographs show stages of the setup and do not establish that every planned audience input operated as intended.</p>
				</div>
			</div>
			<figure class="comparison">
				<img src="/media/portfolio/robot-painting-system/image22.jpg" alt="Hand-guided wooden dummy arm positioned beside the wired robotic arm" width="2048" height="1536" loading="lazy" />
				<figcaption>A wooden dummy arm alongside the wired robot</figcaption>
			</figure>
		</section>

		<section class="moving" aria-labelledby="moving-title">
			<div>
				<p class="section-index">03 / THE RESULT</p>
				<h2 id="moving-title">A record of movement, made visible</h2>
				<p>The painting records the paths made as the robot carried paint across the surface. The project note identifies this image as the work produced by the system.</p>
				<a class="video-link" href="https://youtu.be/s1nOQkkjCUI" target="_blank" rel="noreferrer">Watch the operation and result on YouTube <span aria-hidden="true">↗</span></a>
			</div>
			<figure class="final-image">
				<img src="/media/portfolio/robot-painting-system/image4.jpg" alt="Resulting painting, showing overlapping circular and diagonal paint paths" width="1416" height="1374" loading="lazy" />
				<figcaption>The painting made by the robot and its maker</figcaption>
			</figure>
		</section>
	</article>
</main>

<style>
	.project { --ink: #181815; --muted: #74736d; color: var(--ink); width: min(100% - 64px, 1320px); margin: 0 auto; padding: 28px 0 120px; font: 16px/1.55 system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
	figure { margin: 0; }
	img { display: block; width: 100%; height: auto; }
	figcaption { margin-top: 9px; color: var(--muted); font-size: 12px; letter-spacing: .015em; }
	.intro { display: grid; grid-template-columns: .78fr 1.22fr; gap: clamp(40px, 8vw, 120px); align-items: center; padding: 38px 0 128px; }
	.eyebrow, .section-index { margin: 0; color: var(--muted); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; }
	.eyebrow span { padding: 0 5px; }
	h1 { margin: 35px 0 28px; font-size: clamp(52px, 8vw, 116px); line-height: .91; font-weight: 500; letter-spacing: -.075em; }
	.dek { max-width: 330px; margin: 0; font-size: clamp(18px, 2vw, 23px); line-height: 1.35; letter-spacing: -.025em; }
	.title-note { margin: 30px 0 0; color: var(--muted); font-size: 12px; }
	.result img { max-height: 760px; object-fit: contain; }
	.idea { display: grid; grid-template-columns: 1fr 2fr; gap: 40px; border-top: 1px solid #c9c8c1; padding: 30px 0 136px; }
	.idea h2, .moving h2 { margin: 0 0 24px; font-size: clamp(30px, 4vw, 54px); line-height: 1.03; font-weight: 450; letter-spacing: -.055em; }
	.idea div { max-width: 700px; }
	.idea div p, .build-copy p, .moving p:not(.section-index) { max-width: 620px; color: #4d4d47; }
	.section-head { display: grid; grid-template-columns: 1fr 1.3fr; align-items: start; gap: 40px; margin-bottom: 32px; }
	.section-head h2 { max-width: 660px; margin: 0; font-size: clamp(32px, 4.6vw, 66px); line-height: 1.02; font-weight: 450; letter-spacing: -.055em; }
	.wide-image { width: min(52%, 640px); margin-left: auto; }
	.pair { display: grid; grid-template-columns: 1.2fr .8fr; align-items: center; gap: clamp(32px, 7vw, 100px); padding: 84px 0 32px; }
	.pair img { aspect-ratio: 4 / 3; object-fit: cover; }
	.build-copy { max-width: 390px; }
	.comparison { width: 61%; margin: 60px auto 140px 7%; }
	.comparison img { aspect-ratio: 4 / 3; object-fit: cover; }
	.moving { display: grid; grid-template-columns: .8fr 1.2fr; align-items: center; gap: clamp(40px, 9vw, 128px); border-top: 1px solid #c9c8c1; padding-top: 32px; }
	.moving h2 { margin-top: 42px; }
	.video-link { display: inline-flex; gap: 12px; margin-top: 26px; color: inherit; font-size: 13px; text-decoration-thickness: 1px; text-underline-offset: 4px; }
	.video-link:focus-visible { outline: 2px solid currentColor; outline-offset: 5px; }
	.final-image img { max-height: 700px; object-fit: contain; }
	@media (max-width: 760px) {
		.project { width: min(100% - 36px, 620px); padding-top: 12px; padding-bottom: 76px; }
		.intro { grid-template-columns: 1fr; gap: 42px; padding: 36px 0 86px; }
		h1 { margin: 27px 0 20px; font-size: clamp(58px, 16vw, 92px); }
		.result { width: 100%; }
		.idea, .section-head, .moving { grid-template-columns: 1fr; gap: 22px; }
		.idea { padding-bottom: 90px; }
		.wide-image, .comparison { width: 100%; margin-left: 0; }
		.pair { grid-template-columns: 1fr; gap: 22px; padding: 54px 0 18px; }
		.comparison { margin: 44px 0 90px; }
		.moving { padding-top: 26px; }
		.moving h2 { margin-top: 24px; }
	}
</style>
