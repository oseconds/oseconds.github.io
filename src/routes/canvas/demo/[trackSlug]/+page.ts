import { error } from '@sveltejs/kit';
import { demoVideos } from '$lib/canvas/data/demoVideos';

export function entries() {
	return [...new Set(demoVideos.map((video) => video.demoTrackSlug))]
		.map((trackSlug) => ({
			trackSlug
		}));
}

export function load({ params }) {
	const videos = demoVideos.filter(
		(video) => video.demoTrackSlug === params.trackSlug
	);

	if (videos.length === 0) {
		throw error(404, 'Demo not found');
	}

	return {
		videos
	};
}