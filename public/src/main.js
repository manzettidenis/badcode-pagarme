// The following line loads the standalone build of Vue instead of the runtime-only build,
// so you don't have to do: import Vue from 'vue/dist/vue'
// This is done with the browser options. For the config, see package.json
import Vue from 'vue';
import VueRouter from 'vue-router';
import leftScreen from './components/leftScreen.vue';

Vue.use(VueRouter);

// views
let router = new VueRouter({
  routes: [
    { path: '/', component: require("./components/leftScreen/login/login.vue") }
    // { path: '/contacts', component: require("./contacts.vue") },
    // { path: '/events', component: require("./events.vue") },
  ]
});
var baserouter = require("./components/leftScreen.vue");

new Vue({
  router: router,
  render: function (createElement) {
    return createElement(baserouter);
  }
}).$mount("#app");
