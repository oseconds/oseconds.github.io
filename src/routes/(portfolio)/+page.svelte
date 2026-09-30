<svelte:head>
    <title>0seconds — New Media Artist</title>

    <meta
        name="description"
        content="0seconds — new media artist working across visuals, sound, AI, and interactive systems."
    />

    <link rel="canonical" href="https://oseconds.github.io/" />

    <meta property="og:title" content="0seconds — New Media Artist" />

    <meta
        property="og:description"
        content="0seconds — new media artist working across visuals, sound, AI, and interactive systems."
    />
    
    <meta property="og:url" content="https://oseconds.github.io/" />
    <meta property="og:type" content="website" />
</svelte:head>

<main class="home-page">
    <header class="introduction">
        <div class="identity">
            <h1>0seconds</h1>
            <p class="discipline">Audiovisual Artist / Creative Technologist</p>
        </div>
        <p class="introduction-copy">
            Working across visuals, sound, realtime systems, generative
            processes, and interactive media.
        </p>
    </header>

    <section class="selected-work" aria-labelledby="selected-work-title">
        <div class="section-heading">
            <h2 id="selected-work-title">Selected work</h2>
            <a href="/work">All work <span aria-hidden="true">↗</span></a>
        </div>

        <div class="work-sequence">
            <article class="work-entry work-entry--void">
                <a
                    class="entry-media void-media"
                    href="/work/void-a"
                    aria-label="Explore VOID-a"
                >
                    <img
                        src="/media/portfolio/void-a/void-a-primary-poster.jpg"
                        alt="VOID-a installation with an eye-like form across two displays"
                        width="720"
                        height="900"
                    />
                </a>
                <div class="entry-details">
                    <p class="entry-index">01 / Installation</p>
                    <div class="entry-heading">
                        <h3>VOID-a</h3>
                        <time datetime="2023">2023</time>
                    </div>
                    <p class="entry-type">
                        Interactive Installation / Realtime Visuals /
                        Directional Sound
                    </p>
                    <a class="project-link" href="/work/void-a"
                        >Explore VOID-a <span aria-hidden="true">↗</span></a
                    >
                </div>
            </article>

            <article class="work-entry work-entry--gaze">
                <a
                    class="entry-media gaze-media"
                    href="/work/if-you-gaze"
                    aria-label="Explore If you gaze"
                >
                    <img
                        src="/media/portfolio/if-you-gaze/496626927_3520912781377923_7866999277964543427_n.jpg"
                        alt="Horned bull-like form framing a raised arm in the If you gaze Reel cover"
                        width="480"
                        height="384"
                        loading="lazy"
                    />
                </a>
                <div class="entry-details">
                    <p class="entry-index">02 / Video</p>
                    <div class="entry-heading">
                        <h3>If you gaze</h3>
                        <time datetime="2022">2022</time>
                    </div>
                    <p class="entry-type">Video / Generative Imagery / Sound</p>
                    <a class="project-link" href="/work/if-you-gaze"
                        >Explore the work <span aria-hidden="true">↗</span></a
                    >
                </div>
            </article>

            <article class="work-entry work-entry--robot">
                <a
                    class="entry-media robot-media"
                    href="/work/robot-painting-system"
                    aria-label="Explore Robot Painting System"
                >
                    <img
                        src="/media/portfolio/robot-painting-system/image16.jpg"
                        alt="Paint-covered robotic arm beside its wired mechanism, ball, and painted surface"
                        width="2048"
                        height="1536"
                        loading="lazy"
                    />
                </a>
                <div class="entry-details robot-details">
                    <p class="entry-index">03 / Physical computing</p>
                    <div class="entry-heading">
                        <h3>Robot Painting System</h3>
                        <time datetime="2022">2022</time>
                    </div>
                    <p class="entry-type">
                        Robotic Painting / Physical Computing
                    </p>
                    <p class="entry-context">
                        A robotic arm moves a paint-covered ball across a
                        rotating canvas, turning mechanical motion into a
                        physical painting.
                    </p>
                    <a class="project-link" href="/work/robot-painting-system"
                        >Explore the work <span aria-hidden="true">↗</span></a
                    >
                </div>
            </article>
        </div>
    </section>
</main>

