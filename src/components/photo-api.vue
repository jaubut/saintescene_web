<template>
  <div id="photo-api" :class="SectionPhoto">
    <div :class="IndexPhoto" v-for="(photo, index) in photos" :key="index" :style="{ 'background-image': 'url(' + photo.urls.regular + ')' }"></div>
  </div>
</template>
<script>
import axios from 'axios'

const url = 'https://api.unsplash.com/users/saintescene/photos'

export default {
  name: 'photo-api',
  data () {
    return {
      photos: [],
      perPage: 24
    }
  },
  props: ['IndexPhoto', 'SectionPhoto'],
  methods: {
    fetchData () {
      const config = {
        params: {
          client_id: '7ee7cdb1c1352f051dd60cb078a0593ed701636d9be662f3fb25fde579d909ca',
          per_page: this.perPage
        }
      }
      axios.get(url, config)
        .then(response => {
          this.photos = response.data
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  created () {
    this.fetchData()
  }
}
</script>
<style lang="sass" scoped>
  .photo
    display: flex
    flex-flow: column wrap
    justify-content: flex-end
    min-height: 250px
    background-position: center center
    background-size: cover
    background-repeat: no-repeat
</style>
