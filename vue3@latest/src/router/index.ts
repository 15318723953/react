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
    },
    {
      path: '/bem',
      name: 'bem架构',
      component: () => import('../views/bem架构.vue')
    },
    {
      path: '/waterFall',
      name: '父子组件传值',
      component: () => import('../views/waterFall/index.vue')
    },
    {
      path: '/components',
      name: '递归组件全局组件局部组件',
      component: () => import('../views/components.vue')
    },
    {
      path: '/dynamicComponents',
      name: '动态组件',
      component: () => import('../views/dynamicComponents.vue')
    },
    {
      path: '/slot',
      name: '插槽',
      component: () => import('../views/slot.vue')
    },
    {
      path: '/async',
      name: '异步组件',
      component: () => import('../views/异步组件.vue')
    },
    {
      path: '/teleport',
      name: '传送组件',
      component: () => import('../views/传送组件.vue')
    },
    {
      path: '/keepAlive',
      name: 'keep-alive',
      component: () => import('../views/keep-alive.vue')
    },
    {
      path: '/transition',
      name: 'transition',
      component: () => import('../views/transition.vue')
    },
    {
      path: '/transitionGroup',
      name: 'transitionGroup',
      component: () => import('../views/transitionGroup.vue')
    },
    {
      path: '/provide',
      name: 'provide',
      component: () => import('../views/provide.vue')
    },
    {
      path: '/eventBus',
      name: 'eventBus',
      component: () => import('../views/eventBus.vue')
    },
  ]
})

export default router
