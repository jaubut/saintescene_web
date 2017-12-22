<template>
  <div id="blocPenser">
    <div class="photo" :style="{'background-image': 'url(' + pense.fields.background.fields.file.url + ')'}"></div>
    <div class="text">
      <h3 class="h3">{{ pense.fields.title }}</h3>
      <p class="p">{{ pense.fields.body }}</p>
      <a href="#">
        <div class="btn lire">Lire</div>
      </a>
    </div>
  </div>
</template>
<script>
export default {
  name: 'blocPenser',
  props: ['pense']
}
</script>
<style lang="sass" scoped>
</style>
