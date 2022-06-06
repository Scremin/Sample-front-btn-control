import Vue from 'vue'
import VueRouter from 'vue-router'
import PainelPix from '../components/PainelPix.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PainelPix',
    component: PainelPix
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
