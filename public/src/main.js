// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueTheMask from 'vue-the-mask'
import App from './App'
import router from './router'
import resource from './resource'
import store from './store/index'
import { sync } from 'vuex-router-sync'
sync(store, router, resource)

Vue.use(VueTheMask)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  resource,
  template: '<App/>',
  components: { App },
  http: {
    emulateJSON: true,
    emulateHTTP: true
  }
})
