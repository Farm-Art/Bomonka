import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {'path': '/', redirect: '/index'},
  {
    path: '/index',
    name: 'Home',
    component: Home
  },
  {
    path: '/contacts/',
    name: 'Contacts',
    component: () => import('../views/Contacts.vue')
  },
  {
    path: '/guides/asm/',
    name: 'ASM',
    component: () => import('../views/ASMGuides.vue')
  },
  {
    path: '/guides/asm/lab1/',
    name: 'ASM-lab1',
    component: () => import('../views/asm-lab1.vue')
  },
  {
    path: '/guides/asm/prerequisites/',
    name: 'ASM-prerequisites',
    component: () => import('../views/asm-prerequisites')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
