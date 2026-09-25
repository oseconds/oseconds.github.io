<script lang="ts">
	import { onMount } from 'svelte';

	const copy = {
		about: [
			'VOID-A begins by reversing the usual direction of interaction between viewer and artwork. Rather than presenting a system that simply responds to input, the work was developed to feel as if it is already aware of the viewer and returning their gaze.',
			'The eye-like form acts as a minimal cue that lets the screen object read as a presence rather than as generic reactive graphics.'
		],
		visual:
			'Anamorphic images usually depend on a fixed viewing position. VOID-A was developed around a moving virtual viewpoint instead: the paired displays can resolve as a single spatial image from a particular position, while off-axis views expose the underlying structure and distortion.',
		viewpointPair:
			'The same two displays seen from different positions. From a resolved viewpoint the virtual space connects; from an offset position its structure and distortion become visible.',
		auditory: [
			'Sound extends the same relationship into physical space. A custom parametric ultrasonic speaker was built from an array of ultrasonic transducers and mounted on a servo-controlled directional assembly.',
			'Kinect tracked the viewer’s eye/position, TouchDesigner calculated a target direction, and the physical servo changed the aiming direction of the installed speaker assembly.'
		],
		fabricationPair: 'Hand-built ultrasonic transducer array and its directional mount.',
		servo: 'TouchDesigner viewpoint changes and the corresponding physical servo movement during a control test.',
		development:
			'One visual study generated textures in real time and applied them directly to a moving 3D object inside TouchDesigner.',
		installation:
			'The completed installation brings the dual-display visual system, viewer tracking, directional speaker and physical control system into a single viewer experience.',
		installationStill:
			'Integrated installation view: dual displays, Kinect tracking, directional speaker assembly and control electronics.'
	};

	onMount(() => {
		const videos = document.querySelectorAll<HTMLVideoElement>('[data-ambient-video]');
		const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
		const applyMotionPreference = () => {
			for (const video of videos) {
				if (motionPreference.matches) {
					video.pause();
					video.autoplay = false;
				} else {
					video.autoplay = true;
					void video.play().catch(() => undefined);
				}
			}
		};
		applyMotionPreference();
		motionPreference.addEventListener('change', applyMotionPreference);
		return () => motionPreference.removeEventListener('change', applyMotionPreference);
	});
</script>

<svelte:head>
	<title>VOID-A — 0seconds</title>
	<meta name="description" content="VOID-A (보이다), an interactive audiovisual installation from 2023." />
</svelte:head>

