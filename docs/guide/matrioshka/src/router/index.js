import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Start from '@/components/Start'
import Grid from '@/components/Grid'
import Palette from '@/components/Palette'
import Icons from '@/components/Icons'
import Responsive from '@/components/Responsive'

Vue.use(Router)

export default new Router({
  mode: 'history',
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
    },
    {
      path: '/Palette',
      name: 'Palette',
      component: Palette
    },
    {
      path: '/Icons',
      name: 'Icons',
      component: Icons
    },
    {
      path: '/Responsive',
      name: 'Responsive',
      component: Responsive
    }
  ]
})
