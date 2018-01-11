<template>
  <div id="Footer">
    <div class="line"></div>
    <h1 class="footer-logo">Sainte Scène</h1>
    <div class="text-group">
      <div class="text">
        <h3>Chanvre Québec</h3>
        <p>Qui somme nous ?</p>
        <p>Qui somme nous ?</p>
        <p>Qui somme nous ?</p>
        <p>Qui somme nous ?</p>
      </div>
      <div class="text">
        <h3>Chanvre Québec</h3>
        <p>Qui somme nous ?</p>
        <p>Qui somme nous ?</p>
        <p>Qui somme nous ?</p>
        <p>Qui somme nous ?</p>
      </div>
      <div class="text">
        <h3>Chanvre Québec</h3>
        <p>Qui somme nous ?</p>
        <p>Qui somme nous ?</p>
        <p>Qui somme nous ?</p>
        <p>Qui somme nous ?</p>
      </div>
    </div>
    <img class="footer-coupe" src="../assets/logo-coupe-rose.svg" alt="logo coupe rose">
  </div>
</template>
<script>
export default {
  name: 'Footer'
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
    font-size: 1.2rem
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
    align-items: center
    padding: 5%
  .text
    display: flex
    flex-flow: column wrap
    justify-content: space-between
    align-items: flex-start
    padding-top: 50px
    p
      margin: 15px
</style>
