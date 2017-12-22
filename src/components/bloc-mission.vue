<template>
  <div id="blocMission">
    <h3 class="title">{{ title }}</h3>
    <p class="text">{{ text }}</p>
    <div class="img" :style="imgSource"></div>
    <h4 class="signature">{{ signature }}</h4>
  </div>
</template>
<script>
export default {
  name: 'blocMission',
  props: ['title', 'text', 'signature', 'imgSource']
}
</script>
<style lang="sass" scoped>
  #blocMission
    display: flex
    flex-flow: column wrap
    justify-content: space-around
    align-items: center
    height: 50vh
    padding: 5%
  .title
    font-family: 'Germania One', cursive
    font-size: 3rem
    color: black
  .text
    font-family: 'Barlow', sans-serif
    font-size: 0.8rem
    color: #656565
    margin-top: -10%
  .img
    height: 70px
    width: 70px
    border-radius: 100%
    background-position: center center
    background-repeat: no-repeat
    background-size: cover
  .signature
    font-family: 'Germania One', cursive
    font-size: 1.5rem
    color: black
    align-self: end
</style>
