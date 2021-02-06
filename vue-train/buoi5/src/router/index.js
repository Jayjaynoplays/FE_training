import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/home.vue' 
// you can directly import from the components folder but using files in the view folder for more clearly understanding

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/about.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