<style>
    .home-page {
        --page-muted: #686761;
        width: min(100% - 48px, 1440px);
        margin-inline: auto;
        padding: clamp(40px, 7vw, 100px) 0 120px;
        color: #171715;
    }

    .introduction {
        display: grid;
        grid-template-columns: minmax(0, 1fr) minmax(280px, 500px);
        gap: clamp(28px, 6vw, 88px);
        align-items: end;
    }

    .identity h1 {
        margin: 0;
        font-size: clamp(64px, 12vw, 156px);
        font-weight: 400;
        letter-spacing: -0.085em;
        line-height: 0.88;
    }

    .discipline {
        margin: 20px 0 0;
        font-size: clamp(14px, 1.35vw, 18px);
        line-height: 1.45;
    }

    .introduction-copy {
        max-width: 48ch;
        margin: 0 0 2px;
        font-size: clamp(16px, 1.5vw, 19px);
        line-height: 1.65;
    }

    .selected-work {
        margin-top: clamp(88px, 13vw, 176px);
    }

    .section-heading {
        display: flex;
        justify-content: space-between;
        align-items: baseline;
        gap: 24px;
        margin-bottom: clamp(36px, 5vw, 64px);
    }

    .section-heading h2 {
        margin: 0;
        font-size: clamp(21px, 2.2vw, 30px);
        font-weight: 400;
        letter-spacing: -0.035em;
    }

    .section-heading a,
    .project-link {
        color: inherit;
        font-size: 14px;
        text-underline-offset: 4px;
    }

    .section-heading a:focus-visible,
    .project-link:focus-visible,
    .entry-media:focus-visible {
        outline: 2px solid currentColor;
        outline-offset: 5px;
    }

    .work-sequence {
        display: grid;
        gap: clamp(112px, 16vw, 232px);
    }

    .work-entry {
        display: grid;
        align-items: center;
        min-width: 0;
        gap: clamp(24px, 7vw, 104px);
    }

    .entry-media,
    .gaze-media {
        display: block;
        min-width: 0;
        margin: 0;
    }

    .entry-media img {
        display: block;
        width: 100%;
        height: auto;
    }

    .entry-details {
        min-width: 0;
    }

    .entry-index {
        margin: 0 0 clamp(24px, 3vw, 44px);
        color: var(--page-muted);
        font-size: 12px;
        letter-spacing: 0.06em;
        text-transform: uppercase;
    }

    .entry-heading {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 10px;
    }

    .entry-heading h3 {
        min-width: 0;
        margin: 0;
        font-size: clamp(32px, 4.5vw, 68px);
        font-weight: 400;
        letter-spacing: -0.06em;
        line-height: 1.03;
    }

    .entry-heading time {
        flex-shrink: 0;
        color: var(--page-muted);
        font-size: 13px;
    }

    .entry-type {
        margin: 18px 0 0;
        color: var(--page-muted);
        font-size: 15px;
        line-height: 1.55;
    }

    .entry-context {
        max-width: 39ch;
        margin: 14px 0 0;
        font-size: 16px;
        line-height: 1.5;
    }

    .project-link {
        display: inline-block;
        margin-top: 26px;
    }

    .work-entry--void {
        grid-template-columns: minmax(0, 1fr) minmax(250px, 0.8fr);
    }

    .void-media {
        width: min(100%, 680px);
    }

    .work-entry--robot {
        grid-template-columns: minmax(0, 1.22fr) minmax(250px, 0.78fr);
    }

    .robot-media {
        width: min(100%, 720px);
        justify-self: start;
    }

    .robot-details {
        padding-bottom: clamp(0px, 4vw, 60px);
    }

    .robot-details h3 {
        max-width: 12ch;
        font-size: clamp(42px, 5.7vw, 88px);
    }

    .work-entry--gaze {
        grid-template-columns: minmax(250px, 0.95fr) minmax(0, 1.05fr);
    }

    .gaze-media {
        grid-column: 2;
        grid-row: 1;
        width: min(100%, 560px);
        justify-self: end;
    }

    .work-entry--gaze .entry-details {
        grid-column: 1;
        grid-row: 1;
    }

    .work-entry--gaze h3 {
        font-size: clamp(42px, 6.3vw, 92px);
    }

    @media (max-width: 800px) {
        .home-page {
            width: min(100% - 32px, 1440px);
            padding-top: 44px;
        }

        .introduction {
            grid-template-columns: minmax(0, 1fr);
            gap: 26px;
        }

        .identity h1 {
            font-size: clamp(64px, 18vw, 110px);
        }

        .introduction-copy {
            max-width: 52ch;
        }

        .selected-work {
            margin-top: 92px;
        }

        .work-sequence {
            gap: clamp(92px, 16vw, 144px);
        }

        .work-entry,
        .work-entry--void,
        .work-entry--robot,
        .work-entry--gaze {
            grid-template-columns: minmax(0, 1fr);
            gap: 25px;
        }

        .gaze-media,
        .work-entry--gaze .entry-details {
            grid-column: auto;
            grid-row: auto;
        }

        .robot-media {
            justify-self: start;
            width: min(86%, 580px);
        }

        .robot-details {
            padding-bottom: 0;
        }

        .void-media {
            width: min(80%, 500px);
        }

        .gaze-media {
            width: min(92%, 560px);
            justify-self: end;
        }

        .entry-index {
            margin-bottom: 15px;
        }
    }

    @media (max-width: 480px) {
        .identity h1 {
            font-size: clamp(60px, 18vw, 82px);
        }

        .section-heading {
            align-items: center;
        }

        .work-entry--void .entry-heading h3 {
            font-size: 43px;
        }

        .robot-details h3 {
            font-size: clamp(42px, 12vw, 62px);
        }

        .work-entry--gaze h3 {
            font-size: clamp(42px, 12vw, 62px);
        }

        .void-media {
            width: 86%;
        }

        .robot-media {
            width: 86%;
        }

        .gaze-media {
            width: 92%;
        }
    }
</style>
