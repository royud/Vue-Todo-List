import { createRouter, createWebHistory } from 'vue-router'

//layout
import DefaultLayout from '@/layout/DefaultLayout.vue'

//pages
import HomeView from '../views/HomeView.vue'
import CreateView from '@/views/CreateView.vue'
import UpdateView from '@/views/UpdateView.vue'
import ReadView from '@/views/ReadView.vue'

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
    },
    {
      path: '/update',
      name: 'update',
      component: UpdateView,
      meta: { layout: DefaultLayout }
    },
    {
      path: '/read',
      name: 'read',
      component: ReadView,
      meta: { layout: DefaultLayout }
    }
  ]
})

export default router
