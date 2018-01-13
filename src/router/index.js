import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import Index from '@/pages/Index'
import Jesus from '@/pages/Jesus'
import Evenement from '@/pages/evenement'
import About from '@/pages/about'
import Merch from '@/pages/boutique'

Vue.use(Meta)
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      props: true
    },
    {
      path: '/jesus',
      name: 'Jesus',
      component: Jesus,
      props: true
    },
    {
      path: '/evenement',
      name: 'Evenement',
      component: Evenement,
      props: true
    },
    {
      path: '/apropos',
      name: 'Apropos',
      component: About,
      props: true
    },
    {
      path: '/boutique',
      name: 'Merch',
      component: Merch,
      props: true
    }
  ]
})
