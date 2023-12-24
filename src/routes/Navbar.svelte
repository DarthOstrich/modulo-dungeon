<script>
  import Icon from 'svelte-awesome/components/Icon.svelte'
  import { faChessRook } from '@fortawesome/free-solid-svg-icons';
  import { faInstagram, faTwitter, faYoutube, faSpotify } from '@fortawesome/free-brands-svg-icons';
</script>

<nav class="flex justify-between p-5 max-w-screen-xl m-auto">
  <ul>
    <li class="mr-2.5">
      <a class="text-white" href="/chapters">
        <Icon data={faChessRook} label="home"/>
      </a>
    </li>
  </ul>
	<ul>
    <li class="inline-block mr-2.5"><a class="text-white" href="https://www.instagram.com/modulomusic/"><Icon data={faInstagram} label="Instagram"/></a></li>
		<li class="inline-block mr-2.5"><a class="text-white" href="https://www.youtube.com/channel/UCqxQspCPTcE_wH0KBE5J-aw/"><Icon data={faYoutube} label="YouTube"/></a></li>
		<!-- <li><a  href="https://twitter.com/code_nutt"><Icon data={faTwitter} label="Twitter"/></a></li> -->
		<li class="inline-block mr-2.5"><a class="text-white" href="https://open.spotify.com/artist/1o6CGTMPjk1C0IdK9jV2H1"><Icon data={faSpotify} label="Spotify"/></a></li>
	</ul>
</nav>
