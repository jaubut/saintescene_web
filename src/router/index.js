import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index'
import Jesus from '@/pages/Jesus'
import Evenement from '@/pages/evenement'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/jesus',
      name: 'Jesus',
      component: Jesus
    },
    {
      path: '/evenement',
      name: 'Evenement',
      component: Evenement
    }
  ]
})
