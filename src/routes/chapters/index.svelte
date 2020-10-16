<script context="module">
	export function preload() {
		return this.fetch(`chapters.json`).then(r => r.json()).then(chapters => {
			return { chapters };
		});
	}
</script>

<script>
	import { fade } from 'svelte/transition';
	/* import { audioSrc } from '../../store/stores.js'; */
  /* import ChapterList from '../../components/ChapterList.svelte' */
  /* import ChooseAudio from '../../components/ChooseAudio.svelte' */
  /* import SpotifyPlayer from '../../components/SpotifyPlayer.svelte' */
  /* import ApplePlayer from '../../components/ApplePlayer.svelte' */
  /* let audio_src; */

	/* const unsubscribe = audioSrc.subscribe(value => { */
	/* 	audio_src = value; */
	/* }); */

	export let chapters;
</script>
<style>
  img {
    max-width: 100%;
  }
  h1, h2 { text-align: center; }
  h3 { font-size: 24px; }
  a {
    text-decoration: none;
  }
  .chapter_list a {
    display: flex;
    align-items: flex-end;
  }
  .chapter_img {
    flex-basis: 33%;
  }
  .chapter_title {
    flex-basis: 66%;
    padding-left: 1rem;
  }
  .chapter_title h1, .chapter_title h2 {
    text-align: left;
    margin: 0;
  }
</style>

<svelte:head>
	<title>Chapters | Into The Dungeon</title>
</svelte:head>

<section in:fade>
  <h1>Into The Dungeon</h1>
  <p>This story follows our heroine, Marceline, as she travels to an old castle in search of ancient treasure.</p>
  <h2>Chapters</h2>

  {#each chapters as chapter}
    <article class="chapter_list">
      <a rel="prefetch" href="chapters/{chapter.slug}">
        <figure class="chapter_img">
          <img src={chapter.img} alt={chapter.title}>
        </figure>
        <header class="chapter_title">
          <h2>{chapter.chapterNum}</h2>
          <h1>{chapter.title}</h1>
        </header>
      </a>
    </article>
  {/each}
  <p>More Coming November 12th!</p>
</section>

