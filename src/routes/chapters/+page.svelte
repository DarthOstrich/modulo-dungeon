<script>
import { fade } from 'svelte/transition';
import Support from '../../components/Support.svelte';
import { faCaretRight } from '@fortawesome/free-solid-svg-icons';
import Icon from 'svelte-awesome/components/Icon.svelte';

export let data;
</script>

<svelte:head>
	<title>Chapters | Into the Dungeon | Modulo</title>
	<meta
		name="description"
		content="Into the Dungeon is a Neo 8-bit story arc written by Modulo. It includes Music, Art and a written story."
	/>
	<meta property="og:title" content="Into The Dungeon by Modulo" />
	<meta
		property="og:description"
		content="Into the Dungeon is a Neo 8-bit story arc written by Modulo. It includes Music, Art and a written story."
	/>
	<meta property="og:image" content="dungeon-socials.jpg" />
	<meta property="og:url" content="https://dungeon.modulo.fm" />
	<meta name="twitter:card" content="summary" />
	<meta name="twitter:site" content="@code_nutt" />
	<meta name="twitter:creator" content="@code_nutt" />
	<meta name="twitter:title" content="Into The Dungeon by Modulo" />
	<meta
		name="twitter:description"
		content="Into the Dungeon is a Neo 8-bit story arc written by Modulo. It includes Music, Art and a written story."
	/>
	<meta name="twitter:image" content="dungeon-socials.jpg" />
</svelte:head>

<section in:fade class="px-2">
	<article>
		<h1>Into The Dungeon</h1>
    <figure class="intro flex items-center flex-col md:flex-row">
      <img class="intro__marceline" src="/03_ToBattle_marceline.png" alt="Marceline">
      <figcaption>
      This story follows our heroine, Marceline, as she travels to an old castle in search of
      ancient treasure. You can read it with or without the audio accompaniment.
      </figcaption>
    </figure>
	</article>
	<h2>- Chapter Select -</h2>

<section>
	<ul class="chapters">
		{#each data.chapters as chapter}
			<li class="chapter text-2xl">
				<a href={'chapters/' + chapter.slug} class="title">{chapter.chapter} - {chapter.title}</a>
			</li>
		{/each}
	</ul>
</section>

	<Support />
</section>

<style>
	h1,
	h2 {
		text-align: center;
	}

	h2 {
		text-transform: uppercase;
	}

	a {
		text-decoration: none;
	}

	section {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	ul {
		padding: 0px 20px;
		margin-bottom: 40px;
	}

	li {
		font-family: 'VT323';
		color: #636363;
		list-style-type: none;
		position: relative;
	}

	li a:hover {
		animation: fade-in-out 1.2s ease infinite;
	}

	li a:focus {
		animation: fade-in-out 1.2s ease infinite;
	}

	li svg {
		display: none;
	}
	:global(.fa-icon.marker) {
		position: absolute;
		top: 2px;
		left: -15px;
		display: none;
		color: #ffd34f;
	}
	/* :global(ul > li:first-child  .fa-icon.marker) { */
	/*   display: block; */
	/* } */
	:global(a:hover + .fa-icon.marker) {
		display: block;
	}
	:global(a:focus + .fa-icon.marker) {
		display: block;
	}
	article {
		max-width: 700px;
	}

  .intro__marceline {
    max-width: 100px;
  }
</style>
