<script>
	import { page } from '$app/stores';
  import Icon from 'svelte-awesome/components/Icon.svelte'
  import { faChessRook } from '@fortawesome/free-solid-svg-icons';
  import { faInstagram, faTwitter, faYoutube, faSpotify } from '@fortawesome/free-brands-svg-icons';
</script>

<style>
  nav {
    padding: 20px 10px;
    display: flex;
    justify-content: space-between;
  }
  ul {
    margin: 0px;
    padding: 0px;
  }
  ul { list-style: none; }
  ul li {
    margin-right: 10px;
    display: inline-block;
  }
  img { width: 20px; }
	/* [aria-current] { */
	/* 	position: relative; */
	/* 	display: inline-block; */
	/* } */
  /*  */
	/* [aria-current]::after { */
	/* 	position: absolute; */
	/* 	content: ''; */
	/* 	width: calc(100% - 1em); */
	/* 	height: 2px; */
	/* 	background-color: rgb(255,62,0); */
	/* 	display: block; */
	/* 	bottom: -1px; */
	/* } */
  button {
    background: transparent;
    border: none;
    margin: 0px;
    padding: 0px;
    cursor: pointer;
  }

</style>

<nav class="p-5 max-w-screen-xl m-auto">
  <ul>
    <li aria-current={$page.url.pathname === '/' ? 'page' : undefined}>
      <a class="text-white" href="/chapters">
        <Icon data={faChessRook} label="home"/>
      </a>
    </li>
  </ul>
	<ul>
    <li><a class="text-white" href="https://www.instagram.com/modulomusic/"><Icon data={faInstagram} label="Instagram"/></a></li>
		<li><a class="text-white" href="https://www.youtube.com/channel/UCqxQspCPTcE_wH0KBE5J-aw/"><Icon data={faYoutube} label="YouTube"/></a></li>
		<!-- <li><a  href="https://twitter.com/code_nutt"><Icon data={faTwitter} label="Twitter"/></a></li> -->
		<li><a class="text-white" href="https://open.spotify.com/artist/1o6CGTMPjk1C0IdK9jV2H1"><Icon data={faSpotify} label="Spotify"/></a></li>
	</ul>
</nav>
