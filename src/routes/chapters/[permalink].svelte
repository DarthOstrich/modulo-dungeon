<script context="module">
  // import the logic for finding a post based on permalink
  import { findChapter, findNextChapter } from "../../chapters";

  // sapper calls this to load our data
  export function preload(page) {
    // find the post based on the permalink param
    const chapter = findChapter(page.params.permalink);

    // return a list of props
    return { chapter };
  }
</script>

<script>
  import { chapters } from "../../chapters.js";
  import { fade } from "svelte/transition";
  import ChooseAudio from "../../components/ChooseAudio.svelte";
  import Support from "../../components/Support.svelte";
  export let chapter;
  let isMobile;
  const nextChapter = findNextChapter(chapter.num + 1);
  const handleResize = () => {
    if (typeof window !== "undefined") {
      if (window.matchMedia("(max-width: 768px)").matches) {
        isMobile = true;
      } else {
        isMobile = false;
      }
    }
  };
  handleResize();
</script>

<style>
  /*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
  .support h2 {
    text-align: center;
  }

  img {
    max-width: 100%;
  }
  .pagination {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .pagination p {
    color: #636363;
  }
  .content {
    /* max-width: 700px; */
  }
  section {
    /* display: flex; */
    /* flex-direction: column; */
  }
  header {
    flex-basis: 100%;
    order: 1;
    grid-area: Header;
  }
  h1,
  h2 {
    margin: 0;
  }
  /* :global(p) { */
  /*   margin-top: 0px; */
  /* } */
  figure {
    text-align: center;
    grid-area: Image;
  }
  .content {
    grid-area: Content;
  }
  aside {
    grid-area: Aside;
    order: 2;
  }
  .content {
    order: 3;
  }

  @media (min-width: 768px) {
    section {
      /* display: flex; */
      /* flex-wrap: wrap; */
      /* justify-content: space-between; */
      /* flex-direction: row; */
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr;
      gap: 10px 10px;
      grid-template-areas:
        "Header Header Aside"
        "Content Content Aside"
        "Content Content Aside";
    }
    .content {
      /* order: 2; */
      /* flex-basis: calc(70% - 2rem); */
      /* margin-right: 2rem; */
    }
    aside {
      /* flex-basis: 30%; */
      /* order: 3; */
    }
    :global(.support) {
      grid-column: 2;
    }
  }
</style>

<svelte:window on:resize={handleResize} />

<svelte:head>
  <title>{chapter.chapter} - {chapter.title} | Into the Dungeon</title>
  <meta name="description" content="" />
  <meta property="og:title" content="{chapter.chapter} - {chapter.title} | Into the Dungeon" />
  <meta property="og:image" content={chapter.img} />
  <meta property="og:url" content="https://dungeon.modulo.fm/chapters/{chapter.permalink}" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@code_nutt" />
  <meta name="twitter:creator" content="@code_nutt" />
  <meta name="twitter:title" content="{chapter.chapter} - {chapter.title} | Into the Dungeon" />
  <meta name="twitter:image" content={chapter.img} />
</svelte:head>

<section in:fade>
  <header>
    <h2>{chapter.chapter}</h2>
    <h1>{chapter.title}</h1>
  </header>
  <aside>
    <figure><img src={chapter.img} alt={chapter.title} loading="lazy" /></figure>
    <ChooseAudio {chapter} />
    {#if !isMobile}
      <Support class="support" />
    {/if}
  </aside>
  <article class="content">
    {@html chapter.html}
    <section class="pagination">
      <a href="/chapters">Return to Chapter Select</a>
      {#if !nextChapter}
        <p style="text-align:right;">More Coming Soon!</p>
      {:else if !nextChapter.published}
        <p style="text-align:right;">More Coming Soon!</p>
      {:else}<a href="chapters/{nextChapter.permalink}">Next Chapter - {nextChapter.title}</a>{/if}
    </section>
  </article>
  {#if isMobile}
    <Support class="support" />
  {/if}
</section>
