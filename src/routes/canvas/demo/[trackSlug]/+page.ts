import { error } from '@sveltejs/kit';
import { demoVideos } from '$lib/canvas/data/demoVideos';

export function load({ params }) {
	const videos = demoVideos.filter(
		(video) => video.demoTrackSlug === params.trackSlug
	);

	if (!videos.length) {
		throw error(404, 'Demo not found');
	}

	return {
		videos
	};
}