import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Cost from '../views/Cost.vue'
import Service from '../views/Service.vue'
import Pay from '../views/Pay.vue'
import About from '../views/About.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cost',
    name: 'Cost',
    component: Cost
  },
  {
    path: '/service',
    name: 'Service',
    component: Service
  },
  {
    path: '/pay',
    name: 'Pay',
    component: Pay
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/*',
    name: 'Home_404',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
