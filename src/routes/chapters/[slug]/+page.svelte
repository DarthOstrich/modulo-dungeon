<script lang="ts">
  import { fade } from 'svelte/transition';
  import Support from '../../../components/Support.svelte';
  import { activeTrackURL, activeTrackIndex, activeTrackTitle } from '../../../store/stores';
	import ChooseAudio from '../../../components/ChooseAudio.svelte';
  import Icon from 'svelte-awesome/components/Icon.svelte'
	import { faPlay } from '@fortawesome/free-solid-svg-icons';

	export let data;

  $: ({ chapter, title, img, prev, next, slug, num } = data.meta);
  $: ({ content } = data);

  function changeAudioTrack(slug: string, title: string, index: number) {
    const newTrackTitle = `${chapter} - ${title}`;
    activeTrackURL.update(src => src = slug)
    activeTrackTitle.update(src => src = newTrackTitle)
    activeTrackIndex.update(src => src = index)
  }
</script>

<svelte:head>
	<title>{chapter} - {title} | Into the Dungeon</title>
	<meta name="description" content="" />
	<meta property="og:title" content="{chapter} - {title} | Into the Dungeon" />
	<meta property="og:image" content={img} />
	<!-- <meta property="og:url" content="https://dungeon.modulo.fm/chapters/{permalink}" /> -->
	<meta name="twitter:card" content="summary" />
	<!-- <meta name="twitter:site" content="@code_nutt" /> -->
	<!-- <meta name="twitter:creator" content="@code_nutt" /> -->
	<meta name="twitter:title" content="{chapter} - {title} | Into the Dungeon" />
	<meta name="twitter:image" content={img} />
</svelte:head>

<section class="px-4 max-w-screen-xl m-auto">
	<header>
		<h2>{chapter}</h2>
		<h1>{title}</h1>
	</header>
	<aside class="">
    <figure><img src={'/' + img} alt={title} loading="lazy" /></figure>
    <!-- <button on:click={() => changeAudioSrc($slug)}>Change Audio</button> -->
    <!-- <button on:click={changeAudioSrc($slug) + ".mp3"}>Change Audio</button> -->

    <div class="flex justify-center items-center p-4">
      <button 
        class="aside__playSong flex justify-center items-center"
        on:click={() => changeAudioTrack(slug, title, num)}>
        <Icon data={faPlay} label="Play Song" class="mr-1" />
        Play Song 
      </button>
    </div>
    <div class="hidden md:block">
      <ChooseAudio />
    </div>
    <!-- {#if !isMobile} -->
    <!-- <div> -->
    <!-- </div> -->
    <div class="pt-8 hidden md:block">
      <Support />
    </div>
    <!-- {/if} -->
	</aside>
	<article class="content">
		<svelte:component this={content} />
		<section class="pagination">
			{#if !prev}
			  <a href="/chapters">Return to Chapter Select</a>
      {:else}
        <a href="/chapters/{prev}">Previous Chapter</a>
      {/if}
			{#if !next}
				<p style="text-align:right;">More Coming Soon!</p>
      {:else}
        <a href="/chapters/{next}">Next Chapter </a>
      {/if}
		</section>
	</article>
  <div class="mt-8 md:hidden">
    <ChooseAudio />
    <Support />
  </div>
</section>

<style>
  p {
    margin-bottom: 16px;
  }
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
  .aside__playSong {
    color: #ffd34f;
    transition: all 500ms ease-in-out;
  }
  .aside__playSong:hover {
    color: #806000;
    transition: all 500ms ease-in-out;
  }
	.content {
		/* max-width: 700px; */
	}
  :global(.content p) {
    margin-bottom: 16px;
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
				'Header Header Aside'
				'Content Content Aside'
				'Content Content Aside'
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
