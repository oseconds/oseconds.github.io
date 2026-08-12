import type { Scene } from './scene';

export interface CanvasRenderer {
	start(): void;
	stop(): void;
	resize(): void;
}

export function createCanvasRenderer(
	canvas: HTMLCanvasElement,
	scene: Scene
): CanvasRenderer {
	const ctx = canvas.getContext('2d');

	if (!ctx) {
		throw new Error('Canvas 2D context is not available');
	}

	let animationFrame = 0;
	let startTime = 0;
	let previousTime = 0;

	const resize = () => {
		const dpr = window.devicePixelRatio || 1;
		const width = canvas.clientWidth;
		const height = width * (9 / 16);

		canvas.width = Math.round(width * dpr);
		canvas.height = Math.round(height * dpr);

		ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
	};

	const render = (timestamp: number) => {
		if (!startTime) {
			startTime = timestamp;
			previousTime = timestamp;
		}

		const time = (timestamp - startTime) / 1000;
		const deltaTime = (timestamp - previousTime) / 1000;

		previousTime = timestamp;

		scene.update(time, deltaTime);
        scene.render(ctx);

		animationFrame = requestAnimationFrame(render);
	};

	const start = () => {
		resize();

		startTime = 0;
		previousTime = 0;

		animationFrame = requestAnimationFrame(render);
	};

	const stop = () => {
		cancelAnimationFrame(animationFrame);
	};

	return {
		start,
		stop,
		resize
	};
}