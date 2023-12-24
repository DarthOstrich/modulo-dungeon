<script>
  import Icon from 'svelte-awesome/components/Icon.svelte'
  import { faSpotify, faApple, faDeezer } from '@fortawesome/free-brands-svg-icons';


  function changeAudioSrc(value) {
    audioSrc.update(src => src = value)
  }
</script>

<section>
  <h2>Stream Audio</h2>
  <ul>
    <li><a href="https://modulo.fanlink.to/traveler"><Icon data={faSpotify} label="Spotify" scale=3 /></a></li>
    <li><a href="https://modulo.fanlink.to/traveler"><Icon data={faApple} label="Spotify" scale=3 /></a></li>
    <li><a href="https://modulo.fanlink.to/traveler"><Icon data={faDeezer} label="Spotify" scale=3 /></a></li>
  </ul>
</section>

<style>
  section {
    margin: 2rem auto;
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
