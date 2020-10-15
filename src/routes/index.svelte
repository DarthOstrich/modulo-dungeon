<script>
	import { fade } from 'svelte/transition';
  import ChooseAudio from '../components/ChooseAudio.svelte';
  import ChapterList from '../components/ChapterList.svelte'
  let freshLoad = false;
	import { count, audioSrc } from '../store/stores.js';


  function changeAudioSrc(value) {
    audioSrc.update(src => src = value)
  }

</script>
<style>
 :global(main) {
  }
 h1, h2 {
   text-align: center;
 }
 .start {
    margin: auto;
    display: block;
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
</style>

<svelte:head>
  <title>Modulo | Into The Dungeon</title>
</svelte:head>

<section>
  <h1>Into The Dungeon</h1>
  <a href="chapters" class="start">Press Start</a>

{#if freshLoad}
  <button on:click={()=> freshLoad = !freshLoad}>Press Start</button>
{/if}
</section>

{#if !freshLoad}
  <section in:fade>
  </section>
{/if}

