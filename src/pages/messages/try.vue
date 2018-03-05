<template>
    
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      videos: []
    }
  },
  created () {
    this.fetchVideoList()
  },
  methods: {
    fetchVideoList () {
      axios.get('https://www.googleapis.com/youtube/v3/playlistItems?playlistId=PLMf-0z-5Pwy-AN3CyRYor-THjRmtKlvPR&key=AIzaSyBD-gkHXVafmP6UVTT-eaagGkJ_3qSyj3M&fields=items&part=snippet&maxResults=15', function (videosList) {
        this.videos = videosList.items
        console.log(videosList.items)
      })
    }
  }
}
</script>

<style scoped>

</style>
