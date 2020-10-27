<script>
  export let trackID;
  const src = 'https://open.spotify.com/embed/track/' + trackID
</script>
<style>
  iframe {
    width: 70%;
    height: 75px;
    
  }
</style>
<iframe src={src} frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
