<template>
  <div id="Menu">
    <router-link :to="{ name: 'Jesus' }">Jésus</router-link>
    <router-link :to="{ name: 'Evenement'}">Événements</router-link>
    <router-link :to="{ name: 'Implique' }">Implique toi</router-link>
  </div>
</template>
<script>
export default {
  name: 'Menu',
  data () {
    return {
      Hover: false
    }
  },
  methods: {
    openHover () {
      this.Hover = true
    },
    closeHover () {
      this.Hover = false
    }
  }
}
</script>
<style lang="sass" scoped>
  #Menu
    position: absolute
    z-index: 0
    background: rgba(white, 0.1)
    margin: 5% 2% 2% 2%
    padding: 2% 2%
    height: auto
    width: 92%
    display: flex
    flex-flow: column wrap
    border-radius: 5px
    text-align: left
    line-height: 2rem
    a
      font-family: 'Germania One', cursive
      font-size: 2rem
      width: inherit
      &:hover
        transform: translateX(5px)
        transition: transform .5s ease-in-out
</style>
