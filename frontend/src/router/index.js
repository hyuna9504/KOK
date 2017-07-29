/* index.js */
import Vue from 'vue'
import Router from 'vue-router'
import VueOnsen from 'vue-onsenui'
import Login from '@/components/Login'
import Main from '@/components/Main'
import Select from '@/components/Select'
import Add from '@/components/Add'
import Add2 from '@/components/Add2'
import Loding from '@/components/Loding'

Vue.use(Router);
Vue.use(VueOnsen);

export default new Router({
  mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/select',
      name: 'Select',
      component: Select
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/add2',
      name: 'Add2',
      component: Add2
    },
    {
      path: '/loding',
      name: 'Loding',
      component: Loding
    }
  ]
})

