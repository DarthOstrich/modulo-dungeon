<script>
  export let trackID;
  const src = 'https://embed.music.apple.com/us/album/aquatic-ambience-single/' + trackID
</script>
<style>
  iframe {
    width: 300px;
    height: 200px;
    
  }
</style>
<iframe allow="autoplay *; encrypted-media *;" frameborder="0" sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation" src={src}></iframe>
