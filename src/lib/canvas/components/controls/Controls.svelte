<script lang="ts">
    import { canvas } from '$lib/canvas/state/canvas.svelte';

	let {
		onTogglePlayback
	}: {
		onTogglePlayback: () => void;
	} = $props();


	function toggleMute() {
		canvas.videoMuted = !canvas.videoMuted;
	}

    let audioFiles = $state<FileList | null>(null);

	function handleAudioChange() {
		const file = audioFiles?.[0];

		if (!file) return;

		if (canvas.audioUrl) {
			URL.revokeObjectURL(canvas.audioUrl);
		}

		canvas.audio = file;
		canvas.audioUrl = URL.createObjectURL(file);
		canvas.audioName = file.name;
	}
</script>

<div class="controls">
	<section class="section">
        <div class="section-title">Playback</div>

        <div class="button-row">
            <button
                type="button"
                class="primary-button"
                onclick={onTogglePlayback}
            >
                {canvas.isPlaying ? '❚❚ Pause' : '▶ Play'}
            </button>

            <button
                type="button"
                class="secondary-button"
                onclick={toggleMute}
            >
                {canvas.videoMuted ? 'Unmute' : 'Mute'}
            </button>
        </div>

        <!-- {#if canvas.spotifyUrl}
            <a
                class="spotify-link"
                href={canvas.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
            >
                View on Spotify ↗
            </a>
        {/if} -->
    </section>

	<section class="section">
        <div class="section-title">Track</div>

        <label>
            <span>Title</span>
            <input
                type="text"
                bind:value={canvas.title}
                placeholder="Track title"
            />
        </label>

        <label>
            <span>Artist</span>
            <input
                type="text"
                bind:value={canvas.artist}
                placeholder="Artist name"
            />
        </label>

    </section>

	<section class="section">
        <div class="section-title">Audio</div>

        {#if canvas.spotifyUrl}
            <a
                class="spotify-link"
                href={canvas.spotifyUrl}
                target="_blank"
                rel="noopener noreferrer"
            >
                Open Spotify ↗
            </a>
        {/if}

        <label class="upload">
            <input
                type="file"
                accept="audio/*"
                bind:files={audioFiles}
                onchange={handleAudioChange}
            />

            <span class="upload-button">
                {canvas.audioName || 'Upload audio'}
            </span>
        </label>
    </section>

	<section class="section">
		<div class="section-title">Preview</div>

		<div class="mode-row">
			<button
				type="button"
				class:active={canvas.previewMode === 'expanded'}
				onclick={() => (canvas.previewMode = 'expanded')}
			>
				Expanded
			</button>

			<button
				type="button"
				class:active={canvas.previewMode === 'compact'}
				onclick={() => (canvas.previewMode = 'compact')}
			>
				Compact
			</button>

			<button
				type="button"
				class:active={canvas.previewMode === 'hidden'}
				onclick={() => (canvas.previewMode = 'hidden')}
			>
				Hidden
			</button>
		</div>
	</section>
</div>

<style>
	.controls {
		display: flex;
		flex-direction: column;
		gap: 18px;
	}

	.section {
		display: flex;
		flex-direction: column;
		gap: 9px;
	}

	.section-title {
		color: #888;
		font-size: 10px;
		font-weight: 600;
		letter-spacing: 0.08em;
		text-transform: uppercase;
	}

	.button-row,
	.mode-row {
		display: flex;
		gap: 6px;
	}

	button {
		border: 1px solid #2a2a2a;
		border-radius: 7px;
		background: #151515;
		color: #ccc;
		cursor: pointer;
		font-size: 10px;
		transition:
			border-color 120ms ease,
			color 120ms ease,
			background 120ms ease;
	}

    button:hover {
        border-color: #444;
    }

	.primary-button {
        width: 72px;
        height: 32px;

        display: inline-flex;
        align-items: center;
        justify-content: center;

        padding: 0;
        border: 1px solid white;
        border-radius: 7px;

        background: white;
        color: black;

        font-size: 10px;
        font-weight: 600;
    }

	.secondary-button {
        width: 72px;
        height: 32px;

        display: inline-flex;
        align-items: center;
        justify-content: center;

        padding: 0;
    }

	label {
		display: flex;
		flex-direction: column;
		gap: 5px;
	}

	label span {
		color: #777;
		font-size: 9px;
	}

	input[type='text'] {
		width: 100%;
		height: 30px;
		padding: 0 8px;

		border: 1px solid #282828;
		border-radius: 6px;

		outline: none;
		background: #151515;
		color: white;

		font: inherit;
		font-size: 10px;
	}

	input[type='text']:focus {
		border-color: #555;
	}

	input[type='file'] {
		display: none;
	}

	.upload-button {
		display: flex;
		align-items: center;
		justify-content: center;

		width: 100%;
		height: 30px;

		border: 1px solid #282828;
		border-radius: 6px;

		background: #151515;
		color: #ccc;

		font-size: 10px;
		cursor: pointer;
	}

	.upload-button:hover {
		border-color: #444;
		color: white;
	}

	.mode-row button {
		flex: 1;
		height: 30px;
	}

	.mode-row button.active {
		border-color: white;
		background: white;
		color: black;
	}

    .spotify-link {
        display: flex;
        align-items: center;
        justify-content: center;

        width: 100%;
        height: 30px;

        border: 1px solid #282828;
        border-radius: 6px;

        background: #151515;
        color: #ccc;

        font-size: 10px;
        text-decoration: none;

        transition:
            border-color 120ms ease,
            background 120ms ease,
            color 120ms ease;
    }

    .spotify-link:hover {
        border-color: #444;
        background: #191919;
        color: white;
    }

</style>