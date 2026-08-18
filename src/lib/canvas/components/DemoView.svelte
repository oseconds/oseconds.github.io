<script lang="ts">
	import type { DemoVideoSource } from '$lib/canvas/data/types';
	import { canvas } from '$lib/canvas/state/canvas.svelte';

	let { videos }: { videos: DemoVideoSource[] } = $props();

	function selectVideo(video: DemoVideoSource) {
		canvas.selectedVideo = video.id;
		canvas.title = video.title;
		canvas.artist = video.demoTrackArtist ?? '';
		canvas.spotifyUrl = '';
		canvas.bpm = video.bpm ?? 0;
	}
</script>

<div class="demo">
	{#if videos[0]}
		<h1>{videos[0].demoTrackTitle}</h1>

		{#if videos[0].demoTrackArtist}
			<p>{videos[0].demoTrackArtist}</p>
		{/if}
	{/if}

	<div class="grid">
		{#each videos as video}
			<button
				type="button"
				onclick={() => selectVideo(video)}
			>
				{video.title}
			</button>
		{/each}
	</div>
</div>