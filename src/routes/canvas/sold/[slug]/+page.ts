import { error } from '@sveltejs/kit';
import { soldAlbums } from '$lib/canvas/data/soldAlbums';

export function load({ params }) {
	const album = soldAlbums.find(
		(item) => item.slug === params.slug
	);

	if (!album) {
		throw error(404, 'Album not found');
	}

	return {
		album
	};
}