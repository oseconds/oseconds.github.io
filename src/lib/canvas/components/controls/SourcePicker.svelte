<script lang="ts">
	import { videos } from '$lib/canvas/data/videos';
	import { canvas } from '$lib/canvas/state/canvas.svelte';

	function selectVideo(id: string) {
        const video = videos.find((item) => item.id === id);

        if (!video) return;

        canvas.selectedVideo = video.id;
        canvas.title = video.title;
        canvas.artist = video.artist;
        canvas.bpm = video.defaultBpm;
    }
</script>

<label>
	Video Source

	<select
        value={canvas.selectedVideo ?? ''}
        onchange={(event) => selectVideo(event.currentTarget.value)}
    >
        <option value="" disabled>Select video</option>

        {#each videos as video}
            <option value={video.id}>
                {video.title}
            </option>
        {/each}
    </select>
</label>