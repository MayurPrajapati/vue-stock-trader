import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import { routes } from './routes'
import { store } from './store/store'

Vue.config.productionTip = false

Vue.use(VueRouter)

let router = new VueRouter({ routes, mode: 'history' })

Vue.filter('currency', (value) => {
  return "$" + value.toLocaleString()
})

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
