import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    // vai para a rome
    path: '/',
    // vai para a pagina home
    name: 'home',
    component: HomeView
  },
  { 
    // acessa a pagina pedidos
    path: '/pedidos',
    // acessando a pagina pedidos
    name: 'pedidos',
    // importando o component
    component: () => import(/* webpackChunkName: "about" */ '../views/pedidos.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
