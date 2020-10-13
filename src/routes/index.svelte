<script>
  let freshLoad = true;
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
 button {
  margin: auto;
    display: block;
    background: none;
    color: #FFD34F;
    font-family: 'VT323';
    font-size: 48px;
    border: none;
    cursor: pointer;
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

  {#if freshLoad}
  <button on:click={()=> freshLoad = !freshLoad}>Press Start</button>
  {/if}

  {#if !freshLoad}

  <p>This story follows our heroine, Marceline, as she travels to an old castle in search of ancient treasure.</p>

  <h2>Choose your Audio Source</h2>
  <ul>
    <li><a href="chapters" on:click="{() => $audioSrc= 'spotify'}">Spotify</a></li> 
    <li><a href="chapters" on:click="{() => $audioSrc= 'apple'}">Apple Music</a></li> 
    <li><a href="chapters" on:click={() => changeAudioSrc("none")}>None</a></li> 
  </ul>
  <p>Note: If you don’t have either of those services, the music is also available here:</p>
  <ul>
    <li><a href="https://music.amazon.com/artists/B0032DSEJQ/modulo">Amazon Music</a></li>
    <li><a href="https://modulous.bandcamp.com/">Bandcamp</a></li>
    <li><a href="https://www.deezer.com/us/artist/1289645">Deezer</a></li>
    <li><a href="https://us.napster.com/artist/modulo">Napster</a></li>
  </ul>
  <p></p>
  {/if}
</section>

