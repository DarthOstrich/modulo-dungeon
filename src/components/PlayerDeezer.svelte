<script>
  export let trackID;
  const src = 'https://developers.deezer.com/us/plugins/player?playlist=true&width=700&height=240&autoplay=false&type=album&id=' + trackID
</script>
<style>
  iframe {
    width: 300px;
    height: 75px;
    
  }
</style>
<iframe id="dzplayer" dztype="dzplayer" src={src} scrolling="no" frameborder="0" style="border:none; overflow:hidden;" width="700" height="240" allowTransparency="true"></iframe>

