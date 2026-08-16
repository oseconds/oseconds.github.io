export type PreviewMode = 'expanded' | 'compact' | 'hidden';

export interface CanvasState {
	selectedVideo: string | null;

	title: string;
	artist: string;
	spotifyUrl: string;

	audio: File | null;
	audioUrl: string | null;
	audioName: string;

	bpm: number;
	playbackRate: number;

	currentTime: number;
	duration: number;

	previewMode: PreviewMode;

	safeZone: boolean;
	isPlaying: boolean;
	videoMuted: boolean;
}

export const canvas = $state<CanvasState>({
	selectedVideo: null,

	title: 'default title test',
	artist: '',
	spotifyUrl: '',

	audio: null,
	audioUrl: null,
	audioName: '',

	bpm: 135,
	playbackRate: 1,

	currentTime: 0,
	duration: 0,

	previewMode: 'expanded',

	safeZone: false,
	isPlaying: false,
	videoMuted: false,
});