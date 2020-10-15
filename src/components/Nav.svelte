<script>
  import Icon from 'svelte-awesome/components/Icon.svelte'
  import { faChessRook } from '@fortawesome/free-solid-svg-icons';
  import { faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
	export let segment;
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

<nav>
  <a aria-current="{segment === undefined ? 'page' : undefined}" href="/chapters"><Icon data={faChessRook} label="home"/></a>
	<ul>
		<li></li>
    <li><a  href="https://www.instagram.com/modulomusic/"><Icon data={faInstagram} label="Instagram"/></a></li>
		<li><a  href="https://www.youtube.com/channel/UCqxQspCPTcE_wH0KBE5J-aw/"><Icon data={faYoutube} label="YouTube"/></a></li>
		<li><a  href="https://twitter.com/code_nutt"><Icon data={faTwitter} label="Twitter"/></a></li>
    <!-- <li><button><img src="cog-yellow.svg" alt="settings"></button></li> -->

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<!-- <li><a rel=prefetch aria&#45;current="{segment === 'blog' ? 'page' : undefined}" href="blog">blog</a></li> -->
	</ul>
</nav>
