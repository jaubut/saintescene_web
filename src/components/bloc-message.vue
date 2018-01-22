<template>
  <div @mouseover="openHover" @mouseleave="closeHover"  id="blocMessage" :style="{'background-image': 'url(' + message.fields.background.fields.file.url + ')'}">
    <transition name="fade">
      <img v-if="hoverPhoto === false" class="play" src="../assets/play-logo.svg" alt="">
    </transition>
    <transition name="fade">
      <div v-if="hoverPhoto" :class="{ active: iframeVideo }" class="text">
        <h3 class="h3">{{ message.fields.title }}</h3>
        <p class="p">{{ message.fields.body }}</p>
        <div @click="openIframe" class="btn lire"><p>Jouer</p></div>
      </div>
    </transition>
    <transition name="fade">
      <iframe
        v-if="iframeVideo"
        width="560"
        height="315"
        :src="message.fields.urlYoutube"
        frameborder="0"
        allow="autoplay;
        encrypted-media"
        allowfullscreen>
      </iframe>
    </transition>
  </div>
</template>
<script>
export default {
  name: 'blocMessage',
  props: ['message'],
  data () {
    return {
      hoverPhoto: false,
      iframeVideo: false
    }
  },
  methods: {
    openHover () {
      this.hoverPhoto = true
    },
    closeHover () {
      this.hoverPhoto = false
      this.iframeVideo = false
    },
    openIframe () {
      this.iframeVideo = true
    }
  }
}
</script>
<style lang="sass" scoped>
  #blocMessage
    height: 55vh
    grid-column: span 1
    padding: 5%
    background: #F8F8F8
    display: flex
    justify-content: center
    align-items: center
    background-repeat: no-repeat
    background-position: center center
    background-size: 100%
    overflow: hidden
  .play
    position: absolute
    height: 75px
    width: auto
  .text
    height: 100%
    width:  100%
    padding: 100% 0
    background: rgba(#B2152D,0.3)
    display: flex
    flex-flow: column wrap
    justify-content: center
    align-items: center
    overflow: hidden
    .h3
      font-family: 'Germania One', cursive
      font-size: 4rem
      color: white
    .p
      font-family: 'Barlow', sans-serif
      color: white
      font-size: 0.8rem
      padding-bottom: 50px
    .lire
      background-color: #B2152D
      color: white
      align-self: center
  .active
    opacity: 0
    width: 0
    height: 0
  @media(max-width:468px)
    #blocMessage
      grid-column: span 2
    .text
      .h3
        font-size: 2rem
  .btn
    display: flex
    justify-content: center
    align-items: center
    text-decoration: none
    width: 80px
    height: 35px
    border: none
    &:hover
      cursor: pointer
      transform: translateX(5px)
      transition: transform ease-in-out .5s
  .title
    font-family: 'Germania One', cursive
    font-size: 2rem
    color: white
</style>
