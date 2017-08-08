import Vue from 'vue'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.http.options.emulateJSON = true

const http = Vue.http
export default http
