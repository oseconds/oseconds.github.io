export interface Scene {
	update(time: number, deltaTime: number): void;
	render(ctx: CanvasRenderingContext2D): void;
}

export function createScene(): Scene {
	let x = 0;

	return {
		update(time, deltaTime) {
			x = Math.sin(time) * 0.23;
		},

		render(ctx) {
			const width = ctx.canvas.clientWidth;
			const height = ctx.canvas.clientHeight;

			ctx.fillStyle = 'oklch(15% 0.02 260)';
			ctx.fillRect(0, 0, width, height);

			const circleX = width / 2 + x * width;
			const circleY = height / 2;

			ctx.beginPath();
			ctx.arc(circleX, circleY, 40, 0, Math.PI * 2);
			ctx.fillStyle = 'oklch(90% 0.02 260)';
			ctx.fill();
		}
	};
}