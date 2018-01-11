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
        <p>Nos réunions du dimanche sont..</p>
      </div>
    </div>
    <div class="event">
      <div class="picture">
        <p>Mardi</p>
      </div>
      <div class="line"></div>
      <div class="text-group">
        <h2>Bouclier du matin</h2>
        <span>7am - 9am</span>
        <p>Nos réunions du dimanche sont..</p>
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
        <p>Nos réunions du dimanche sont..</p>
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
