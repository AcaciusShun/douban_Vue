import Vue from 'vue'
import Router from 'vue-router'

import PagesView from '../views/PagesView'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'PagesView',
      component: PagesView
    }
  ]
})
