<script context="module">
	/**
	 * @type {import('@sveltejs/kit').Load}
	 */
	export async function load({fetch}) {
    const url = `/chapters/chapters.json`;
    const res = await fetch(url);

    if (res.ok) {
      const data = await res.json();
      return {
        props: {
          chapters: data.chapters
        }
      };
    }

    return {
      status: res.status,
      error: new Error(`Could not load ${url}`)
    };
	}
</script>

<script>
	import { fade } from 'svelte/transition';
	import Support from '../../components/Support.svelte';
	import Icon from 'svelte-awesome/components/Icon.svelte';
	import { faCaretRight } from '@fortawesome/free-solid-svg-icons';

	export let chapters;

	function formatDate(date) {
		let newDate = new Date(date);
		newDate.setDate(newDate.getDate() + 1);
		let formattedDate = newDate.toLocaleDateString('en-US', {
			year: 'numeric',
			month: 'long',
			day: 'numeric'
		});
		return formattedDate;
	}
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

<section in:fade|global>
	<article>
		<h1>Into The Dungeon</h1>
		<p>
			This story follows our heroine, Marceline, as she travels to an old castle in search of
			ancient treasure. You can read it with or without the audio accompaniment.
		</p>
	</article>
	<h2>- Chapter Select -</h2>

	{#if chapters}
		<ul>
			{#each chapters as { published, slug, chapter, title, date }}
				{#if published}
					<li>
						<a rel="prefetch" href="chapters/{slug}">{chapter} - {title}</a>
						<Icon data={faCaretRight} scale="2" class="marker" />
					</li>
				{:else}
					<li>{chapter} (Coming {formatDate(date)})</li>
				{/if}
			{/each}
		</ul>
	{:else}
    <p>Nothing to show...</p>
	{/if}
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
		font-size: 2.4rem;
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
</style>
