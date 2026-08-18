<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.video.title}</title>
</svelte:head>

<h1>{data.video.title}</h1>

{#if data.video.artist}
	<p>{data.video.artist}</p>
{/if}

<video
	src={data.video.video}
	controls
	playsinline
><track kind="captions" />
</video>