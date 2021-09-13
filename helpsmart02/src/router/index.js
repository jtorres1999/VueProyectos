import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/Productos',
    
    component: () => import(/* webpackChunkName: "about" */ '../components/Productos.vue')
  },
  {
    path: '/Contactenos',
    component: () => import(/* webpackChunkName: "about" */ '../components/Contactenos.vue')
  },
  {
    path: '/Multisensor-para-planta-electrica',
    component: () => import(/* webpackChunkName: "about" */ '../views/Producto3.vue')
  },
  {
    path: '/Sensor-de-temperatura',
    component: () => import(/* webpackChunkName: "about" */ '../views/Producto2.vue')
  },
  {
    path: '/Sensor-de-temperatura-y-humedad',
    component: () => import(/* webpackChunkName: "about" */ '../views/Producto1.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
