<script lang="ts">
	let { children } = $props();
</script>

<header class="portfolio-header">
	<nav aria-label="Portfolio navigation">
		<a class="home-link" href="/">0seconds</a>
		<div class="section-links">
			<a href="/work">Work</a>
			<a href="/archive">Archive</a>
			<a href="/live">Live</a>
			<a href="/info">Info</a>
		</div>
	</nav>
</header>

{@render children()}

<style>
	.portfolio-header {
		width: min(100% - 48px, 1440px);
		margin-inline: auto;
		padding-block: 16px;
		color: #171715;
		font: 1rem/1.4 system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
	}

	.portfolio-header nav {
		display: flex;
		flex-wrap: wrap;
		align-items: center;
		justify-content: space-between;
		gap: 12px 24px;
	}

	.portfolio-header a {
		color: inherit;
		text-decoration: none;
	}

	.portfolio-header a:hover {
		text-decoration: underline;
	}

	.portfolio-header a:focus-visible {
		outline: 2px solid currentColor;
		outline-offset: 4px;
	}

	.home-link {
		flex-shrink: 0;
		font-weight: 600;
	}

	.section-links {
		display: flex;
		flex-wrap: wrap;
		column-gap: clamp(12px, 2vw, 24px);
		row-gap: 8px;
	}

	@media (max-width: 700px) {
		.portfolio-header {
			width: min(100% - 32px, 1440px);
		}

		.portfolio-header nav {
			justify-content: flex-start;
		}
	}
</style>
