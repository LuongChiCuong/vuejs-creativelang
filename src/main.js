// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Resource from 'vue-resource'
import App from './App'
import CompList from './components/List'
import CompEbook from './components/Ebook'
import CompAbout from './components/About'
import CompContact from './components/Contact'
import CompCountDown from './components/CountDown'

Vue.use(VueRouter)
Vue.use(Resource)

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', name: 'app', component: App },
    { path: '/list', name: 'list', component: CompList },
    { path: '/ebook', name: 'ebook', component: CompEbook },
    { path: '/about', name: 'about', component: CompAbout },
    { path: '/contact', name: 'contact', component: CompContact },
    { path: '/countdown', name: 'countdown', component: CompCountDown }
  ]
})
/* eslint-disable no-new */
var root = new Vue({
  el: '#app',
  router: router,
  template: '<router-view></router-view>'
})
document.addEventListener('DOMContentLoaded', function () {
  root.$mount('#app')
})
