<script lang="ts">
	import { canvas } from '$lib/canvas/state/canvas.svelte';
    canvas.selectedVideo = 'media/Leftfield-Bass.mp4';
</script>

<div class="preview">
	<div class="video">
		{#if canvas.selectedVideo}
			<video
				src={canvas.selectedVideo}
				autoplay
				muted
				loop
				playsinline
			></video>
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
		pointer-events: none;
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