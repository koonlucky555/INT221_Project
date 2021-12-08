import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',

    component: () => import('../views/About.vue')
  },
  {
    path: '/product',
    name: 'Product',
    component: () => import('../views/Product.vue')
  },
  {
    path:'/addProduct',
    name:'addProduct',
    component: () => import('../views/AddProduct.vue')
  },
  {
    path: '/edit/:id',
    name: 'Edit',
    component:()=> import('../components/BasedEditProduct.vue'),
    props: true
  },
  {
    path: '/show/:id',
    name: 'Modal',
    component:()=> import('../components/ShowProduct.vue'),
    props: true
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
