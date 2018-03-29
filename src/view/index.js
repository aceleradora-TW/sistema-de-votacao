import Vue from 'vue'
import Main from './components/main.vue'

const application = new Vue({
  el: '#app',
  render: handler => handler(Main)
})