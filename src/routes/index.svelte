<script context="module">
	export function preload() {
		return this.fetch(`chapters.json`).then(r => r.json()).then(chapters => {
			return { chapters };
		});
	}
</script>
<script>
	import { fade, fly } from 'svelte/transition';
  import { flip } from 'svelte/animate';
  import ChooseAudio from '../components/ChooseAudio.svelte';
  import ChapterList from '../components/ChapterList.svelte'
	import { audioSrc, firstLoad } from '../store/stores.js';


  function changeAudioSrc(value) {
    audioSrc.update(src => src = value)
  } 
  import Icon from 'svelte-awesome/components/Icon.svelte'
  import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

	export let chapters;

</script>
<style>
 h1, h2 {
   text-align: center;
 }
  section {
    margin-top: 20vh;
    transition: all 500ms ease-in-out;
  }
  .selected {
    margin-top: 0;
    transition: all 500ms ease-in-out;
	}
  .start {
    display: block;
    margin: auto;
    text-align: center;
    background: none;
    color: #FFD34F;
    font-family: 'VT323';
    font-size: 48px;
    border: none;
    text-decoration: none;
    animation: fade-in-out 1.2s ease infinite;
 }
  @keyframes fade-in-out {
    0% {
      opacity: 100%;
    }
    50% {
      opacity: 0%;
    }
    100% {
      opacity: 100%;
    }
  }

  h1, h2 { text-align: center; }
  h2 {
    text-transform: uppercase;
  }

  a {
    text-decoration: none;
  }
  li {
    font-family: "VT323";
    font-size: 2.4rem;
    color: #636363; 
    list-style-type: none;
    position: relative;
  }
  li svg {
    display: none;
  }
  :global(.fa-icon.marker) {
    position: absolute;
    top: 2px;
    left: -15px;
    display: none;
    color: #FFD34F;
  }
  :global(ul > li:first-child  .fa-icon.marker) {
    display: block;
  }
  :global(li:hover > .fa-icon.marker) {
    display: block;
  }
</style>

<svelte:head>

  <title>Into The Dungeon | Modulo</title>
  <meta name="description" content="Into the Dungeon is a Neo 8-bit story arc written by Modulo. It includes Music, Art and a written story." />
</svelte:head>

<section class:selected="{!$firstLoad}">
  <!-- <a href="chapters/" class="start">Press Start</a> -->

  <h1>Into The Dungeon</h1>
{#if $firstLoad}
  <button on:click="{() => $firstLoad = false}" class="start">Press Start</button>
{/if}
</section>

{#if !$firstLoad}
  <p in:fade>This story follows our heroine, Marceline, as she travels to an old castle in search of ancient treasure. You can read it with or without the audio accompaniment.</p>
  <h2>- Chapter Select - </h2>
  <ul in:fade>
  {#each chapters as {published, slug, num, title}}
    {#if published}
      <li><Icon data={faCaretRight} scale="2" class="marker" /><a rel="prefetch" href="chapters/{slug}">{num} - {title}</a></li>
    {:else}
      <li>{num} (Coming Soon)</li>
    {/if}
  {/each}
  </ul>
{/if}

