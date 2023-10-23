import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/about.vue')
    },
    {
      path: '/Class',
      name: 'Class',
      component: () => import('../views/Ourstudents.vue')
    },
    {
      path: '/Professors',
      name: 'Professors',
      component: () => import('../views/Professors.vue')
    },
   
  ]
})

export default router

  //  {
  //     path: '/about',
  //     name: 'about',
  //     component: () => import('../views/about.vue')
  //   }
