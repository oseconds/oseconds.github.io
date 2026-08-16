export interface VideoAnalysis {
	beatConfidence?: number;
	beats?: number[];
	beatIntervals?: number[];
}

export interface VideoSource {
	id: string;
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