<main class="project-page" lang="en">
	<article>
		<header class="opening">
			<p class="archive-name">VOID-A</p>
			<h1 lang="ko">보이다</h1>
			<p class="format">Interactive audiovisual installation</p>
			<p class="opening-details">Dual-display real-time visuals, viewer tracking,<br />custom parametric directional speaker, 2023</p>
			<figure class="primary-media">
				<video
					src="/media/portfolio/void-a/void-a-primary-result.mp4"
					poster="/media/portfolio/void-a/void-a-primary-poster.jpg"
					aria-label="VOID-A installation and directional sound documentation"
					controls
					playsinline
					preload="metadata"
				>
					<track
						kind="captions"
						src="/media/portfolio/void-a/void-a-primary-captions.vtt"
						srclang="en"
						label="English"
					/>
				</video>
				<figcaption>Play with sound. Around 4–6 seconds, a passerby crosses the speaker’s path and the recorded sound briefly drops.</figcaption>
			</figure>
		</header>

		<section class="text-section about" aria-labelledby="about-title">
			<h2 id="about-title">About</h2>
			<div class="copy-rail">
				<p>{copy.about[0]}</p>
				<p>{copy.about[1]}</p>
			</div>
		</section>

		<section class="content-section visual-gaze" aria-labelledby="visual-title">
			<div class="section-heading">
				<h2 id="visual-title">Visual gaze</h2>
				<p>Moving viewpoint</p>
			</div>
			<div class="section-body">
				<p class="copy-rail">{copy.visual}</p>
				<figure class="body-media split-view">
					<img
						src="/media/portfolio/void-a/void-a-anamorphic-viewpoint-td.webp"
						alt="TouchDesigner split view with the resolved anamorphic form beside its external 3D scene and virtual viewpoint"
						width="1600"
						height="900"
						loading="lazy"
					/>
				</figure>
				<figure class="paired-media body-media">
					<div class="media-pair">
						<img src="/media/portfolio/void-a/void-a-viewpoint-resolved.png" alt="The paired displays from the resolved viewing position, forming a connected virtual space" width="1448" height="1086" loading="lazy" />
						<img src="/media/portfolio/void-a/void-a-viewpoint-offset.png" alt="The same paired displays from an offset position, exposing their structure and distortion" width="1448" height="1086" loading="lazy" />
					</div>
					<figcaption>{copy.viewpointPair}</figcaption>
				</figure>
			</div>
		</section>

		<section class="content-section auditory-gaze" aria-labelledby="auditory-title">
			<div class="section-heading">
				<h2 id="auditory-title">Auditory gaze</h2>
				<p>Directional sound</p>
			</div>
			<div class="section-body">
				<div class="copy-rail">
					<p>{copy.auditory[0]}</p>
					<p>{copy.auditory[1]}</p>
				</div>
				<figure class="paired-media body-media">
					<div class="media-pair">
						<img src="/media/portfolio/void-a/void-a-transducer-array.jpg" alt="Hand-built ultrasonic transducer array" width="4032" height="3024" loading="lazy" />
						<img src="/media/portfolio/void-a/void-a-speaker-mounted.jpg" alt="Ultrasonic transducer array installed on its directional mount" width="4032" height="3024" loading="lazy" />
					</div>
					<figcaption>{copy.fabricationPair}</figcaption>
				</figure>
				<figure class="body-media motion-media">
					<video
						src="/media/portfolio/void-a/void-a-servo-aiming.mp4"
						aria-label="TouchDesigner viewpoint changes and physical servo aiming movement"
						muted
						autoplay
						loop
						playsinline
						controls
						preload="metadata"
						data-ambient-video
					></video>
					<figcaption>{copy.servo}</figcaption>
				</figure>
			</div>
		</section>

		<section class="content-section development" aria-labelledby="development-title">
			<div class="section-heading">
				<h2 id="development-title">Selected visual development</h2>
			</div>
			<div class="section-body">
				<p class="copy-rail">{copy.development}</p>
				<figure class="body-media development-media">
					<video
						src="/media/portfolio/void-a/void-a-realtime-texture.mp4"
						aria-label="Real-time texture applied to moving 3D geometry inside TouchDesigner"
						muted
						autoplay
						loop
						playsinline
						controls
						preload="metadata"
						data-ambient-video
					></video>
				</figure>
			</div>
		</section>

		<section class="content-section installation" aria-labelledby="installation-title">
			<div class="section-heading">
				<h2 id="installation-title">Installation</h2>
			</div>
			<div class="section-body">
				<p class="copy-rail">{copy.installation}</p>
				<figure class="body-media installation-video">
					<video
						src="/media/portfolio/void-a/void-a-viewer-experience.mp4"
						aria-label="Third-person view of a viewer entering and moving through the VOID-A installation"
						muted
						autoplay
						loop
						playsinline
						controls
						preload="metadata"
						data-ambient-video
					></video>
				</figure>
				<figure class="body-media installation-still">
					<img src="/media/portfolio/void-a/void-a-installation-view.jpg" alt="Two angled displays above the directional speaker assembly and exposed electronics" width="1851" height="3001" loading="lazy" />
					<figcaption>{copy.installationStill}</figcaption>
				</figure>
			</div>
		</section>

		<section class="project-information" aria-labelledby="information-title">
			<div class="section-heading">
				<h2 id="information-title">Project information</h2>
			</div>
			<dl>
				<div><dt>Year</dt><dd>2023</dd></div>
				<div><dt>Format</dt><dd>Interactive audiovisual installation</dd></div>
				<div>
					<dt>Systems</dt>
					<dd>TouchDesigner<br />Kinect / viewer tracking<br />Dual-display real-time visual system<br />Custom parametric ultrasonic speaker<br />Servo directional control<br />Ableton Live</dd>
				</div>
			</dl>
		</section>
	</article>
