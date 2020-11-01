import Vue from 'vue'
import App from './App.vue'
import router from './router'

new Vue({
  el: '#app',
  render: h => h(App),

  // 라우터 객체를 넘겨준다
  router,
})
