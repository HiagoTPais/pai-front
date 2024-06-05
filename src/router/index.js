import { createRouter, createWebHistory } from 'vue-router'
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
  history: createWebHistory(),
  routes
})

export default router