</main>

<style>
	.project-page {
		--page-ink: #171715;
		--page-muted: #686761;
		--page-rule: #c9c8c2;
		width: min(100% - 48px, 1440px);
		margin: 0 auto;
		padding: clamp(24px, 4vw, 60px) 0 112px;
		color: var(--page-ink);
	}

	figure,
	h1,
	h2,
	p {
		margin-top: 0;
	}

	figure { margin: 0; }

	img,
	video {
		display: block;
		width: 100%;
		height: auto;
	}

	video { background: #e5e4e0; }

	.opening { max-width: 1160px; }
	.archive-name { margin-bottom: 8px; font-size: 12px; letter-spacing: .08em; }
	.opening h1 { margin-bottom: 12px; font-size: clamp(38px, 6vw, 76px); font-weight: 400; letter-spacing: -.055em; line-height: 1; }
	.format { margin-bottom: 4px; font-size: clamp(16px, 1.5vw, 20px); }
	.opening-details { margin-bottom: 26px; color: var(--page-muted); font-size: 14px; line-height: 1.55; }
	.primary-media { width: min(100%, 720px); }
	.primary-media video { background: #111; }
	figcaption { margin-top: 10px; color: var(--page-muted); font-size: 13px; line-height: 1.55; }

	.text-section,
	.content-section,
	.project-information {
		display: grid;
		grid-template-columns: 180px minmax(0, 1fr);
		gap: clamp(24px, 5vw, 84px);
	}

	.about { margin-top: clamp(72px, 10vw, 132px); }
	.content-section { margin-top: clamp(112px, 17vw, 216px); }
	.section-heading h2,
	.about h2,
	.project-information h2 { margin: 0; font-size: clamp(22px, 2.3vw, 32px); font-weight: 400; letter-spacing: -.035em; line-height: 1.12; }
	.section-heading > p { margin: 9px 0 0; color: var(--page-muted); font-size: 13px; }
	.section-body { min-width: 0; }
	.copy-rail { max-width: 720px; }
	.copy-rail p,
	.section-body > p { margin-bottom: 18px; font-size: clamp(15px, 1.3vw, 17px); line-height: 1.72; }
	.body-media { max-width: 1080px; margin-top: 44px; }
	.split-view img { width: 100%; }
	.media-pair { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: clamp(14px, 2.4vw, 32px); align-items: start; }
	.media-pair img { width: 100%; }
	.motion-media { max-width: 720px; margin-top: 60px; }
	.development { margin-top: clamp(104px, 13vw, 168px); }
	.development-media { max-width: 900px; }
	.installation { margin-top: clamp(132px, 19vw, 240px); }
	.installation-video { max-width: 720px; margin-top: 34px; }
	.installation-still { max-width: 720px; margin-top: 42px; }
	.installation-still img { width: 100%; }
	.project-information { margin-top: clamp(112px, 16vw, 196px); padding-top: 20px; border-top: 1px solid var(--page-rule); }
	.project-information dl { margin: 0; }
	.project-information dl > div { display: grid; grid-template-columns: 150px minmax(0, 1fr); gap: 24px; padding: 0 0 18px; }
	.project-information dt { color: var(--page-muted); }
	.project-information dd { margin: 0; line-height: 1.65; }

	@media (max-width: 700px) {
		.project-page { width: min(100% - 32px, 1440px); padding-top: 24px; }
		.opening-details br { display: none; }
		.text-section,
		.content-section,
		.project-information { grid-template-columns: 1fr; gap: 18px; }
		.about { margin-top: 76px; }
		.content-section { margin-top: 104px; }
		.development { margin-top: 104px; }
		.installation { margin-top: 128px; }
		.media-pair { grid-template-columns: 1fr; gap: 22px; }
		.body-media { margin-top: 32px; }
		.motion-media { margin-top: 44px; }
		.project-information { margin-top: 104px; }
		.project-information dl > div { grid-template-columns: 82px minmax(0, 1fr); gap: 16px; }
	}
</style>
