<template>
  <div id="evenement">
    <Hero class="hero-event"><h1>Événements</h1></Hero>
    <div class="event">
      <div class="picture">
        <p>Dimanche</p>
      </div>
      <div class="line"></div>
      <div class="text-group">
        <h2>Dimanche</h2>
        <span>10h - 12h</span>
        <p>Notre communauté Sainte Scène a son rassemblement principal à Granby, le dimanche matin à 10h au 1236 rue St-Charles S.<br></br> Vous y trouverez une expérience musicale avec louange, une équipe pastorale et des leaders qui partageront de tout cœur, le cœur de Dieu pour vous aider à grandir:  âme, corps, et esprit.  Ce n’est pas un spectacle, c’est une <strong>Sainte Scène</strong> pour toutes les générations, les familles, les célibataires, les ados et les enfants. Tous sont bienvenus ! Nous sommes en communion tous les dimanches à 10h.  Fais partie de la <strong>Sainte Scène</strong>.</p>
      </div>
    </div>
    <div class="event">
      <div class="picture">
        <p>Mardi au vendredi</p>
      </div>
      <div class="line"></div>
      <div class="text-group">
        <h2>Intercession</h2>
        <span>7h - 9h</span>
        <p>Le groupe Intercession, est la premières lumière allumée dans les coulisses de <strong>Sainte Scène</strong>. De 7h à 9h, du mardi au vendredi, fais partie de l’équipe de prière qui se rencontre pour intercéder les uns pour les autres, pour notre communauté, notre ville, notre région, notre province et notre nation. La prière active tout !<br><br/><a href="https://www.google.ca/maps/place/1236+Rue+Saint+Charles+S,+Granby,+QC+J2J+0L6/@45.3416945,-72.7487631,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc9c54fe2bf925d:0x1c5a162a6849e0e1!8m2!3d45.3416945!4d-72.7465744"target="_blank"><p>Lieu de rencontre: 1236 rue St-Charles S.</p></a></p>
      </div>
    </div>
    <div class="event">
      <div class="picture">
        <p>Mercredi</p>
      </div>
      <div class="line"></div>
      <div class="text-group">
        <h2>Bstudy</h2>
        <span>19h - 21h</span>
        <p>Le Bstudy, ce sont nos études bibliques qui se tiennent le mercredi soir à 19h dans les cafés, dans les pubs, dans les maisons ou autres.  Ces moments de connexions ne sont pas des enseignements mais plutôt des partages sur des chapitres de la Bible lus par tous et dirigés par un de nos leaders passionnés.<br></br> Le Bstudy fait partie de la vie active dans les coulisses de <strong>Sainte Scène</strong> pour renverser la statistique que plus de 90% des chrétiens n’ont jamais lu la Bible de A à Z.  C’est une place d’échanges où nous pouvons être vrais, mettre les cartes sur la table et avoir des réponses à plein de questions simples ou profondes. Veux-tu aller plus loin ? Participe au Bstudy.</p>
      </div>
    </div>
    <div class="event">
      <div class="picture">
        <p>Mercredi</p>
      </div>
      <div class="line"></div>
      <div class="text-group">
        <h2>Groupe Connexion</h2>
        <span>19h - 21h</span>
        <p>Les Groupes Connexions sont des moments de connexions et de fraternité.  La plupart de nos groupes opèrent le mercredi soir à 19h dans nos locaux, dans des maisons, dans des cafés ou autres.  Tu veux connaître Dieu et ta communauté, fais partie d’un Groupe Connexion!</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'evenement',
  metaInfo () {
    return {
      title: 'Événements',
      meta: [
        { property: 'og:url', content: 'https://www.saintescene.com/' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Sainte Scène' },
        { property: 'og:description', content: 'On de loeuvre de Jésus.' },
        {property: 'og:image', content: '../assets/evenement-bstudy.jpg'}
      ]
    }
  }
}
</script>
<style lang="sass" scoped>
  #evenement
    width: 100%
    height: 100%
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
      color: white
      font-size: 0.9rem
  .line
    border-right: 2px solid #B2152D
    grid-area: 1/2/2/3
    height: 100%
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
      margin-top: 10%
  .hero-event
    background-image: url(../assets/evenement-bstudy.jpg)
</style>
