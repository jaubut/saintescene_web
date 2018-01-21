// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Hero from '@/components/hero'

var contentful = require('contentful')

Vue.component('Hero', Hero)

Vue.use(contentful)
Vue.config.productionTip = false

router.afterEach(() => {
  window.scrollTo(0, 0)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
