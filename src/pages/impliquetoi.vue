<template>
  <div id="Implique">
    <Hero class="hero-implique"><h1>Implique-toi</h1></Hero>
    <div class="bloc span-2">
      <div class="texte">
        <h2>Fais partie des coulisses de Sainte Scène</h2>
        <p>C'est super simple. Ici à la <strong>Sainte Scène</strong> on aime travailler en équipe et on croit que faire partie de la communauté passe par notre implication. Voici les départements où vous pouvez vous impliquer: musique, régie, multi-média, Sainte Scène Junior (éducation chrétienne), ect.</p>
      </div>
    </div>
    <div class="bloc span-2 grey row">
      <div class="texte">
        <img src="../assets/Slack_Mark.svg" alt="">
        <h3>On aime Slack</h3>
        <p>Slack est une application formidable qui représente un hub central pour toute l'équipe de <strong>Sainte Scène</strong></p>
      </div>
      <img src="../assets/slack/photo-1.png" alt="">
    </div>
    <div class="bloc span-2">
      <div class="texte">
        <img src="../assets/Slack_Mark.svg" alt="">
        <h3>Sur ton téléphone ou ordi</h3>
        <p>Slack est une plateforme disponible sur tous tes appareils</p>
      </div>
      <img src="../assets/slack/photo-7.png" alt="">
    </div>
    <div class="bloc span-2">
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
  #implique
    display: grid
    grid-template-columns: 1fr 1fr
    grid-auto-rows: calc(100vh/1.7)
    width: 100%
  .texte
    padding: 5%
    text-align: center
    display: flex
    flex-flow: column wrap
    justify-content: flex-start
    img
      height: 100px
  h2
    font-family: 'Germania One', cursive
    font-size: 3rem
    padding-bottom: 35px
  h3
    font-size: 2.2rem
    font-weight: bold
  p
    font-size: 1.3rem
    font-weight: 100
    line-height: 1.5rem
    padding: 3% 10%
  .bloc
    display: flex
    flex-flow: column wrap
    justify-content: space-evenly
    grid-column: span 1
    align-items: center
    font-family: 'Barlow', sans-serif
    background-color: white
    background-image: none
    background-position: center center
    background-repeat: no-repeat
    background-size: cover
    overflow: hidden
    padding: 5%
    color: black
  .green
    background: #4F5D56 !important
    color: white !important
  .blue
    background: #4267B2 !important
  .span-2
    grid-column: span 2 !important
  .span-v
    grid-row: span 2
  .row
    flex-flow: row nowrap !important
    align-items: flex-start !important
    @media(max-width:468px)
        flex-flow: row wrap !important
    .texte
      text-align: left
      img
        height: 100px
        width: 100px !important
      p
        padding: 0
  .beige
    background-color: #F8F3EB !important
  .grey
    background-color: rgba(lightgrey, 0.2) !important
  img
    max-height: 50%
    width: 100%
    border-radius: 5px
  .dark
    color: white
  .hover
    background: rgba(black, 0.5)
    height: 100%
    width: 100%
    margin: 5%
  @media (max-width:468px)
    #Bloc
      grid-column: span 2
    .span-v
      grid-row: span 1
  .hero-implique
    background-image: url(../assets/impliquetoi.jpg)
  .button-slack
    display: flex
    flex-flow: row nowrap
    justify-content: space-around
    align-items: center
    border: 2px solid grey
    border-radius: 5px
    background: transparent
    height: auto
    width: auto
    cursor: pointer
    padding: 2% 5%
    transition: all ease-in-out .5s
    &:hover
      transform: scale(1.1)
    p
      margin: 0
      padding: 0
    img
      height: 35px
      width: 35px
</style>
