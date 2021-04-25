import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import feather from 'vue-icon'
import VueTilt from 'vue-tilt.js'

Vue.use(feather, 'v-icon')
Vue.use(VueTilt)
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
