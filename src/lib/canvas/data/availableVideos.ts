import type { VideoSource } from './types';

export const availableVideos: VideoSource[] = [
	{
		id: 'leftfield-bass_1',
		title: 'video source test',
		video: '/media/Leftfield-Bass.mp4',
		bpm: 100,
		recommendedBars: 3,
		tags: ['leftfield', 'loop'],
		analysis: {
			beatConfidence: 3.9915,
			beats: [0, 2, 4, 6]
		}
	},
	{
		id: 'house_1',
		title: 'video source test 2',
		video: '/media/house_1.mp4',
		bpm: 128,
		recommendedBars: 4,
		tags: ['house', 'loop'],
		analysis: {
			beatConfidence: 4.1234,
			beats: [0, 2, 4, 6]
		}
	}
];