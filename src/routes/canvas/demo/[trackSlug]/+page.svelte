<script lang="ts">
	import CanvasWorkspace from '$lib/canvas/components/CanvasWorkspace.svelte';

	let { data } = $props();
</script>

<svelte:head>
	<title>{data.videos[0]?.demoTrackTitle ?? 'Demo'}</title>
</svelte:head>

<CanvasWorkspace />