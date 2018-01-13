<template>
  <div id="evenement">
    <div class="event">
      <div class="picture">
        <p>Dimanche</p>
      </div>
      <div class="line"></div>
      <div class="text-group">
        <h2>Dimanche</h2>
        <span>10am - 12pm</span>
        <p>Notre communauté Sainte Scène a son rassemblement principal à Granby le dimanche matin à 10h au 1236 Rue Saint Charles S.<br></br> Vous y trouverez une expérience  musicale avec louange, une équipe pastorale et des leaders qui partagerons de tout cœur le cœur de Dieu pour vous aider à grandir: âme, corp, et esprit. C’est pas un spectacle, c’est une Sainte Scène pour les jeunes et les plus vieux, les familles, les célibataires, les ados, les enfants, les pauvres et les riches. Nous sommes en communion toutes les Dimanche à 10h. Fait partit de de la Sainte Scène.</p>
      </div>
    </div>
    <div class="event">
      <div class="picture">
        <p>Mardi au vendredi</p>
      </div>
      <div class="line"></div>
      <div class="text-group">
        <h2>Bouclier du matin</h2>
        <span>7am - 9am</span>
        <p>Les Boucliers du Matin, sont les premières lumières allumé dans les coulisses de Sainte Scène.  De 7h à 9h00, du mardi au vendredi, fait parti l’équipe de prière qui se rencontre pour intercéder les uns pour les autres, pour notre communauté, notre ville, notre région, notre province et notre nation. La prière active tout !<br><br/><a href="https://www.google.ca/maps/place/1236+Rue+Saint+Charles+S,+Granby,+QC+J2J+0L6/@45.3416945,-72.7487631,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc9c54fe2bf925d:0x1c5a162a6849e0e1!8m2!3d45.3416945!4d-72.7465744"target="_blank"><p>Lieu de rencontre: 1236 Rue Saint Charles S.</p></a></p>
      </div>
    </div>
    <div class="event">
      <div class="picture">
        <p>Mercredi</p>
      </div>
      <div class="line"></div>
      <div class="text-group">
        <h2>B study</h2>
        <span>7pm - 9pm</span>
        <p>Les Bstudies sont nos études bibliques le mercredi soir à 19h dans les cafés, pubs, maisons ou autres. Ces moments de connexions ne sont pas des enseignements mais plutôt des partages sur des chapitres de la Bible lu par tous et diriger par un de nos leaders passionnés.<br></br> Le Bstudy fait partit de la vie active dans les coulisses de Sainte Scène pour renverser la statistique que plus de 90% des chrétiens n’ont jamais lu la Bible de A à Z. C’est une place d’échanges où nous pouvons être vrai, mettre les cartes sur la table et avoir des réponses à pleins de questions simples ou profondes. Tu veux allez plus loin ? Participe au Bstudy.</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'evenement'
}
</script>
<style lang="sass" scoped>
  #evenement
    width: 100%
    height: 100%
    padding: 25px 0
  .event
    display: grid
    grid-template: 100% / 10% 10% 10% 70%
  .picture
    grid-area: 1/2/2/4
    display: flex
    height: 75px
    width: 75px
    border-radius: 100%
    background: #B2152D
    border: 3px solid #FA7E7E
    justify-self: center
    justify-content: center
    align-items: center
    z-index: 1
    p
      text-align: center
  .line
    border-right: 2px solid #B2152D
    grid-area: 1/2/2/3
    height: 300px
    margin: 25% 0 10% 0
  .text-group
    grid-area: 1/4/2/5
    color: black
    padding: 10%
    h2
      font-family: 'Germania One', cursive
      font-size: 2rem
    @media(min-width:468px)
      h2
        font-size: 5rem
    span
      font-family: 'Germania One', cursive
      font-size: 0.9rem
      margin-top: -10px
    p
      font-size: 1.2rem
      line-height: 1.6rem
      margin-top: 10%
</style>
