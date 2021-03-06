import Vue from 'vue'
import Router from 'vue-router'
import Meta from 'vue-meta'
import Index from '@/pages/Index'
import Jesus from '@/pages/Jesus'
import Evenement from '@/pages/evenement'
import About from '@/pages/about'
import Merch from '@/pages/boutique'
import Implique from '@/pages/impliquetoi'
import Messages from '@/pages/messages/index'
import Try from '@/pages/messages/try'

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
    },
    {
      path: '/implique',
      name: 'Implique',
      component: Implique,
      props: true
    },
    {
      path: '/messages',
      name: 'Messages',
      component: Messages,
      props: true
    },
    {
      path: '/messages/try',
      name: 'Try',
      component: Try,
      props: true
    }
  ]
})
