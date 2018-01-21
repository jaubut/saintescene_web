<template>
  <div id="messages">
    <Hero class="span-2 hero-messages">
      <h1>Messages</h1>
    </Hero>
    <template v-for="message in messages">
      <BlocMessage :message="message"></BlocMessage>
    </template>
  </div>
</template>

<script>
import BlocMessage from '@/components/bloc-message'
import {createClient} from '../../../utils/contentful-api'

const client = createClient()

export default {
  components: {
    BlocMessage
  },
  data () {
    return {
      messages: []
    }
  },
  created () {
    this.fetchData()
  },
  watch: {
    'lang': 'fetchData'
  },
  methods: {
    fetchData () {
      return client.getEntries({
        'content_type': 'message',
        order: '-sys.createdAt'
      })
        .then(response => {
          this.messages = response.items
          return response
        })
    }
  }
}
</script>

<style lang="css">
  #messages {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: auto;
    width: 100%;
  }
  .hero-messages {
    background-image: url(../../assets/evenement-bstudy.jpg)
  }
</style>
