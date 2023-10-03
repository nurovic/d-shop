import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ProductListView from '../views/ProductListView.vue'
import OrderCardView from '../views/OrderCardView.vue'
import ProductDetail from '../views/ProductDetail.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/products',
      name: 'products',
      component: ProductListView
    },
    {
      path: '/order-card',
      name: 'order-card',
      component: OrderCardView
    },
    {
      path: '/product/:id',
      name: 'product-detail',
      component: ProductDetail
    }
  ]
})

export default router
