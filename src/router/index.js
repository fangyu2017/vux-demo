
import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () => import('@/components/home')
const Login = () => import('@/components/login')
const UserLists = () => import('@/components/userLists')
const AddUser = () => import('@/components/addUser')
const ChangePassword = () => import('@/components/changePassword')
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
      component: Home,
      redirect:'/userLists',
      children: [
        {
          path: '/userLists',
          name: 'userLists',
          component: UserLists
        },
        {
          path: '/adduser',
          name: 'adduser',
          component: AddUser
        },
        {
          path: '/changePassword',
          name: 'changePassword',
          component: ChangePassword
        }
      ]
    }

  ]
})
export default router
