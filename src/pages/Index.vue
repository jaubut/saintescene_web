<template>
  <div id="Index">
    <BlocMission  title="Notre Mission"
                  text="Notre mission est de faire on earth as it is in heaven."
                  signature="Sam & Laure"
                  imgSource="background-image: url(../assets/photo-test.jpg);"
    ></BlocMission>
    <div class="message-section">
      <h3 class="tag">Messages</h3>
      <div class="messages" v-for="message in messages">
        <BlocMessage :message="message"></BlocMessage>
      </div>
      <div class="line"></div>
      <div class="penser" v-for="pense in penses">
        <BlocPenser :pense="pense"></BlocPenser>
      </div>
    </div>
    <PhotoApi SectionPhoto="photo-section" IndexPhoto="photo"></PhotoApi>
  </div>
</template>
<script>
import {createClient} from '../../utils/contentful-api'
import PhotoApi from '@/components/photo-api'
import BlocMission from '@/components/bloc-mission'
import BlocMessage from '@/components/bloc-message'
import BlocPenser from '@/components/bloc-penser'

const client = createClient()

export default {
  name: 'Index',
  components: {
    PhotoApi,
    BlocMission,
    BlocMessage,
    BlocPenser
  },
  data () {
    return {
      messages: [],
      penses: []
    }
  },
  methods: {
    fetchData () {
      client.getEntries({
        'content_type': 'message',
        order: '-sys.createdAt'
      })
        .then(response => {
          this.messages = response.items
          return response
        })
      client.getEntries({
        'content_type': 'penser',
        order: '-sys.createdAt'
      })
        .then(response => {
          this.penses = response.items
          return response
        })
    }
  },
  created () {
    this.fetchData()
  }
}
</script>
<style lang="sass" scoped>
  #Index
    width: 100%
  .message-section
    height: 55vh
    display: grid
    grid-template: 7.5% 7.5% 85% / 65% 35%
  .line
    grid-area: 2/1/4/2
    border-right: 3px solid black
    margin: 10% 0 
  .messages
    grid-area: 2/1/4/2
    padding: 5%
    background: #F8F8F8
    display: flex
    justify-content: center
    align-items: center
  .tag
    z-index: 1
    grid-area: 1/1/3/2
    background: black
    color: white
    height: 100%
    width: 180px
    margin-left: 20%
    display: flex
    justify-content: center
    align-items: center
    font-family: 'Germania One', cursive
  .photo-section
    width: 100%
    display: grid
    grid-template: 45% 25% 25% / repeat(auto-fill, 23%)
    grid-gap: 5px
    justify-content: space-around
    margin: 1% 0
  .penser
    grid-area: 2/2/4/3
    background: #F8F8F8
</style>
