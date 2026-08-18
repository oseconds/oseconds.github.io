<script lang="ts">
	let { data } = $props();
</script>

<h1>{data.videos[0]?.demoTrackTitle}</h1>

{#each data.videos as video}
	<div>{video.title}</div>
{/each}