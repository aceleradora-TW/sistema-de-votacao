import Vue from 'vue'
import VueResource from 'vue-resource'
import Main from './components/main.vue'

Vue.use(VueResource)

// eslint-disable-next-line no-unused-vars
const application = new Vue({
  el: '#app',
  render: handler => handler(Main),
})
