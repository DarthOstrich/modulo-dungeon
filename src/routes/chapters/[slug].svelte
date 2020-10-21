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
	import { audioSrc } from '../../store/stores.js';
  import ChooseAudio from '../../components/ChooseAudio.svelte'
  import PlayerSpotify from '../../components/PlayerSpotify.svelte'
  import PlayerApple from '../../components/PlayerApple.svelte'
  import PlayerDeezer from '../../components/PlayerDeezer.svelte'
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
	.content :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
	}

	.content :global(pre) {
		background-color: #f9f9f9;
		box-shadow: inset 1px 1px 5px rgba(0, 0, 0, 0.05);
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
	}

	.content :global(pre) :global(code) {
		background-color: transparent;
		padding: 0;
	}

	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
	}
  img {
    max-width: 100%;
  }
</style>
<svelte:head>
  <title>{chapter.chapterNum} - {chapter.title} | Into the Dungeon</title>
</svelte:head>

<section in:fade>
  <h1>{chapter.chapterNum}</h1>
  <img src={chapter.img} alt={chapter.title} loading="lazy">

  {#if $audioSrc === "spotify"}
    <PlayerSpotify trackID={chapter.spotifyID}/>
  {:else if $audioSrc === "apple"}
    <PlayerApple trackID={chapter.appleID}/>
  {:else if $audioSrc === "deezer"}
    <PlayerDeezer trackID={chapter.deezerID} />
  {:else}
    <h2>Choose Audio Source</h2>
    <ChooseAudio />
  {/if}
</section>

<section class="content">
	{@html chapter.html}
</section>
<section class="pagination">
  <p style="text-align:right;">More Coming November 12th!</p>
</section>
<section class="support">
  <h2>Support This Project</h2>
  <p>There’s a number of ways you can support this project. You can <a href="https://modulo.fanlink.to/traveler">stream or buy the music</a> on any of the major platforms.</p>
  <p>You can also <a href="https://ko-fi.com/modulo">buy me a cup of coffee.</a></p>
</section>
