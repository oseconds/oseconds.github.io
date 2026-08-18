<script lang="ts">
	let { data } = $props();
</script>

<svelte:head>
	<title>{data.album.title} — {data.album.artist}</title>
</svelte:head>

<h1>{data.album.title}</h1>
<p>{data.album.artist}</p>

{#each data.album.tracks as track}
	<div>
		<h2>{track.title}</h2>
		<p>{track.artist}</p>
	</div>
{/each}