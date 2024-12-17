import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '@/views/HomePage.vue';
import PasswordPage from '@/views/PasswordPage.vue';
import LoginPage from '@/views/LoginPage.vue';
import ClubPage from '@/views/ClubPage.vue';
import ServicePage from '@/views/ServicePage.vue';
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomePage,
    },
    {
      path:'/password',
      name:'password',
      component:PasswordPage
    },
    {
      path:'/login',
      name:'login',
      component:LoginPage
    },
    {
      path:'/service',
      name:'service',
      component:ServicePage
    },
    {
      path:'/club',
      name:'club',
      component:ClubPage
    }
    
  ],
})

export default router
