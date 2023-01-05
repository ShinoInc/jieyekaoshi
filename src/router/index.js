import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/classification',
    name: 'classification',
    component: () => import('@/views/ClassificationView.vue')
  },
  {
    path: '/learning',
    name: 'learning',
    component: () => import('@/views/LearningView.vue')
  },
  {
    path: '/personal',
    name: 'personal',
    component: () => import('@/views/PersonalView.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
