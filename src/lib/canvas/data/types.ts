export interface VideoAnalysis {
	beatConfidence?: number;
	beats?: number[];
	beatIntervals?: number[];
}

export interface VideoSource {
	id: string;
	slug?: string;

	title: string;
	artist?: string;
	artwork?: string;
	video: string;

	bpm?: number;
	recommendedBars?: number;
	tags: string[];

	spotifyUrl?: string;

	analysis?: VideoAnalysis;
}

export interface DemoVideoSource extends VideoSource {
	demoTrackSlug: string;
	demoTrackTitle: string;
	demoTrackArtist?: string;
}

export interface SoldAlbum {
	slug: string;
	title: string;
	artist: string;
	artwork?: string;
	tracks: VideoSource[];
}