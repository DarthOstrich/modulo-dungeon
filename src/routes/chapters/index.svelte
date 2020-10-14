<script>
	import { fade } from 'svelte/transition';
	import { audioSrc } from '../../store/stores.js';
  import ChooseAudio from '../../components/ChooseAudio.svelte'
  import SpotifyPlayer from '../../components/SpotifyPlayer.svelte'
  import ApplePlayer from '../../components/ApplePlayer.svelte'
  let audio_src;

	const unsubscribe = audioSrc.subscribe(value => {
		audio_src = value;
	});

</script>
<style>
  img {
    max-width: 100%;
  }
</style>

<svelte:head>
	<title>Chapters</title>
</svelte:head>

<section in:fade>

<h1>Chapters</h1>

<h2>Prologue</h2>
<figure>
  <img src="Prologue-650.png" alt="The Traveler">
</figure>

{#if $audioSrc === "spotify"}
  <SpotifyPlayer trackID="2QmkVQgjxVnRWd9uM7kbbd"/>
{:else if $audioSrc === "apple"}
  <ApplePlayer trackID="1533876783"/>
{:else if $audioSrc === "deezer"}
<iframe id="dzplayer" dztype="dzplayer" src="http://developers.deezer.com/us/plugins/player?playlist=true&width=700&height=240&autoplay=false&type=album&id=176531862" scrolling="no" frameborder="0" style="border:none; overflow:hidden;" width="700" height="240" allowTransparency="true"></iframe>
{:else}
  <p>Choose Audio Source</p>
  <ChooseAudio />
{/if}

<p>A crackling fire illuminated the interior of a tavern. It was filled with tables stacked with empty tankards. Every table was occupied. A wooden bar ran along the length of the back wall, the surface scarred with divots, each telling a different story of the person who carved it. Despite its pock-marked surface, it had been sanded smooth by decades of sliding glasses. Atop a stool, a woman sat alone.</p>
<p>Her silver hair draped over a cloak the deep color of wine. She was loosely holding a frothy mug of mead in front of her. Her deep green eyes stared intently at one of the divots in the bar, lightly digging at it with the nail of her left index finger. It seemed deeper than the others, perhaps made by something much larger than a common hunting knife. The froth of the mead dripped down onto her scarred knuckles. Picking up her mug, she took a drink.</p>
<p>Through the drunken murmurs of the patrons, she overheard a conversation between two men at the table behind her. The older of the two, a wry man with a patchy gray beard, was doing most of the talking. He was bumbling through a story about the abandoned castle up the road. He was simultaneously whispering and yelling. As he motioned for his friend to lean in closer he knocked over an empty tankard. It fell to the floor with a low thud.</p>
<p>Through the slurred exchange, she caught the words treasure, dungeon and something about a glowing key.</p>
<p>Marceline finished her drink, slid two silver coins on the bar, and nodded to the wrinkled man behind the bar. She stood up, her bones cracking, seemingly in sync with the nearby fire. As she walked past the table where the two men were sitting, her tattered cloak shifted behind her. Nestled deep inside, a small silver sword caught the torchlight and glimmered.</p>
<p>She reached the door and grasped the knotted wooden handle. She glanced back at the table. The men were raising their glasses and stumbling to stand for a toast. As they began to sing, it was clear the castle had left their mind.</p>
<p>As she opened the door, a light breeze layered with the smell of fresh rain caressed her stoic face.</p>
<p>The door closed behind her, the noise of the tavern cutting to a muffled hum.</p>

<h2>Chapter 1</h2>
<p>Coming Soon...</p>
  </section>
