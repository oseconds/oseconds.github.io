<script lang="ts">
	import CanvasPreview from '$lib/canvas/components/CanvasPreview.svelte';
	import SourcePicker from '$lib/canvas/components/controls/SourcePicker.svelte';
	import Controls from '$lib/canvas/components/controls/Controls.svelte';

	let togglePreviewPlayback = $state<() => void>(() => {});
</script>

<div class="page">
	<header class="header">
		<h1>Canvas Preview</h1>
	</header>

	<main class="workspace">
		<aside class="library-panel">
			<div class="panel-header">
				<h2>Video Library</h2>
			</div>

			<div class="library-content">
				<SourcePicker />
			</div>
		</aside>

		<section class="preview-panel">
            <CanvasPreview
                onRegisterPlayback={(callback) => {
                    togglePreviewPlayback = callback;
                }}
            />
        </section>

		<aside class="controls-panel">
            <div class="panel-header">
                <h2>Controls</h2>
            </div>

            <div class="controls-content">
                <Controls
                    onTogglePlayback={togglePreviewPlayback}
                />
            </div>
        </aside>
	</main>
</div>

<style>
    :global(*) {
        box-sizing: border-box;
    }

    :global(html),
    :global(body) {
        margin: 0;
        width: 100%;
        height: 100%;
    }

    :global(body) {
        overflow: hidden;
        background: #0a0a0a;
        color: white;
    }

    .page {
        width: 100%;
        height: 100dvh;

        display: grid;
        grid-template-rows: 48px minmax(0, 1fr);

        overflow: hidden;
    }

    .header {
        height: 48px;

        display: flex;
        align-items: center;

        padding: 0 16px;

        border-bottom: 1px solid #222;
    }

    .header h1 {
        margin: 0;
        font-size: 13px;
        font-weight: 600;
    }

    .workspace {
        min-width: 0;
        min-height: 0;

        display: grid;
        grid-template-columns:
            minmax(300px, 340px)
            minmax(0, 1fr)
            minmax(300px, 340px);

        overflow: hidden;
    }

    .library-panel,
    .controls-panel {
        min-width: 0;
        min-height: 0;

        display: flex;
        flex-direction: column;

        background: #0d0d0d;
        overflow: hidden;
    }

    .library-panel {
        border-right: 1px solid #222;
    }

    .controls-panel {
        border-left: 1px solid #222;
    }

    .preview-panel {
        min-width: 0;
        min-height: 0;

        display: grid;
        place-items: center;

        padding: 16px;

        overflow: hidden;
    }

    .preview-panel :global(.preview) {
        width: auto;
        height: min(100%, calc(100dvh - 48px - 32px));
        aspect-ratio: 9 / 16;
    }

    .panel-header {
        flex: 0 0 42px;

        display: flex;
        align-items: center;

        padding: 0 12px;

        border-bottom: 1px solid #222;
    }

    .panel-header h2 {
        margin: 0;

        font-size: 11px;
        font-weight: 600;
    }

    .library-content,
    .controls-content {
        min-height: 0;
        flex: 1;
        overflow-y: auto;
        overflow-x: hidden;
    }

    .library-content {
        padding: 10px;
    }

    .controls-content {
        padding: 12px;
    }

    @media (max-width: 800px) {
        .page {
            overflow: auto;
        }

        .workspace {
            grid-template-columns: 1fr;
            overflow: visible;
        }

        .preview-panel {
            min-height: 70vh;
            border-right: 0;
            border-bottom: 1px solid #222;
        }

        .library-panel {
            min-height: 320px;
        }

        .controls-panel {
            min-height: 240px;
        }
    }
</style>