import { ref } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import DefaultLayout from '../layouts/DefaultLayout.vue'
import SimpleLayout from '../layouts/SimpleLayout.vue'
import HomeView from '../views/HomeView.vue'
import Login from '../views/Login.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    meta: { layout: DefaultLayout },
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    meta: { layout: SimpleLayout },
    component: Login
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('token');
  
  if (to.path !== '/login' && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router
