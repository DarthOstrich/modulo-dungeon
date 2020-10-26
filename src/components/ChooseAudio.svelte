<script>
  export let chapter;
  import { audioSrc } from '../store/stores.js';
  import Icon from 'svelte-awesome/components/Icon.svelte'
  import { faSpotify, faApple, faDeezer } from '@fortawesome/free-brands-svg-icons';
  import PlayerSpotify from './PlayerSpotify.svelte'
  import PlayerApple from './PlayerApple.svelte'
  import PlayerDeezer from './PlayerDeezer.svelte'


  function changeAudioSrc(value) {
    audioSrc.update(src => src = value)
  }
</script>

<style>
  section {
    border: 5px solid #e5e5e5;
    border-radius: 15px;
    padding: 1rem;
    position: relative;
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    max-width: 600px;

  }
  h2 {
    margin: -3rem 0 1rem 0;
    padding: 0 0.5rem;
    text-transform: uppercase;
    align-self: center;
    text-align: center;
    background: #2D2D2D;
  }
  p {
    margin-top: 0px;
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px;
    margin: 0px;

  }
  li a:hover { color: #FFD34F; }
  ul li {
    margin: 0px 10px;
  }
  aside { 
    display: flex;
    align-items: center;
  }
  button {
    margin: auto;
    background: none;
    color: #FFD34F;
    border: none;
  }
</style>
<section>
  <h2>Choose Audio Source</h2>
  {#if $audioSrc === "spotify"}
    <aside>
      <PlayerSpotify trackID={chapter.spotifyID}/>
      <button on:click="{()=> $audioSrc = 'none'}">Change Audio</button>
    </aside>
  {:else if $audioSrc === "apple"}
    <aside>
      <PlayerApple trackID={chapter.appleID}/>
      <button on:click="{()=> $audioSrc = 'none'}">Change Audio</button>
    </aside>
  {:else if $audioSrc === "deezer"}
    <PlayerDeezer trackID={chapter.deezerID} />
  {:else}
    <ul>
      <li on:click="{() => $audioSrc = 'spotify'}"><Icon data={faSpotify} label="Spotify" scale="3" /></li> 
      <li on:click="{() => $audioSrc = 'apple'}"><Icon data={faApple} label="Apple Music"  scale="3"/></li> 
        <!-- <li on:click="{() => $audioSrc= 'deezer'}"><Icon data={faDeezer} label="Deezer Music"  scale="3"/></li> -->
    </ul>
  {/if}
</section>

