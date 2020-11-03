import { createRouter, createWebHistory } from 'vue-router'
import Home from  "../components/pages/Home"
import Characters from "../components/pages/Characters"
import Episodes from "../components/pages/Episodes"
import Locations from "../components/pages/Locations"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/characters',
    name: 'Characters',
    component: Characters
  },
  {
    path: '/episodes',
    name: 'Episodes',
    component: Episodes
  },
  {
    path: '/locations',
    name: 'Locations',
    component: Locations
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
