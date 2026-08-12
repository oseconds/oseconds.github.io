<script lang="ts">
	import CanvasPreview from '$lib/canvas/components/CanvasPreview.svelte';
</script>

<svelte:head>
	<title>Canvas Preview</title>
</svelte:head>

<main>
	<CanvasPreview />
</main>

<style>
	main {
		min-height: 100vh;
		display: grid;
		place-items: center;
		padding: 24px;
	}
</style>