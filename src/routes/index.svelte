<script>
  import { fade } from "svelte/transition";
  import { firstLoad } from "../store/stores.js";
</script>

<style>
  h1,
  h2 {
    text-align: center;
  }
  section {
    margin-top: 20vh;
    transition: all 500ms ease-in-out;
  }
  .selected {
    /* margin-top: 0; */
    transition: all 500ms ease-in-out;
  }
  .start {
    display: block;
    margin: auto;
    text-align: center;
    background: none;
    color: #ffd34f;
    font-family: "VT323";
    font-size: 48px;
    border: none;
    text-decoration: none;
    animation: fade-in-out 1.2s ease infinite;
  }
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
    color: #ffd34f;
  }
  :global(ul > li:first-child .fa-icon.marker) {
    display: block;
  }
  :global(li:hover > .fa-icon.marker) {
    display: block;
  }
</style>

<svelte:head>
  <title>Into The Dungeon | Modulo</title>
  <meta name="description" content="Into the Dungeon is a Neo 8-bit story arc written by Modulo. It includes Music, Art and a written story." />
  <meta property="og:title" content="Into The Dungeon by Modulo" />
  <meta property="og:description" content="Into the Dungeon is a Neo 8-bit story arc written by Modulo. It includes Music, Art and a written story." />
  <meta property="og:image" content="dungeon-socials.jpg" />
  <meta property="og:url" content="https://dungeon.modulo.fm" />
  <meta name="twitter:card" content="summary" />
  <meta name="twitter:site" content="@code_nutt" />
  <meta name="twitter:creator" content="@code_nutt" />
  <meta name="twitter:title" content="Into The Dungeon by Modulo" />
  <meta name="twitter:description" content="Into the Dungeon is a Neo 8-bit story arc written by Modulo. It includes Music, Art and a written story." />
  <meta name="twitter:image" content="dungeon-socials.jpg" />
</svelte:head>

<section class:selected={!$firstLoad}>
  <h1>Into The Dungeon</h1>
  <a href="chapters/" class="start">Press Start</a>
</section>

{#if !$firstLoad}
  <p in:fade>This story follows our heroine, Marceline, as she travels to an old castle in search of ancient treasure. You can read it with or without the audio accompaniment.</p>
{/if}
