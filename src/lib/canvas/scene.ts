export interface Scene {
	render(
		ctx: CanvasRenderingContext2D,
		time: number,
		deltaTime: number
	): void;
}

export function createScene(): Scene {
	return {
		render(ctx, time, deltaTime) {
			const width = ctx.canvas.width;
			const height = ctx.canvas.height;

			ctx.fillStyle = 'oklch(15% 0.02 260)';
			ctx.fillRect(0, 0, width, height);

			const x = width / 2 + Math.sin(time) * width * 0.23;
			const y = height / 2;

			ctx.beginPath();
			ctx.arc(x, y, 40, 0, Math.PI * 2);
			ctx.fillStyle = 'oklch(90% 0.02 260)';
			ctx.fill();
		}
	};
}