<template>
  <div id="Implique">
    <Hero class="hero-implique"><h1>Implique-toi</h1></Hero>
    <div class="container">
      <p>Salut, tu veux t'impliquer ?</p>
      <a href="https://l.messenger.com/l.php?u=https%3A%2F%2Fjoin.slack.com%2Ft%2Fsaintescene%2Fshared_invite%2FenQtMjk4Njc2MjUyNDM2LTM1YjYwMDdmNTE0NTg2OWMwZjljMjYxZWZkNjYyM2E5NzE5NTRlNDYxN2RhYTYyZjc1ODM3ZGYxMmEzZGRmZDc&h=ATNrppBQA1rfv7gKNDJ29JC8oD8EgbpAdc---wRHwQoezDspNt5SSUUe5v1lybhUhBAUkF4tCZGLCHr2rlMq-E1Os0_VkjBYM4-raKDyOblvVajGxR0K8lb_XgRR_0ULZuf51Bja2FeCKhAW" target="_blank">
        <div class="button-slack">
          <img src="../assets/Slack_Mark.svg" alt="">
          <p>Ajoute-toi au slak</p>
        </div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Implique'
}
</script>
<style lang="sass" scoped>
  #Implique
    width: 100%
    height: 100%
  .hero-implique
    background-image: url(../assets/impliquetoi.jpg)
  .button-slack
    display: flex
    flex-flow: row nowrap
    justify-content: center
    align-items: center
    border: 2px solid grey
    border-radius: 5px
    background: transparent
    height: auto
    width: 200px
    cursor: pointer
    transition: all ease-in-out .5s
    &:hover
      transform: scale(1.1)
    p
      margin: 0
    img
      height: 35px
</style>
