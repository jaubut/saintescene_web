<template>
  <div @mouseover="openHover" @mouseleave="closeHover"  id="blocMessage" :style="{'background-image': 'url(' + message.fields.background.fields.file.url + ')'}">
    <div v-if="hoverPhoto" class="text">
      <h3 class="h3">{{ message.fields.title }}</h3>
      <p class="p">{{ message.fields.body }}</p>
      <a href="#">
        <div class="btn lire"><p>Jouer</p></div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'blocMessage',
  props: ['message'],
  data () {
    return {
      hoverPhoto: false
    }
  },
  methods: {
    openHover () {
      this.hoverPhoto = true
    },
    closeHover () {
      this.hoverPhoto = false
    }
  }
}
</script>
<style lang="sass" scoped>
  #blocMessage
    min-height: 55vh
    grid-column: span 1
    padding: 5%
    background: #F8F8F8
    display: flex
    justify-content: center
    align-items: center
    background-position: center center
  .play
    height: 75px
    width: auto
  .text
    height: 100%
    width:  100%
    background: rgba(#B2152D,0.3)
    border: 2px solid white
    display: flex
    flex-flow: column wrap
    justify-content: center
    align-items: center
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
  @media(max-width:468px)
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
