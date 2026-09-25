<svelte:head>
	<title>보이다 (VOID-A) — 0seconds</title>
	<meta
		name="description"
		content="작품이 관객을 바라볼 수 있을까? 보이다의 시점 실험과 설치 기록."
	/>
</svelte:head>

<main class="project-page" lang="ko">
	<article>
		<section class="encounter" aria-labelledby="project-title">
			<p class="encounter-label">VOID-A · 2023 · 설치 작업</p>
			<h1 id="project-title" class="encounter-question">작품이 관객을 바라볼 수 있을까?</h1>
			<figure class="hero">
				<img
					src="/media/portfolio/void-a/void-a-hero-t15.080.webp"
					alt="두 화면에 눈의 형태가 나타난 설치 장면"
					fetchpriority="high"
				/>
				<figcaption>설치 기록에서 발췌한 장면.</figcaption>
			</figure>
		</section>

		<section class="chapter question" aria-labelledby="question-title">
			<p class="chapter-number">02</p>
			<div class="chapter-content">
				<h2 id="question-title">Artistic question</h2>
				<p>
					「보이다」는 관객이 작품을 보고 조작하는 관계를 뒤집어, 화면 안의 존재가 먼저 관객을 바라보는 것처럼
					느껴지게 할 수 있는지를 묻는다. 이전의 <i>if you gaze</i>와 <i>Panopticon</i>에서 이어진
					seeing / being seen의 질문은 시점 실험과 방향성 있는 소리의 개발로 이어졌다.
				</p>
				<p class="secondary">
					눈과 구체는 화면 속 대상을 하나의 존재처럼 읽게 하는 단서다. 기술은 이 질문을 시험한 구현의 기록으로
					놓인다.
				</p>
			</div>
		</section>

		<section class="chapter viewpoint" aria-labelledby="viewpoint-title">
			<p class="chapter-number">03</p>
			<div class="chapter-content">
				<h2 id="viewpoint-title">Moving viewpoint experiment</h2>
				<p class="section-intro">
					고정된 관찰 위치에서 성립하는 공간감을 움직이는 virtual viewpoint의 문제로 확장해 시험했다.
					Kinect는 관객에게 보이는 controller 없이 위치를 인식하는 방향으로 탐색했지만, 최종 전시에서
					관객 위치가 시점 변화를 실시간으로 만들었는지는 미확정이다.
				</p>

				<figure class="media-wide">
					<img
						src="/media/portfolio/void-a/void-a-anamorphic-viewpoint-td.webp"
						alt="TouchDesigner 시점 실험 화면에서 정면의 형태와 비스듬한 외부 시점이 함께 보인다"
						loading="lazy"
					/>
					<figcaption>
						특정 관찰 위치에서 공간감이 성립하도록 구성한 TouchDesigner 시점 실험. final live viewer tracking을
						보여주는 장면은 아니다.
					</figcaption>
				</figure>

				<figure class="media-medium">
					<video
						src="/media/portfolio/void-a/void-a-viewpoint-reveal-t00.000-t09.000.mp4"
						aria-label="특정 관찰 위치에 따라 두 화면의 이미지가 합쳐지거나 분리되는 물리적 시점 시연"
						muted
						autoplay
						loop
						playsinline
						controls
					></video>
					<figcaption>
						<span class="media-label">시점 시연 · 반복 재생</span>
						특정 관찰 위치에 들어오면 두 화면의 이미지가 하나의 형태로 읽히고, 그 위치를 벗어나면 다시 분리된다.
						관객 추적이나 자동 시점 제어를 증명하는 영상은 아니다.
					</figcaption>
				</figure>

				<figure class="media-medium">
					<img
						src="/media/portfolio/void-a/void-a-blender-projection-test-b.webp"
						alt="Blender에서 이미지와 공간 geometry의 투영 관계를 시험한 화면"
						loading="lazy"
					/>
					<figcaption>
						생성·투영 이미지를 공간 geometry 위에서 시험한 Blender projection study. final runtime proof가
						아니다.
					</figcaption>
				</figure>

				<figure class="media-medium">
					<img
						src="/media/portfolio/void-a/void-a-lost-final-slide-02.webp"
						alt="발표 자료 2번 슬라이드에 사용된 TouchDesigner 제작 과정 화면, 미실행 오류 표시 포함"
						loading="lazy"
					/>
					<figcaption>
						원본 발표 자료 2번 슬라이드에 사용된 TouchDesigner 제작 과정 화면. 당시 미실행 오류 표시도 그대로
						남겨 두며 final exhibition runtime의 증거로 해석하지 않는다.
					</figcaption>
				</figure>

				<div class="parallel-model">
					<div class="lane-copy">
						<p><span>시각 축</span> 관객 위치 → 움직이는 virtual viewpoint → visual gaze</p>
						<p><span>음향 축</span> directional / parametric sound → auditory direction experiment</p>
						<p class="secondary">
							두 축은 병렬 개발 모델이며, 최종 실시간 연동 구조를 확정하지 않는다.
						</p>
					</div>
					<figure class="diagram">
						<img
							src="/media/portfolio/void-a/void-a-concept-diagram.svg"
							alt="시각과 음향의 병렬 개발 축을 보여주는 개념도"
							loading="lazy"
						/>
						<figcaption>두 축은 병렬 개발 모델이며, 최종 실시간 연동 구조를 확정하지 않는다.</figcaption>
					</figure>
				</div>
			</div>
		</section>

		<section class="chapter sound" aria-labelledby="sound-title">
			<p class="chapter-number">04</p>
			<div class="chapter-content">
				<h2 id="sound-title">Directional sound evidence</h2>
				<p class="section-intro">
					시각 실험과 병렬로 transducer array, 회로, 물리 시스템을 통해 소리의 방향성을 시험했다.
				</p>
				<p class="evidence-note">
					방향성 / parametric speaker의 전시 사용과 실제 소리 출력은 owner-confirmed context다. 자동 조준과 정확한 최종
					signal path는 미확정이며, 아래 기록은 이를 확정하지 않는다.
				</p>

				<div class="sound-group">
					<h3>Design / simulation</h3>
					<div class="media-pair design-pair">
						<figure>
							<img
								src="/media/portfolio/void-a/void-a-hardware-schematic-fritzing.png"
								alt="Fritzing 하드웨어 회로도"
								width="2196"
								height="1800"
								loading="lazy"
							/>
							<figcaption>Fritzing 하드웨어 schematic.</figcaption>
						</figure>
						<figure>
							<img
								src="/media/portfolio/void-a/void-a-circuit-simulation-tinkercad.png"
								alt="Tinkercad 회로 시뮬레이션 화면"
								width="1280"
								height="985"
								loading="lazy"
							/>
							<figcaption>Tinkercad simulation.</figcaption>
						</figure>
					</div>
					<p class="group-caption">Fritzing schematic과 Tinkercad simulation의 제작 기록.</p>
				</div>

				<div class="sound-group physical-group">
					<h3>Physical system</h3>
					<div class="media-pair physical-pair">
						<figure>
							<img
								src="/media/portfolio/void-a/void-a-system-integration.webp"
								alt="회로와 부품이 조립된 directional sound 물리 시스템"
								loading="lazy"
							/>
							<figcaption>Directional sound 물리 시스템 구성 기록.</figcaption>
						</figure>
						<figure>
							<img
								src="/media/portfolio/void-a/void-a-mounted-speaker-array.webp"
								alt="장착된 directional speaker array"
								loading="lazy"
							/>
							<figcaption>완성·장착된 directional speaker array.</figcaption>
						</figure>
					</div>
					<p class="group-caption">
						두 이미지는 물리 시스템의 맥락을 보여준다. 장착 사진은 최종 전시 설치, 자동 조준 또는 정확한 최종
						signal path를 단독으로 입증하지 않는다.
					</p>
				</div>
			</div>
		</section>

		<section class="chapter installation" aria-labelledby="installation-title">
			<p class="chapter-number">05</p>
			<div class="chapter-content">
				<h2 id="installation-title">Installation / motion</h2>
				<p class="transition">다시, 화면 속 존재와 마주한다.</p>
				<figure class="media-wide">
					<video
						src="/media/portfolio/void-a/void-a-main-excerpt-t10.300-t19.800.mp4"
						poster="/media/portfolio/void-a/void-a-frame-t10.300.webp"
						aria-label="두 화면의 시각 출력과 설치 상태를 담은 영상 발췌"
						controls
						playsinline
						muted
					></video>
					<figcaption>
						<span class="media-label">설치 기록 · 직접 재생</span>
						두 화면의 시각 출력과 설치 상태를 담은 기록 발췌. 원본 영상의 00:00:10.300–00:00:19.800 구간.
						실시간 관객 추적이나 지향성 스피커 출력을 증명하는 영상은 아니다.
					</figcaption>
				</figure>
			</div>
		</section>

		<section class="chapter stills" aria-labelledby="stills-title">
			<p class="chapter-number">06</p>
			<div class="chapter-content">
				<h2 id="stills-title">Still re-observation</h2>
				<p class="section-intro stills-intro">
					움직이는 기록 뒤에, 선택한 두 장면을 독자의 속도로 다시 본다.
				</p>
				<div class="still-pair">
					<figure>
						<img
							src="/media/portfolio/void-a/void-a-hero-t15.080.webp"
							alt="15.080초 설치 기록의 두 화면과 눈의 형태"
							loading="lazy"
						/>
						<figcaption>00:00:15.080 — installation still.</figcaption>
					</figure>
					<figure>
						<img
							src="/media/portfolio/void-a/void-a-frame-t43.000.webp"
							alt="43.000초에 기록된 이후의 시점과 상태"
							loading="lazy"
						/>
						<figcaption>00:00:43.000 — later viewpoint / state.</figcaption>
					</figure>
				</div>
				<p class="group-caption">
					15.080 installation still과 Section 05 발췌 구간 밖의 43.000 later viewpoint/state를 다시 본다.
					두 장면은 관객 반응의 연속 단계나 chronological viewer-response sequence로 해석하지 않는다.
				</p>
			</div>
		</section>

		<section class="chapter boundary" aria-labelledby="boundary-title">
			<p class="chapter-number">07</p>
			<div class="chapter-content">
				<h2 id="boundary-title">Record / evidence boundary</h2>
				<div class="boundary-grid">
					<div>
						<h3>Documented</h3>
						<p>설치와 시각 출력은 기록되어 있다.</p>
					</div>
					<div>
						<h3>Owner-confirmed context</h3>
						<p>Directional / parametric speaker의 전시 사용과 실제 소리 출력은 owner-confirmed context다.</p>
					</div>
					<div>
						<h3>Unresolved</h3>
						<p>
							최종 live viewer-position → viewpoint 연동, Kinect의 실시간 관객 반응, 관객 위치 기반 음향 조준,
							자동 servo 조준, 정확한 최종 modulation / signal path는 미확정이다.
						</p>
					</div>
					<div>
						<h3>Credits</h3>
						<p>작품명 보이다 · archive identifier VOID-A · TEAM 0th axis / 오영서</p>
					</div>
				</div>
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
		--ink: #171715;
		--muted: #686761;
		--rule: #c9c8c2;
		width: min(100% - 48px, 1440px);
		margin: 0 auto;
		padding: clamp(24px, 5vw, 72px) 0 120px;
		color: var(--ink);
		font-family: Arial, Helvetica, sans-serif;
	}

	.encounter-label,
	.encounter-question,
	.chapter-number,
	.chapter h2,
	.chapter h3,
	figcaption,
	.secondary,
	.group-caption,
	.evidence-note {
		font-weight: 400;
	}

	.encounter-label {
		margin: 0 0 14px;
		font-size: 12px;
		letter-spacing: 0.06em;
	}

	.encounter-question {
		margin: 0 0 28px;
		font-size: clamp(24px, 4.2vw, 54px);
		letter-spacing: -0.045em;
		line-height: 1.16;
	}

	figure {
		margin: 0;
	}

	img,
	video {
		display: block;
		width: 100%;
		height: auto;
	}

	video {
		background: #deddd8;
	}

	figcaption,
	.group-caption,
	.secondary {
		color: var(--muted);
		font-size: clamp(13px, 0.73vw, 14px);
		line-height: 1.55;
	}

	.media-label {
		display: block;
		margin-bottom: 4px;
		font-size: 0.85em;
		letter-spacing: 0.03em;
	}

	figcaption {
		margin-top: 10px;
	}

	.chapter {
		display: grid;
		grid-template-columns: 72px minmax(0, 1fr);
		gap: clamp(20px, 4vw, 64px);
		margin-top: clamp(100px, 16vw, 220px);
	}

	.chapter-number {
		margin: 7px 0 0;
		padding-top: 10px;
		border-top: 1px solid var(--rule);
		color: var(--muted);
		font-size: 11px;
		letter-spacing: 0.08em;
	}

	.chapter-content {
		min-width: 0;
	}

	.chapter h2 {
		margin: 0 0 25px;
		font-size: clamp(22px, 3vw, 36px);
		letter-spacing: -0.04em;
		line-height: 1.1;
	}

	.chapter h3 {
		margin: 0 0 18px;
		font-size: 12px;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.chapter p {
		max-width: 720px;
		font-size: clamp(15px, 1.45vw, 18px);
		line-height: 1.7;
	}

	.question p {
		margin: 0 0 18px;
	}

	.question .secondary,
	.parallel-model .secondary {
		font-size: 13px;
	}

	.section-intro {
		margin: 0 0 38px;
	}

	.media-wide {
		width: 100%;
		margin: 0 0 54px;
	}

	.media-medium {
		width: min(100%, 900px);
		margin: 0 0 54px;
	}

	.parallel-model {
		display: grid;
		grid-template-columns: minmax(220px, 0.8fr) minmax(0, 1.2fr);
		gap: clamp(24px, 6vw, 88px);
		align-items: center;
		margin-top: 30px;
		padding-top: 28px;
		border-top: 1px solid var(--rule);
	}

	.lane-copy p {
		margin: 0 0 16px;
	}

	.lane-copy span {
		display: block;
		margin-bottom: 4px;
		color: var(--muted);
		font-size: 11px;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.lane-copy .secondary {
		margin-top: 28px;
	}

	.diagram {
		max-width: 900px;
	}

	.evidence-note {
		max-width: 850px !important;
		margin: -14px 0 48px;
		padding-left: 16px;
		border-left: 2px solid #8c8a80;
		color: #55544e;
		font-size: 14px !important;
	}

	.sound-group {
		padding: 26px 0 38px;
		border-top: 1px solid var(--rule);
	}

	.physical-group {
		margin-top: 22px;
	}

	.media-pair,
	.still-pair {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: clamp(18px, 3vw, 42px);
		align-items: start;
	}

	.design-pair {
		align-items: stretch;
	}

	.design-pair figure {
		display: flex;
		flex-direction: column;
	}

	.design-pair img {
		width: auto;
		height: min(28vw, 390px);
		margin: auto auto 0;
	}

	.physical-pair img {
		aspect-ratio: 800 / 529;
	}

	.group-caption {
		max-width: 850px;
		margin: 18px 0 0;
		font-size: clamp(13px, 0.73vw, 14px) !important;
	}

	.stills-intro {
		margin-top: -8px;
		margin-bottom: 20px;
	}

	.transition {
		margin: -5px 0 30px;
		color: var(--muted);
	}

	.still-pair {
		gap: clamp(18px, 3vw, 36px);
	}

	.boundary-grid {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 30px 48px;
		padding-top: 12px;
		border-top: 1px solid var(--rule);
	}

	.boundary-grid > div {
		padding-top: 18px;
	}

	.boundary-grid h3 {
		margin-bottom: 8px;
		color: var(--muted);
		font-size: 11px;
	}

	.boundary-grid p {
		margin: 0;
		font-size: 14px;
	}

	@media (max-width: 700px) {
		.project-page {
			width: min(100% - 32px, 1440px);
			padding-top: 24px;
		}

		.chapter {
			grid-template-columns: 1fr;
			gap: 14px;
			margin-top: 96px;
		}

		.chapter-number {
			width: 48px;
		}

		.parallel-model {
			grid-template-columns: 1fr;
		}

		.media-pair,
		.still-pair,
		.boundary-grid {
			grid-template-columns: 1fr;
		}

		.design-pair img {
			height: min(66vw, 260px);
		}
	}
</style>
