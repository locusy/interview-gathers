import Vue from 'vue'
// import "core-js/stable";
// import "regenerator-runtime/runtime";

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
