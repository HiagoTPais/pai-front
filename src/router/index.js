import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginPage from '../views/LoginPage.vue'
import Guard from "../services/middleware"

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: Guard.auth
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
