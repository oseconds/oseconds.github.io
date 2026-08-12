<script lang="ts">
	import { onMount } from 'svelte';
	import { createCanvasRenderer } from '$lib/canvas/renderer';
	import { createScene } from '$lib/canvas/scene';

	let canvas: HTMLCanvasElement;

	onMount(() => {
		const scene = createScene();
		const renderer = createCanvasRenderer(canvas, scene);

		const handleResize = () => {
			renderer.resize();
		};

		window.addEventListener('resize', handleResize);

		renderer.start();

		return () => {
			window.removeEventListener('resize', handleResize);
			renderer.stop();
		};
	});
</script>

<svelte:head>
	<title>Canvas Preview</title>
</svelte:head>

<main>
	<canvas bind:this={canvas}></canvas>
</main>

<style>
	main {
		width: 100%;
	}

	canvas {
		display: block;
		width: 100%;
		height: auto;
		aspect-ratio: 16 / 9;
	}
</style>