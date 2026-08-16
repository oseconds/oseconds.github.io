<script lang="ts">
	import { videos } from '$lib/canvas/data/videos';
	import { canvas } from '$lib/canvas/state/canvas.svelte';

    import { tick } from 'svelte';

let videoElement = $state<HTMLVideoElement>();

$effect(() => {
    const videoId = canvas.selectedVideo;

    if (!videoId || !videoElement) return;

    tick().then(() => {
        videoElement?.play().catch(() => {
            canvas.isPlaying = false;
        });
    });
});

	const selectedVideo = $derived(
		videos.find((video) => video.id === canvas.selectedVideo)
	);

	function togglePlayback() {
		if (!videoElement) return;

		if (videoElement.paused) {
			videoElement.play();
			canvas.isPlaying = true;
		} else {
			videoElement.pause();
			canvas.isPlaying = false;
		}
	}
</script>


<div class="preview">
	<div class="video">
		{#if canvas.selectedVideo}
			<video
                bind:this={videoElement}
                src={selectedVideo?.video}
                loop
                playsinline
                muted={canvas.videoMuted}
                onplay={() => (canvas.isPlaying = true)}
                onpause={() => (canvas.isPlaying = false)}
            >
                <track kind="captions" />
            </video>
		{:else}
			<div class="placeholder">
				No video selected
			</div>
		{/if}
	</div>

	<div class="overlay">
		<button
			class="mute-button"
			type="button"
			onclick={() => {
				canvas.videoMuted = !canvas.videoMuted;
			}}
			aria-label={canvas.videoMuted ? 'Unmute video' : 'Mute video'}
			aria-pressed={canvas.videoMuted}
		>
			{#if canvas.videoMuted}
				<svg
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.8"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
				>
					<path d="M11 5 6 9H3v6h3l5 4V5Z" />
					<path d="m17 9 4 4" />
					<path d="m21 9-4 4" />
				</svg>
			{:else}
				<svg
					width="20"
					height="20"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="1.8"
					stroke-linecap="round"
					stroke-linejoin="round"
					aria-hidden="true"
				>
					<path d="M11 5 6 9H3v6h3l5 4V5Z" />
					<path d="M15.5 8.5a5 5 0 0 1 0 7" />
					<path d="M18 6a9 9 0 0 1 0 12" />
				</svg>
			{/if}
		</button>


		<div class="bottom">
			<div class="track">
				{#if selectedVideo?.artwork}
					<img
						class="artwork"
						src={selectedVideo.artwork}
						alt=""
					/>
				{:else}
					<div class="artwork placeholder-artwork"></div>
				{/if}

				<div class="track-info">
					<div class="title">{canvas.title}</div>
					<div class="artist">{canvas.artist}</div>
				</div>

				<button
					class="play-button"
					type="button"
					onclick={togglePlayback}
					aria-label={canvas.isPlaying ? 'Pause' : 'Play'}
				>
					{canvas.isPlaying ? '❚❚' : '▶'}
				</button>
			</div>

			<div class="progress">
				<div class="progress-bar"></div>
			</div>
		</div>
	</div>
</div>

<style>
	.preview {
		position: relative;
		width: min(100%, 420px);
		aspect-ratio: 9 / 16;
		margin: 0 auto;
		overflow: hidden;
		background: #111;
		border-radius: 12px;
	}

	.video {
		position: absolute;
		inset: 0;
	}

	video {
		width: 100%;
		height: 100%;
		display: block;
		object-fit: cover;
	}

	.placeholder {
		width: 100%;
		height: 100%;
		display: grid;
		place-items: center;
		color: #777;
		font-size: 14px;
	}

	.overlay {
		position: absolute;
		inset: 0;
		padding: 16px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		pointer-events: none;
	}

	/* 하단 전체를 덮는 부드러운 검정 그라데이션 */
	.overlay::after {
		content: '';
		position: absolute;
		inset: 42% -16px -16px;
		z-index: 0;
		pointer-events: none;
		background: linear-gradient(
			to bottom,
			rgba(0, 0, 0, 0),
			rgba(0, 0, 0, 0.18) 18%,
			rgba(0, 0, 0, 0.55) 58%,
			rgba(0, 0, 0, 0.88) 100%
		);
	}

	.mute-button {
		position: relative;
		z-index: 2;

		align-self: flex-end;

		width: 32px;
		height: 32px;

		display: grid;
		place-items: center;

		padding: 0;
		border: 0;
		border-radius: 50%;

		background: transparent;
		color: white;

		cursor: pointer;
		pointer-events: auto;
	}

	.track {
		position: relative;
		display: flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 14px;
		padding: 0 2px;
	}

	.play-button {
		position: absolute;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);

		width: 40px;
		height: 40px;

		display: grid;
		place-items: center;

		padding: 0;
		border: 0;
		border-radius: 50%;

		background: rgba(255, 255, 255, 0.96);
		color: #111;

		font-size: 13px;
		font-weight: 700;

		cursor: pointer;
		pointer-events: auto;

		transition: transform 120ms ease;
	}

	.play-button:hover {
		transform: translate(-50%, -50%) scale(1.05);
	}

	.bottom {
		position: relative;
		z-index: 2;
		width: 100%;
		pointer-events: none;
	}

	.track {
		display: flex;
		align-items: center;
		gap: 10px;
		margin-bottom: 14px;
		padding: 0 2px;
	}

	.artwork {
		flex: 0 0 auto;
		width: 42px;
		height: 42px;

		object-fit: cover;
		border-radius: 4px;

		background: rgba(255, 255, 255, 0.12);
	}

	.placeholder-artwork {
		background: linear-gradient(
			135deg,
			rgba(255, 255, 255, 0.16),
			rgba(255, 255, 255, 0.04)
		);
	}

	.track-info {
		min-width: 0;
		flex: 1;
		padding-right: 46px;
	}

	.title {
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

		color: white;
		font-size: 14px;
		font-weight: 600;
		line-height: 1.2;
		text-shadow: 0 1px 3px rgba(0, 0, 0, 0.45);
	}

	.artist {
		margin-top: 3px;

		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;

		color: rgba(255, 255, 255, 0.72);
		font-size: 12px;
		line-height: 1.2;
		text-shadow: 0 1px 3px rgba(0, 0, 0, 0.45);
	}

	.progress {
		height: 2px;
		background: rgba(255, 255, 255, 0.3);
	}

	.progress-bar {
		width: 35%;
		height: 100%;
		background: white;
	}

	.mute-button {
		position: relative;
		z-index: 2;

		width: 32px;
		height: 32px;

		display: grid;
		place-items: center;

		padding: 0;
		border: 0;
		background: transparent;

		color: white;
		cursor: pointer;
		pointer-events: auto;

		opacity: 0.9;
	}

	.mute-button:hover {
		opacity: 1;
	}

	.mute-button svg {
		display: block;
	}

</style>