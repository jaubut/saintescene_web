<template>
  <div id="app">
    <header>
      <a v-if="currentDate === 0" onclick="setTimeout(function () { window.location = 'https://www.facebook.com/Sainte-Scène-1529585407088599/'; }, 2500);
window.location = 'fb://facewebmodal/=pagename';">
        <img class="live clr" src="./assets/live-bleu.svg" alt="live logo">
      </a>
      <router-link :to="{ name: 'Index' }">
        <h1 class="logo">Sainte Scène</h1>
      </router-link>
      <img @click="trigger" class="burger" src="./assets/burger-icon.svg" alt="burger">
    </header>
    <transition name="fade">
      <MenuSS v-on-click-outside="close" @click.native="show = false" v-if="show"></MenuSS>
    </transition>
    <transition name="transite">
      <main @click="show = false" :class="{ active: show}">
        <router-view></router-view>
      </main>
    </transition>
    <FooterSS></FooterSS>
  </div>
</template>

<script>
import { mixin as onClickOutside } from 'vue-on-click-outside'
import MenuSS from '@/components/menu'
import FooterSS from '@/components/footer'

export default {
  name: 'app',
  mixins: [onClickOutside],
  components: {
    MenuSS,
    FooterSS
  },
  metaInfo: {
    // if no subcomponents specify a metaInfo.title, this title will be used
    title: 'Accueil',
    // all titles will be injected into this template
    titleTemplate: '%s | Sainte Scène'
  },
  data () {
    return {
      show: false
    }
  },
  computed: {
    currentDate () {
      let today = new Date()
      return today.getDay()
    },
    currentHour () {
      let today = new Date()
      return today.getHours()
    }
  },
  methods: {
    trigger () {
      this.show = !this.show
    },
    close () {
      this.show = false
    }
  }
}
</script>

<style lang="sass">
  @import url('https://fonts.googleapis.com/css?family=Barlow|Germania+One')

  html, body
    background: #A50E2F
    background-size: 400% 400%
    margin: 0
    padding: 0
    color: white
    animation: bgAnim 4s ease infinite
  a
    text-decoration: none
    color: inherit
    &:hover
      color: inherit
  header
    height: 50px
    display: flex
    flex-flow: row wrap
    align-items: center
    padding: 0 50px
    .burger
      height: 10px
      margin-left: auto
      &:hover
        cursor: pointer
      &:active
        transform: translateY(5px)
        transition: transform 0.5s ease-in-out
    .logo
      font-family: 'Germania One', cursive
      font-size: 1.5rem
      font-weight: 200
      padding-left: 10px
    .live
      height: 60%
      margin-left: -25px
      animation: bounce 2.0s infinite ease-in-out
      cursor: pointer
  @keyframes bounce
    0%, 100%
      transform: scale(0.85)
    50%
      transform: scale(1)
  main
    background: white
    display: flex
    margin: 0 2% 5% 2%
    height: 100%
    width: 96%
    border-radius: 5px
    z-index: 1
    transition: all 0.5s ease-in-out
    h3
      color: black
  .active
    transform: translateY(300px)
  .container
    display: flex
    flex-flow: column wrap
    justify-content: center
    align-items: center
    padding: 5% 20%
    .first-letter
      font-family: 'Germania One', cursive
      font-size: 3rem
      align-self: flex-start
    p
      color: black
      line-height: 1.6rem
      text-align: justify
      margin: 50px 0
  @media(max-width:468px)
    .container
      padding: 5% 5%
  h1, h2, h3, h4, h5, p
    margin: 0
    padding: 0
  p
    font-family: 'Barlow', sans-serif
  .fade-enter-active, .fade-leave-active
    transition: opacity .5s ease-in-out
  .fade-enter, .fade-leave-to
    opacity: 0
  .transite-enter-active, .transite-leave-active
    transition: transform .5s ease-in-out
  .transite-enter, .transite-leave-to
    transform: translateY(5px)
  @keyframes bgAnim
    0%
      background-position: 78% 0%
    50%
      background-position: 23% 100%
    100%
      background-position: 78% 0%
</style>
