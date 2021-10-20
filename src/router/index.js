import Vue from 'vue'
import VueRouter from 'vue-router'
import Cafe from "../components/Cafe";
import CafeView from "../components/CafeView";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Cafe',
    component: Cafe
  },
  {
    path: '/cafe/view',
    name: 'Cafe',
    component: CafeView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
