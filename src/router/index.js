
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/home'
import Header from '@/components/header'
Vue.use(VueRouter)
const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/home'
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
