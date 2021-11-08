import Vue from 'vue'
import App from './App.vue'
import router from './router'
import mock from './mock-data.js'
import mock2 from './mock-activities.js'
import mock3 from './mock-news.js'
Vue.config.productionTip = false


let data = {
  products: mock,
  cart: [],
  activities: mock2,
  news: mock3,
  cand1Votes: 33,
  cand2Votes: 34,

}

new Vue({
  router,
  data,
  render: h => h(App)
}).$mount('#app')
