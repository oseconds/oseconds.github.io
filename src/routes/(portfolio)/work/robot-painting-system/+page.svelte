<svelte:head>
	<title>Robot Painting System — 0seconds</title>
	<meta name="description" content="A 2022 robotic painting project translating hand-shaped movement into physical traces through a handmade robot, paint, and a rotating canvas." />
</svelte:head>

<main class="project robot-page">
	<article>
		<header class="intro">
			<p class="eyebrow">2022 <span>·</span> Robotic Painting / Physical Computing</p>
			<h1>Robot Painting System</h1>
			<p class="dek">A hand sets the arm’s path; the robot repeats it in paint.</p>
			<p class="title-note">Portfolio working title</p>
		</header>

		<figure class="operation">
			<iframe
				src="https://www.youtube.com/embed/s1nOQkkjCUI"
				title="Robot Painting System — operation documentation"
				width="960"
				height="720"
				allow="encrypted-media; picture-in-picture; fullscreen"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe>
			<figcaption>
				<span>Operation documentation · 24 seconds</span>
				<a href="https://youtu.be/s1nOQkkjCUI" target="_blank" rel="noreferrer">Watch on YouTube <span aria-hidden="true">↗</span></a>
			</figcaption>
		</figure>

		<section class="movement" aria-labelledby="movement-title">
			<figure>
				<img src="/media/portfolio/robot-painting-system/image22.jpg" alt="A hand holding the wooden potentiometer dummy arm beside the wired robotic arm" width="2048" height="1536" loading="lazy" />
				<figcaption>A wooden dummy arm alongside the wired robot</figcaption>
			</figure>
			<div class="movement-copy">
				<h2 id="movement-title">Shaping the movement</h2>
				<p>Inspired by Sisyphus, the project began with the idea of a robot repeatedly lifting a ball uphill. It developed into a painting system, using a paint-covered ball and a rotating canvas to turn repetition into a physical trace.</p>
				<p>The wooden robot was built around Arduino and servo motors. A separate dummy arm fitted with potentiometers let its movement be shaped by hand. The work note records how those angle values were captured and used to reproduce movement on the actual arm.</p>
			</div>
		</section>

		<section class="result" aria-labelledby="result-title">
			<div class="result-copy">
				<h2 id="result-title">A record of movement, made visible</h2>
				<p>Paint carried by the ball leaves overlapping marks on the surface. The resulting painting holds the traces of the system and its maker.</p>
			</div>
			<figure>
				<img src="/media/portfolio/robot-painting-system/image4.jpg" alt="Resulting painting with a paint-covered ball and overlapping trails of red, blue, yellow, white, and dark paint" width="1416" height="1374" loading="lazy" />
				<figcaption>The painting made by the robot and its maker</figcaption>
			</figure>
		</section>
	</article>
</main>

<style>
	.project { --ink: #181815; --muted: #74736d; color: var(--ink); width: min(100% - 64px, 1080px); margin: 0 auto; padding: 48px 0 112px; font: 16px/1.55 system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }
	figure { margin: 0; min-width: 0; }
	img { display: block; width: 100%; height: auto; }
	figcaption { margin-top: 10px; color: var(--muted); font-size: 12px; letter-spacing: .015em; }
	.intro { padding-bottom: 36px; }
	.eyebrow { margin: 0; color: var(--muted); font-size: 11px; letter-spacing: .12em; text-transform: uppercase; }
	.eyebrow span { padding: 0 5px; }
	h1 { margin: 22px 0 18px; font-size: clamp(42px, 6.4vw, 80px); line-height: 1; font-weight: 500; letter-spacing: -.065em; text-wrap: balance; }
	.dek { max-width: 620px; margin: 0; font-size: clamp(18px, 2vw, 23px); line-height: 1.35; letter-spacing: -.025em; }
	.title-note { margin: 16px 0 0; color: var(--muted); font-size: 12px; }
	.operation { width: min(100%, 880px); margin-inline: auto; }
	.operation iframe { display: block; width: 100%; height: auto; aspect-ratio: 4 / 3; border: 0; background: #181815; }
	.operation figcaption { display: flex; justify-content: space-between; flex-wrap: wrap; gap: 8px 20px; }
	a { color: inherit; text-underline-offset: 4px; }
	a:focus-visible, iframe:focus-visible { outline: 2px solid var(--ink); outline-offset: 5px; }
	h2 { margin: 0 0 22px; font-size: clamp(30px, 3.4vw, 46px); line-height: 1.06; font-weight: 450; letter-spacing: -.05em; }
	.movement { display: grid; grid-template-columns: 1.15fr 1fr; align-items: center; gap: clamp(32px, 5vw, 72px); margin-top: 88px; }
	.movement-copy { min-width: 0; }
	.movement-copy p, .result-copy p { color: #4d4d47; }
	.movement-copy p:last-child { margin-bottom: 0; }
	.result { margin-top: 88px; border-top: 1px solid #c9c8c1; padding-top: 30px; }
	.result-copy { max-width: 620px; margin-bottom: 32px; }
	.result figure { width: min(100%, 720px); margin-inline: auto; }
	@media (max-width: 760px) {
		.project { width: min(100% - 36px, 620px); padding: 30px 0 76px; }
		.intro { padding-bottom: 28px; }
		h1 { margin-top: 20px; font-size: clamp(40px, 10vw, 62px); }
		.movement { grid-template-columns: minmax(0, 1fr); gap: 26px; margin-top: 56px; }
		.result { margin-top: 56px; padding-top: 26px; }
		.result-copy { margin-bottom: 26px; }
	}
</style>
