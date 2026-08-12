export type PreviewMode = 'expanded' | 'compact' | 'hidden';

export interface CanvasState {
	selectedVideo: string | null;

	title: string;
	artist: string;

	audio: File | null;

	bpm: number;
	playbackRate: number;

	currentTime: number;
	duration: number;

	previewMode: PreviewMode;

	safeZone: boolean;
	isPlaying: boolean;
}

export const canvas = $state<CanvasState>({
	selectedVideo: null,

	title: '135bpm uk garage',
	artist: '0seconds',

	audio: null,

	bpm: 135,
	playbackRate: 1,

	currentTime: 0,
	duration: 0,

	previewMode: 'expanded',

	safeZone: false,
	isPlaying: false
});