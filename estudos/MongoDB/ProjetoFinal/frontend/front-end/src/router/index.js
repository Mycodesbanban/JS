import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import store from '@/store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta:{
      requiresAuth:false
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
     meta:{
      requiresAuth:false
    }
  },{
    
    path: '/register',
     name: 'Register',
     // route level code-splitting
     // this generates a separate chunk (about.[hash].js) for this route
     // which is lazy-loaded when the route is visited.
     component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue'), meta:{
      requiresAuth:false
    }
  },{
    
    path: '/login',
     name: 'Login',
     // route level code-splitting
     // this generates a separate chunk (about.[hash].js) for this route
     // which is lazy-loaded when the route is visited.
     component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue'), meta:{
      requiresAuth: false
    }
  },
  {
    
    path: '/profile',
     name: 'Profile',
     // route level code-splitting
     // this generates a separate chunk (about.[hash].js) for this route
     // which is lazy-loaded when the route is visited.
     component: () => import(/* webpackChunkName: "about" */ '../views/Profile.vue'), meta:{
      requiresAuth:true
    }
  },
  {
    
    path: '/dashboard',
     name: 'Dashboard',
     // route level code-splitting
     // this generates a separate chunk (about.[hash].js) for this route
     // which is lazy-loaded when the route is visited.
     component: () => import(/* webpackChunkName: "about" */ '../views/Dashboard.vue'),  meta:{
      requiresAuth:true
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to , from , next) => {
  if(to.matched.some(record => record.meta.requiresAuth)){
   if(store.getters.authenticated === false){
    next({
      path:"/login", 
      params:{nextUrl: to.fullPath}
    })
   } else{
    next()
   }
  }else{
    next();
  }
})

export default router
