<script lang="ts">
	import { videos } from '$lib/canvas/data/videos';
	import { canvas } from '$lib/canvas/state/canvas.svelte';
	import SourcePicker from './controls/SourcePicker.svelte';

    let videoElement = $state<HTMLVideoElement>();

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

<SourcePicker />

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
		<div class="track-info">
			<div class="title">{canvas.title}</div>
			<div class="artist">{canvas.artist}</div>
		</div>

        <div class="controls">
            <button type="button" onclick={togglePlayback}>
                {canvas.isPlaying ? '❚❚ Pause' : '▶ Play'}
            </button>
            <button
                type="button"
                onclick={() => (canvas.videoMuted = !canvas.videoMuted)}
            >
                {canvas.videoMuted ? '🔇' : '🔊'}
            </button>
        </div>

		<div class="progress">
			<div class="progress-bar"></div>
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
		display: flex;
		flex-direction: column;
		justify-content: flex-end;
		padding: 24px;
	}

    .controls {
        margin-bottom: 12px;
    }

    .controls button {
        padding: 8px 14px;
        border: 0;
        border-radius: 999px;
        background: white;
        color: black;
        font-size: 13px;
        cursor: pointer;
    }

	.track-info {
		margin-bottom: 18px;
	}

	.title {
		color: white;
		font-size: 18px;
		font-weight: 600;
	}

	.artist {
		margin-top: 4px;
		color: rgba(255, 255, 255, 0.65);
		font-size: 14px;
	}

	.progress {
		height: 3px;
		background: rgba(255, 255, 255, 0.25);
	}

	.progress-bar {
		width: 35%;
		height: 100%;
		background: white;
	}
</style>