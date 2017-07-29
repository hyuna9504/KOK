/* index.js */
import Vue from 'vue'
import Router from 'vue-router'
import VueOnsen from 'vue-onsenui'
import Login from '@/components/Login'
import Main from '@/components/Main'
import Select from '@/components/Select'
import Add from '@/components/Add'

Vue.use(Router);
Vue.use(VueOnsen);

export default new Router({
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
    }
  ]
})

