import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router.js'

Vue.prototype.$ajax = axios

new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
