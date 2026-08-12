<script lang="ts">
	import { onMount } from 'svelte';

	let canvas: HTMLCanvasElement;

	onMount(() => {
		const ctx = canvas.getContext('2d');
		if (!ctx) return;

		ctx.fillStyle = 'oklch(15% 0.02 260)';
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		ctx.fillStyle = 'oklch(90% 0.02 260)';
		ctx.font = '32px sans-serif';
		ctx.fillText('Canvas Preview', 48, 64);
	});
</script>

<svelte:head>
	<title>Canvas Preview</title>
</svelte:head>

<main>
	<canvas
		bind:this={canvas}
		width="1280"
		height="720"
	></canvas>
</main>

<style>
	main {
		width: 100%;
	}

	canvas {
		display: block;
		width: 100%;
		height: auto;
	}
</style>