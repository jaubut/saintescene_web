<template>
  <div id="Jesus">
    <Hero class="hero-jesus"><h1>Jésus</h1></Hero>
    <div class="container">

      <p><span class="first-letter">Nous croyons que</span> Jésus est Dieu. Il est né d’une vierge, mort, ressuscité, et vivant. Il est le chemin, la vérité, la vie, et personne ne vient à Dieu que par Lui. Il est et sera toujours notre seul méssage. Il est l’Espoir de ce monde, Il est l’Amour et toute ce que l’homme cherche qu’il le save ou non. Sa puissance et Son Esprit Saint nous a été donné gratuitement pour que nous puissions être guéris et délivrés de la mort et du péché. Jésus nous aime tous, Il nous appelle tous, Jésus a un plan pour ta vie et te connaissait avant que tu sois. Viens et suis Jésus.</p>
      <p>«Car Dieu a tant aimé le monde qu’il a donné son Fils unique, afin que quiconque croit en lui ne périsse point, mais qu’il ait la vie éternelle. Dieu, en effet, n’a pas envoyé son Fils dans le monde pour qu’il juge le monde, mais pour que le monde soit sauvé par lui.»<br/>Jean‬ ‭3:16-17‬ ‭LSG</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Jesus',
  metaInfo () {
    return {
      title: 'Jésus',
      meta: [
        { property: 'og:url', content: 'https://www.saintescene.com/' },
        { property: 'og:type', content: 'website' },
        { property: 'og:title', content: 'Sainte Scène' },
        { property: 'og:description', content: 'On de loeuvre de Jésus.' },
        {property: 'og:image', content: '../assets/saintescene.jpeg'}
      ]
    }
  }
}
</script>
<style lang="sass" scoped>
  #Jesus
    width: 100%
    height: 100%
  .hero-jesus
    background-image: url(../assets/saintescene.jpeg)
    background-position: top !important
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
</style>
