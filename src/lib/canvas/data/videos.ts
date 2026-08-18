import { availableVideos } from './availableVideos';
import { demoVideos } from './demoVideos';
import { soldAlbums } from './soldAlbums';

const soldVideos = soldAlbums.flatMap((album) => album.tracks);

export const videos = [
	...availableVideos,
	...demoVideos,
	...soldVideos
];