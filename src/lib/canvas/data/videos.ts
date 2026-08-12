export interface VideoSource {
    id: string;
    title: string;
    artist: string;
    video: string;

    bpm: number | null;
    bpmConfidence: number | null;
    beats: number[];

    recommendedBars: number;
    tags: string[];
}

export const videos: VideoSource[] = [
	{
		id: 'leftfield-bass_1',
		title: 'video source test',
		artist: '0seconds',
		video: '/media/Leftfield-Bass.mp4',
		defaultBpm: 100,
		recommendedBars: 3,
		tags: ['leftfield', 'loop']
	},
	{
		id: 'house_1',
		title: 'second video house',
		artist: '0seconds',
		video: '/media/house_1.mp4',
		defaultBpm: 128,
		recommendedBars: 4,
		tags: ['house','four-on-the-floor', 'loop']
	}
];