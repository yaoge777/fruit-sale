import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'


const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'main',
    redirect:'/home',
    component: () => import('@/views/MainHome.vue'),
    children:[
      {
      
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "about" */ '@/views/HomeView.vue')
      },

      {
      
        path: '/cart',
        name: 'cart',
        component: () => import(/* webpackChunkName: "about" */ '@/views/CartView.vue')
      }
  ]
  },

  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginView.vue'),
  }


  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to) => {
  const token = sessionStorage.getItem('token')


  if (token !== '1' && to.name !== 'login'){
    return {name:'login'}
  } else if (token === '1' && to.name === 'login'){
    return {name:'home'}
  }
})
export default router
