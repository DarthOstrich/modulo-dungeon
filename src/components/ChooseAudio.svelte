<script>
	import { count, audioSrc } from '../store/stores.js';
  import Icon from 'svelte-awesome/components/Icon.svelte'
  import { faSpotify, faApple, faDeezer } from '@fortawesome/free-brands-svg-icons';


  function changeAudioSrc(value) {
    audioSrc.update(src => src = value)
  }
</script>

<style>

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px;

  }
  li a:hover { color: #FFD34F; }
  ul li {
    margin: 0px 10px;
  }
</style>

<ul>
  <li on:click="{() => $audioSrc= 'spotify'}"><Icon data={faSpotify} label="Spotify" scale="3" /></li> 
  <li on:click="{() => $audioSrc= 'apple'}"><Icon data={faApple} label="Apple Music"  scale="3"/></li> 
  <li on:click="{() => $audioSrc= 'deezer'}"><Icon data={faDeezer} label="Deezer Music"  scale="3"/></li> 
</ul>
