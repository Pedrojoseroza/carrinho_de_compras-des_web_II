import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import FavoritosView from '@/views/FavoriteView.vue'
import CartView from '@/views/CartView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },

    {
      path: '/favoritos',
      name: 'Favoritos',
      component: FavoritosView,
    },
    {
      path:'/carrinho',
      name: "Carrinho",
      component: CartView
    }
  ],
})


export default router
