<script lang="ts">
    import { videos } from '$lib/canvas/data/videos';
    import { canvas } from '$lib/canvas/state/canvas.svelte';

    function selectVideo(id: string) {
        const video = videos.find((item) => item.id === id);

        if (!video) return;

        canvas.selectedVideo = video.id;
        canvas.title = video.title;
        canvas.artist = video.artist;
        canvas.bpm = video.defaultBpm;
    }
</script>

<div class="library">
    <div class="grid">
        {#each videos as video}
            <button
                type="button"
                class:selected={canvas.selectedVideo === video.id}
                class="card"
                onclick={() => selectVideo(video.id)}
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
                            <span>{video.defaultBpm} BPM</span>
                            <span>·</span>
                            <span>{video.tags[0]}</span>
                        </div>
                    </div>
                </div>
            </button>
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
        display: block;
        width: 100%;
        padding: 0;
        border: 1px solid #242424;
        border-radius: 10px;
        overflow: hidden;
        background: #141414;
        color: white;
        text-align: left;
        cursor: pointer;
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
</style>