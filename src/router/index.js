
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/home'
import Header from '@/components/header'
import Login from '@/components/login'
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/header',
      name: 'header',
      component: Header
    }
  ]
})
export default router
