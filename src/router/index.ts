import { createRouter, createWebHistory } from 'vue-router'

//layout
import DefaultLayout from '@/layout/DefaultLayout.vue'

//pages
import HomeView from '../views/HomeView.vue'
import CreateView from '@/views/CreateView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { layout: DefaultLayout }
      // component: () => import('../views/HomeView.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: CreateView,
      meta: { layout: DefaultLayout }
    }
  ]
})

export default router
