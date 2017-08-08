import Vue from 'vue'
// import VueResource from 'vue-resource'
import Router from 'vue-router'
import CartPage from '@/pages/CartPage'
import HomePage from '@/pages/HomePage'
import DetailsPage from '@/pages/DetailsPage'
import ProductPage from '@/pages/ProductPage'

Vue.use(Router)
// Vue.use(VueResource)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartPage
    },
    {
      path: '/details/:id',
      name: 'details',
      component: DetailsPage
    },
    {
      path: '/product/:id',
      name: 'product',
      component: ProductPage
    }
  ]
})
