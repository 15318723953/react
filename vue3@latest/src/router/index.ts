import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/ref.vue')
    },
    {
      path: '/reactive',
      name: 'reactive',
      component: () => import('../views/reactive.vue')
    },
    {
      path: '/to全家桶',
      name: 'to全家桶',
      component: () => import('../views/to全家桶.vue')
    },
    {
      path: '/computed',
      name: 'computed',
      component: () => import('../views/computed.vue')
    },
    {
      path: '/watch',
      name: 'watch',
      component: () => import('../views/watch.vue')
    },
    {
      path: '/watchEffect',
      name: 'watchEffect',
      component: () => import('../views/watchEffect.vue')
    },
    {
      path: '/shengmingzhouqi',
      name: '生命周期',
      component: () => import('../views/生命周期.vue')
    }
  ]
})

export default router
