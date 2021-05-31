import Vue from 'vue'
import App from './App.vue'
import router from './components/route/route'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
