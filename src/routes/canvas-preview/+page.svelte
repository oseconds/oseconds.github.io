<script lang="ts">
    import CanvasPreview from '$lib/canvas/components/CanvasPreview.svelte';
    import SourcePicker from '$lib/canvas/components/controls/SourcePicker.svelte';
</script>

<svelte:head>
    <title>Canvas Preview</title>
</svelte:head>

<div class="page">
    <header class="header">
        <h1>Canvas Preview</h1>
    </header>

    <main class="workspace">
        <section class="preview-panel">
            <CanvasPreview />
        </section>

        <aside class="library-panel">
            <div class="panel-header">
                <h2>Video Library</h2>
            </div>

            <div class="library-content">
                <SourcePicker />
            </div>
        </aside>
    </main>

    <section class="controls-panel">
        <div class="panel-header">
            <h2>Controls</h2>
        </div>

        <div class="controls-content">
            <!-- 다음 단계에서 Controls 컴포넌트들을 넣는다 -->
        </div>
    </section>
</div>

<style>
    :global(*) {
        box-sizing: border-box;
    }

    :global(html),
    :global(body) {
        margin: 0;
        min-height: 100%;
    }

    :global(body) {
        background: #0a0a0a;
        color: white;
    }

    .page {
        min-height: 100vh;
        display: grid;
        grid-template-rows: auto minmax(0, 1fr) auto;
        overflow: hidden;
    }

    .header {
        height: 56px;
        display: flex;
        align-items: center;
        padding: 0 20px;
        border-bottom: 1px solid #222;
        background: #0a0a0a;
    }

    .header h1 {
        margin: 0;
        font-size: 16px;
        font-weight: 600;
    }

    .workspace {
        min-height: 0;
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(360px, 440px);
        overflow: hidden;
    }

    .preview-panel {
        min-width: 0;
        min-height: 0;
        display: grid;
        place-items: center;
        padding: 24px;
        overflow: hidden;
        border-right: 1px solid #222;
    }

    .library-panel {
        min-width: 0;
        min-height: 0;
        display: flex;
        flex-direction: column;
        background: #0d0d0d;
    }

    .panel-header {
        flex: 0 0 auto;
        height: 48px;
        display: flex;
        align-items: center;
        padding: 0 16px;
        border-bottom: 1px solid #222;
    }

    .panel-header h2 {
        margin: 0;
        font-size: 13px;
        font-weight: 600;
    }

    .library-content {
        min-height: 0;
        overflow-y: auto;
        padding: 16px;
    }

    .controls-panel {
        min-height: 160px;
        border-top: 1px solid #222;
        background: #0d0d0d;
    }

    .controls-content {
        padding: 16px 20px;
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