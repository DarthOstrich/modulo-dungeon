<script context="module">
	export async function preload({ params }) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		const res = await this.fetch(`chapters/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { chapter: data };
		} else {
			this.error(res.status, data.message);
		}
	}


</script>

<script>
  import chapters from "./_chapters.js";
	import { fade } from 'svelte/transition';
  import ChooseAudio from '../../components/ChooseAudio.svelte'
  import Support from '../../components/Support.svelte'
	export let chapter;
  const chaptersFiltered = chapters.filter((chapter)=>chapter.published)
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
  h1, h2 {
    margin: 0;
  }
  :global(p) {
    margin-top: 0px;
  }
  figure {
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
        "Content Content Aside"
        ;
    }
    .content {
      /* order: 2; */
      /* flex-basis: calc(70% - 2rem); */
      /* margin-right: 2rem; */
    }
    aside{
      /* flex-basis: 30%; */
      /* order: 3; */
    }
    :global(.support) {
      grid-column: 2;
    }
  }

</style>
<svelte:head>
  <title>{chapter.chapter} - {chapter.title} | Into the Dungeon</title>
</svelte:head>

<section in:fade>
  <header>
    <h2>{chapter.chapter}</h2>
    <h1>{chapter.title}</h1>
  </header>
  <aside>
    <figure>
      <img src={chapter.img} alt={chapter.title} loading="lazy">
    </figure>
    <ChooseAudio chapter={chapter}/>
  </aside>
  <article class="content">
    {@html chapter.html}
    <section class="pagination">
      <a href="/chapters">Return to Chapter Select</a>
      {#if chapter.num < chaptersFiltered.length}
        <p style="text-align:right;">More Coming November 9th!</p>
      {:else}
        <a href={chapters[chapter.num + 1]}>link to next story</a>
      {/if} 

    </section>
  </article>
  <Support class="support"/>
</section>

