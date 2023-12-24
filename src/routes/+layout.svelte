<script>
  import Navbar from './Navbar.svelte';
	import './styles.css';
  import { activeTrackURL, activeTrackTitle } from '../store/stores';
	import AudioPlayer from '../components/AudioPlayer.svelte';
</script>

<div class="app">
  <Navbar />

	<main>
		<slot />
	</main>

  <AudioPlayer />

  <!-- <footer class="p-5 pb-20"> -->
  <!--   <p class="text-center text-white">Made by Modulo</p> -->
  <!-- </footer> -->

</div>

<style></style>
