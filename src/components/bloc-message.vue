<template>
  <div id="blocMessage">
    <div class="photo" :style="{'background-image': 'url(' + message.fields.background.fields.file.url + ')'}"></div>
    <div class="text">
      <h3 class="h3">{{ message.fields.title }}</h3>
      <p class="p">{{ message.fields.body }}</p>
      <a href="#">
        <div class="btn lire"><p>Lire</p></div>
      </a>
    </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'blocMessage',
  props: ['message']
}
</script>
<style lang="sass" scoped>
  #blocMessage
    display: grid
    grid-template: 100% / 37.5% 15% 37.5%
  .photo
    grid-area: 1/1/2/3
    min-height: 40vh
    height: 100%
    width: auto
    background-size: 100%
    background-position: center center
    background-repeat: no-repeat
    border-radius: 5px
    filter: grayscale(100%)
    opacity: 0.5
  .text
    grid-area: 1/2/2/4
    display: flex
    flex-flow: column wrap
    justify-content: space-around
    align-items: center
    padding-left: 15%
    .h3
      align-self: start
      font-family: 'Germania One', cursive
      font-size: 4rem
    .p
      align-self: start
      font-family: 'Barlow', sans-serif
      color: black
      font-size: 0.8rem
    .lire
      background-color: #B2152D
      color: white
      align-self: center
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
