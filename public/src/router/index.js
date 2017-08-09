import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/pages/HomePage'
import DetailsPage from '@/pages/DetailsPage'
import CreatePage from '@/pages/CreatePage'
import ShopPage from '@/pages/ShopPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/shop',
      name: 'shop',
      component: ShopPage
    },
    {
      path: '/details/:where/:id',
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
