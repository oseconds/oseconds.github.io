<script lang="ts">
	import { canvas } from '$lib/canvas/state/canvas.svelte';
	import { videos } from '$lib/canvas/data/videos';
	import { availableVideos } from '$lib/canvas/data/availableVideos';
	import { soldVideos } from '$lib/canvas/data/soldVideos';

	type LibraryTab = 'all' | 'available' | 'sold';

	let activeTab = $state<LibraryTab>('all');

	const visibleVideos = $derived(
		activeTab === 'available'
			? availableVideos
			: activeTab === 'sold'
				? soldVideos
				: videos
	);

	function selectVideo(id: string) {
		const video = videos.find((item) => item.id === id);

		if (!video) return;

		canvas.selectedVideo = video.id;
		canvas.title = video.title;

		if (video.artist !== undefined) {
			canvas.artist = video.artist;
		}

		canvas.bpm = video.bpm ?? 0;
	}
</script>

<div class="library">
	<div class="tabs">
		<button
			type="button"
			class:active={activeTab === 'all'}
			onclick={() => (activeTab = 'all')}
		>
			All
		</button>

		<button
			type="button"
			class:active={activeTab === 'available'}
			onclick={() => (activeTab = 'available')}
		>
			Available
		</button>

		<button
			type="button"
			class:active={activeTab === 'sold'}
			onclick={() => (activeTab = 'sold')}
		>
			Sold
		</button>
	</div>

	<div class="grid">
		{#each visibleVideos as video}
            <div
                class:selected={canvas.selectedVideo === video.id}
                class="card"
            >
                <button
                    type="button"
                    class="card-main"
                    onclick={() => selectVideo(video.id)}
                    aria-label={`Select ${video.title}`}
                >
                    <div class="thumbnail">
                        <video
                            src={video.video}
                            muted
                            playsinline
                            preload="metadata"
                        ></video>

                        <div class="overlay">
                            <div class="title">{video.title}</div>

                            <div class="meta">
                                <span>{video.bpm ?? '—'} BPM</span>

                                {#if video.tags[0]}
                                    <span>·</span>
                                    <span>{video.tags[0]}</span>
                                {/if}
                            </div>

                            {#if activeTab === 'sold' && video.artist}
                                <div class="artist">{video.artist}</div>
                            {/if}
                        </div>
                    </div>
                </button>

                {#if activeTab === 'sold' && video.spotifyUrl}
                    <a
                        class="spotify"
                        href={video.spotifyUrl}
                        target="_blank"
                        rel="noreferrer"
                    >
                        View on Spotify ↗
                    </a>
                {/if}
            </div>
        {/each}
	</div>
</div>

<style>
    .library {
        width: 100%;
    }

    .grid {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        gap: 12px;
    }

    .card {
        position: relative;
        overflow: hidden;
        border: 1px solid #242424;
        border-radius: 10px;
        background: #141414;
        transition:
            border-color 120ms ease,
            transform 120ms ease;
    }

    .card:hover {
        border-color: #444;
        transform: translateY(-1px);
    }

    .card.selected {
        border-color: white;
    }

    .card-main {
        display: block;
        width: 100%;
        padding: 0;
        border: 0;
        background: transparent;
        color: white;
        text-align: left;
        cursor: pointer;
    }

    .spotify {
        display: block;
        padding: 8px 10px;
        background: #141414;
        color: rgba(255, 255, 255, 0.75);
        font-size: 10px;
        text-decoration: none;
    }

    .spotify:hover {
        color: white;
        text-decoration: underline;
    }

    .thumbnail {
        position: relative;
        width: 100%;
        aspect-ratio: 9 / 16;
        overflow: hidden;
        background: #222;
    }

    .thumbnail video {
        width: 100%;
        height: 100%;
        display: block;
        object-fit: cover;
    }

    .overlay {
        position: absolute;
        inset: auto 0 0;
        padding: 28px 10px 10px;
        background: linear-gradient(
            transparent,
            rgba(0, 0, 0, 0.75)
        );
        color: white;
    }

    .title {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 12px;
        font-weight: 600;
    }

    .meta {
        display: flex;
        gap: 4px;
        margin-top: 4px;
        color: rgba(255, 255, 255, 0.7);
        font-size: 10px;
    }

    .artist {
	margin-top: 3px;
	color: rgba(255, 255, 255, 0.65);
	font-size: 10px;
    }

    .tabs {
        display: flex;
        gap: 6px;
        margin-bottom: 14px;
    }

    .tabs button {
        padding: 6px 10px;
        border: 1px solid #2a2a2a;
        border-radius: 999px;
        background: transparent;
        color: #777;
        font-size: 11px;
        cursor: pointer;
    }

    .tabs button:hover {
        color: white;
        border-color: #444;
    }

    .tabs button.active {
        background: white;
        border-color: white;
        color: black;
    }
</style>