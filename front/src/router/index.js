import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store/index.js'
import Home from '../views/Home.vue'
import Login from '../views/ResponsiveLogRegisterForm.vue'
import NewsItem from '../views/NewsItem.vue'
import AdminPanel from '../views/AdminPanel'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/newsItem/:id',
    name: 'newsItem',
    component: NewsItem
  },
  {
    name: 'AdminPanel',
    path: '/adminPanel',
    component: AdminPanel
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

// router.beforeEach((to, from, next) => {
//   if (to.name !== 'Login' && !store.getters.isLoggedIn) next({ name: 'Login' })
//   else next()
// })

export default router
