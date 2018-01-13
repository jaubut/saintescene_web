<template>
  <div id="Footer">
    <div class="line"></div>
    <h1 class="footer-logo">Sainte Scène</h1>
    <div class="text-group">
      <div class="text">
        <h3>Nous rejoindre</h3>
        <a href="https://www.google.ca/maps/place/1236+Rue+Saint+Charles+S,+Granby,+QC+J2J+0L6/@45.3416945,-72.7487631,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc9c54fe2bf925d:0x1c5a162a6849e0e1!8m2!3d45.3416945!4d-72.7465744"target="_blank"><p>1236, rue Saint-Charles Sud

Granby, Qc, J2J 0L6</p></a>
        <a href="tel:4503611838"><p>450-361-1838</p></a>
        <a href="mailto:allo@saintescene.com"><p>allo@saintescene.com</p></a>
      </div>
      <router-link :to="{ name: 'Evenement' }">
        <div class="text">
          <h3>Prochaine Évènement</h3>
          <p v-if="currentDate >= 5">Réunion Dimanche <span class="info">10am - 12pm</span> </p>
          <p v-if="currentDate <= 5">Bouclier du Matin <span class="info" v-if="currentDate === 2">Mardi 7am</span><span class="info" v-if="currentDate === 3">Mercredi 7am</span><span class="info" v-if="currentDate === 4">Jeudi 7am</span><span class="info" v-if="currentDate === 5">Vendredi 7am</span></p>
          <p v-if="currentDate <= 3">B Study<span class="info">7pm - 9pm</span></p>
        </div>
      </router-link>
    </div>
    <img class="footer-coupe" src="../assets/logo-coupe-rose.svg" alt="logo coupe rose">
    <div class="footer-right">
      <p>© 2018 sainte Scène <br>All rights reserved. <br>Crafted by <a href="https://www.jaubut.space"target="_blank"><span>Jérémie Aubut</span></a></p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  computed: {
    currentDate () {
      let today = new Date()
      return today.getDay()
    }
  }
}
</script>
<style lang="sass" scoped>
  #Footer
    height: 100%
    display: grid
    grid-template: 5% 65% 20% / 5% 45% 45% 5%
    padding: 5% 0
  .line
    grid-area: 1/2/2/4
    width: 100%
    border-top: 4.5px solid #F8C3C8
  .footer-logo
    grid-area: 2/2/3/3
    font-family: 'Germania One', cursive
    font-size: 1.5rem
    font-weight: 200
    margin: 15px
  .footer-coupe
    grid-area: 2/3/3/4
    height: 42px
    align-self: end
    margin-left: auto
  .text-group
    grid-area: 2/2/3/4
    display: flex
    flex-flow: row wrap
    justify-content: space-around
    align-items: left
    padding: 5%
  @media(max-width:468px)
    .text-group
      justify-content: flex-start
  .text
    display: flex
    flex-flow: column wrap
    justify-content: space-between
    align-items: flex-start
    padding-top: 50px
    p
      margin: 15px
    h3
      font-family: 'Germania One', cursive
      font-weight: 100
    .info
      color: #F8C3C8
      font-size: 0.9rem
  .footer-right
    display: flex
    flex-flow: row wrap
    justify-content: space-between
    grid-area: 3/2/4/4
    margin-bottom: 15px
    p
      font-family: 'Barlow', sans-serif
      align-self: center
      font-size: 0.6rem
      color: white
</style>
