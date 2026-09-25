<script lang="ts">
	import { onMount } from 'svelte';

	const copy = {
		about: [
			'VOID-a begins by reversing the usual direction of interaction between viewer and artwork. Rather than presenting a system that simply responds to input, the work was developed to feel as if it is already aware of the viewer and returning their gaze.',
			'The eye-like form acts as a minimal cue that lets the screen object read as a presence rather than as generic reactive graphics.'
		],
		visual:
			'Anamorphic images usually depend on a fixed viewing position. VOID-a was developed around a moving virtual viewpoint instead: the paired displays can resolve as a single spatial image from a particular position, while off-axis views expose the underlying structure and distortion.',
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
			'The completed installation brings the dual-display visual system, viewer tracking, directional speaker and physical control system into a single viewer experience.'
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
	<title>VOID-a — 0seconds</title>
	<meta name="description" content="VOID-a (보이다), an interactive audiovisual installation from 2023." />
</svelte:head>

<main class="project-page" lang="en">
	<article>
		<header class="opening">
			<div class="opening-copy">
				<h1>VOID-a</h1>
				<p class="subtitle" lang="ko">보이다</p>
				<p class="format">Interactive audiovisual installation</p>
				<p class="opening-details">Dual-display real-time visuals, viewer tracking,<br />{' '}custom parametric directional speaker, 2023</p>
				<p class="play-note">Play with sound. Around 4–6 seconds, a passerby crosses the speaker’s path and the recorded sound briefly drops.</p>
			</div>
			<figure class="primary-media">
				<video
					src="/media/portfolio/void-a/void-a-primary-result.mp4"
					poster="/media/portfolio/void-a/void-a-primary-poster.jpg"
					aria-label="VOID-a installation and directional sound documentation"
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
			<div class="section-body">
				<div class="installation-feature">
					<figure class="body-media installation-video">
						<video
							src="/media/portfolio/void-a/void-a-viewer-experience.mp4"
							aria-label="Third-person view of a viewer entering and moving through the VOID-a installation"
							muted
							autoplay
							loop
							playsinline
							controls
							preload="metadata"
							data-ambient-video
						></video>
					</figure>
					<div class="installation-copy">
						<h2 id="installation-title">Installation</h2>
						<p class="copy-rail">{copy.installation}</p>
					</div>
				</div>
			</div>
		</section>

		<section class="project-information" aria-labelledby="information-title">
			<div class="section-heading">
				<h2 id="information-title">Project information</h2>
			</div>
			<div class="project-facts">
				<p>2023<br />Interactive audiovisual installation</p>
				<p class="project-systems">TouchDesigner · Kinect / viewer tracking<br />Dual-display real-time visual system<br />Custom parametric ultrasonic speaker<br />Servo directional control · Ableton Live</p>
			</div>
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

	.opening {
		max-width: 1020px;
		margin: 0 auto;
		display: grid;
		grid-template-columns: minmax(0, 0.58fr) minmax(0, 1fr);
		gap: clamp(30px, 4vw, 58px);
		align-items: center;
	}
	.opening-copy { min-width: 0; }
	.opening h1 { margin-bottom: 2px; font-size: clamp(40px, 5.5vw, 72px); font-weight: 400; letter-spacing: -.055em; line-height: 1; }
	.subtitle { margin: 0 0 22px; font-size: clamp(21px, 2.4vw, 30px); font-weight: 400; letter-spacing: -.035em; line-height: 1.2; }
	.format { margin-bottom: 4px; font-size: clamp(16px, 1.5vw, 20px); }
	.opening-details { margin-bottom: 0; color: var(--page-muted); font-size: 16px; line-height: 1.55; }
	.play-note { margin: 18px 0 0; color: var(--page-muted); font-size: 13px; line-height: 1.55; }
	.primary-media { width: min(100%, 720px); justify-self: end; }
	.primary-media video { background: #111; }
	.primary-media video { width: auto; max-width: 100%; max-height: 74vh; margin-left: auto; }
	figcaption { margin-top: 10px; color: var(--page-muted); font-size: 13px; line-height: 1.55; }

	.text-section,
	.content-section,
	.project-information {
		max-width: 1220px;
		margin-left: auto;
		margin-right: auto;
	}

	.about { margin-top: clamp(82px, 10vw, 132px); }
	.content-section { margin-top: clamp(104px, 12vw, 164px); }
	.section-heading h2,
	.about h2,
	.project-information h2 { margin: 0; font-size: clamp(22px, 2.3vw, 32px); font-weight: 400; letter-spacing: -.035em; line-height: 1.12; }
	.section-heading { margin-bottom: 22px; }
	.about h2 { margin-bottom: 22px; }
	.section-heading > p { margin: 9px 0 0; color: var(--page-muted); font-size: 15px; }
	.section-body { min-width: 0; }
	.copy-rail { max-width: 720px; }
	.copy-rail p,
	.section-body > p { margin-bottom: 18px; font-size: clamp(15px, 1.3vw, 17px); line-height: 1.72; }
	.body-media { max-width: 1080px; margin: 38px 0 0; }
	.split-view { margin-top: 34px; }
	.split-view img { width: auto; max-width: 100%; max-height: 66vh; margin: 0; }
	.paired-media { max-width: 900px; margin-top: 30px; }
	.media-pair { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: clamp(14px, 2vw, 26px); align-items: center; }
	.media-pair img { width: auto; max-width: 100%; max-height: 43vh; margin: 0 auto; }
	.motion-media { max-width: 540px; margin-top: 44px; }
	.motion-media video { width: auto; max-width: 100%; max-height: 50vh; margin: 0; }
	.development { margin-top: clamp(96px, 10vw, 136px); }
	.development-media { max-width: 820px; margin-top: 28px; }
	.development-media video { width: auto; max-width: 100%; max-height: 48vh; margin: 0; }
	.installation { margin-top: clamp(148px, 17vw, 212px); }
	.installation .section-body { max-width: 1080px; }
	.installation-feature { display: grid; grid-template-columns: minmax(0, 1fr) minmax(220px, 0.72fr); gap: clamp(30px, 4vw, 58px); align-items: center; }
	.installation-video { margin-top: 0; }
	.installation-video video { width: auto; max-width: 100%; max-height: 66vh; margin: 0; }
	.installation-copy h2 { margin: 0 0 20px; font-size: clamp(22px, 2.3vw, 32px); font-weight: 400; letter-spacing: -.035em; line-height: 1.12; }
	.installation-copy .copy-rail { max-width: 480px; }
	.installation-copy p { margin-bottom: 0; }
	.project-information { margin-top: clamp(96px, 10vw, 132px); padding-top: 18px; border-top: 1px solid var(--page-rule); }
	.project-information .section-heading { margin-bottom: 18px; }
	.project-facts { max-width: 840px; font-size: 14px; line-height: 1.5; }
	.project-facts p { margin: 0; }
	.project-facts .project-systems { margin-top: 16px; }

	@media (max-width: 700px) {
		.project-page { width: min(100% - 32px, 1440px); padding-top: 24px; }
		.opening { grid-template-columns: 1fr; gap: 28px; }
		.primary-media { width: 100%; justify-self: stretch; }
		.primary-media video { width: 100%; max-height: none; margin: 0; }
		.opening-details br { display: none; }
		.text-section,
		.content-section,
		.project-information { display: block; }
		.about { margin-top: 76px; }
		.content-section { margin-top: 88px; }
		.development { margin-top: 88px; }
		.installation { margin-top: 120px; }
		.media-pair { grid-template-columns: 1fr; gap: 22px; }
		.media-pair img,
		.split-view img,
		.motion-media video,
		.development-media video,
		.installation-video video { width: 100%; max-height: none; }
		.installation-feature { grid-template-columns: 1fr; gap: 24px; }
		.installation-copy { grid-row: 1; }
		.body-media { margin-top: 32px; }
		.motion-media { margin-top: 44px; }
		.project-information { margin-top: 88px; }
	}
</style>
