import Vue from 'vue'
import Main from './components/main.vue'

// eslint-disable-next-line no-unused-vars
const application = new Vue({
  el: '#app',
  render: handler => handler(Main),
})
