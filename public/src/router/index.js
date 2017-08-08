import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import DetailsPage from '@/pages/DetailsPage'
import CreatePage from '@/pages/CreatePage'
import BuyPage from '@/pages/BuyPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/buy',
      name: 'buy',
      component: BuyPage
    },
    {
      path: '/details/:id',
      name: 'details',
      component: DetailsPage
    },
    {
      path: '/create',
      name: 'create',
      component: CreatePage
    }
  ]
})
