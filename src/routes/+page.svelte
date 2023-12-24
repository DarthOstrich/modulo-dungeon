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

<section>
  <h1 class="text-center">Into The Dungeon</h1>
  <a href="chapters/" class="start">Press Start</a>
</section>

<style lang="postcss">
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
