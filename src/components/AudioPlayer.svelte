<script lang="ts">
  import { audioPlayer, activeTrackURL, activeTrackTitle } from '../store/stores';
</script>

<section class="sticky bottom-0 left-0 right-0 w-full bg-black/80 p-2 flex justify-center items-center mt-4">
  <h4 class="m-2"><span class="uppercase">Now Playing:</span> {$activeTrackTitle} </h4>
  <audio 
  bind:this={$audioPlayer}
  controls 
  class="">
    <source src={"/" + $activeTrackURL + ".mp3"} type="audio/mpeg" />
    <!-- <source src="horse.ogg" type="audio/ogg"> -->
    <!-- <source src="horse.mp3" type="audio/mpeg"> -->
    Your browser does not support the audio element.
  </audio>
</section>
