import { error } from '@sveltejs/kit';
import { demoVideos } from '$lib/canvas/data/demoVideos';

export function load({ params }) {
	const videos = demoVideos.filter(
		(item) => item.demoTrackSlug === params.trackSlug
	);

	if (videos.length === 0) {
		throw error(404, 'Demo not found');
	}

	return {
		videos
	};
}