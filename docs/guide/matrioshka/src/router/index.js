import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Start from '@/components/Start'
import Grid from '@/components/Grid'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Start',
      name: 'Start',
      component: Start
    },
    {
      path: '/Grid',
      name: 'Grid',
      component: Grid
    }
  ]
})
