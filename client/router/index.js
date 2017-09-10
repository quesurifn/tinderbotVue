import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home'
import Girls from '../views/Girls'
import Dash from '../views/Dash'

Vue.use(Router)

export default new Router({
  mode: 'hash',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/prospects',
      component: Girls
    },
    {
      path: '/dash',
      component: Dash
    }
  ]
})
