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
	import { fade } from 'svelte/transition';
  import ChooseAudio from '../../components/ChooseAudio.svelte'
  import Support from '../../components/Support.svelte'
	export let chapter;
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
    max-width: 700px;
  }
</style>
<svelte:head>
  <title>{chapter.num} - {chapter.title} | Into the Dungeon</title>
</svelte:head>

<article in:fade>
  <h2>{chapter.num}</h2>
  <h1>{chapter.title}</h1>
  <figure>
    <img src={chapter.img} alt={chapter.title} loading="lazy">
  </figure>
  <ChooseAudio chapter={chapter}/>
  <section class="content">
    {@html chapter.html}
    <section class="pagination">
      <a href="/chapters">Return to Chapter Select</a>
      <p style="text-align:right;">More Coming November 12th!</p>
    </section>
  </section>
  <Support />
</article>

