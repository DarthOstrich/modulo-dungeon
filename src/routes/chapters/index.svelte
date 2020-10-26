<script context="module">
	export function preload() {
		return this.fetch(`chapters.json`).then(r => r.json()).then(chapters => {
			return { chapters };
		});
	}
</script>

<script>
	import { fade } from 'svelte/transition';
  import Support from '../../components/Support.svelte';
  import Icon from 'svelte-awesome/components/Icon.svelte'
  import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

	export let chapters;
</script>
<style>
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
	<title>Chapters | Into The Dungeon</title>
  <meta name="description" content="Into the Dungeon is a Neo 8-bit story arc written by Modulo. It includes Music, Art and a written story." />
</svelte:head>

<section in:fade>
  <h1>Into The Dungeon</h1>
  <p>This story follows our heroine, Marceline, as she travels to an old castle in search of ancient treasure. You can read it with or without the audio accompaniment.</p>
  <h2>- Chapter Select - </h2>

  <ul>
  {#each chapters as {published, slug, num, title}}
    {#if published}
      <li><Icon data={faCaretRight} scale="2" class="marker" /><a rel="prefetch" href="chapters/{slug}">{num} - {title}</a></li>
    {:else}
      <li>{num} (Coming Soon)</li>
    {/if}
  {/each}
  </ul>
</section>
<Support />
