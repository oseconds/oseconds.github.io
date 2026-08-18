import { error } from '@sveltejs/kit';
import { availableVideos } from '$lib/canvas/data/availableVideos';

export function entries() {
	return availableVideos.map((video) => ({
		slug: video.slug
	}));
}

export function load({ params }) {
	const video = availableVideos.find(
		(item) => item.slug === params.slug
	);

	if (!video) {
		throw error(404, 'Canvas not found');
	}

	return {
		video
	};
}