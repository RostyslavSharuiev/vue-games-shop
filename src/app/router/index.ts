import { createRouter, createWebHistory } from 'vue-router';

import { MainView } from '@/pages';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: MainView,
    },
    {
      path: '/games/:id',
      name: 'games',
      component: () => import(/* webpackChunkName: "Game-View" */ '@/pages/game/app-game.vue'),
    },
    {
      path: '/error',
      name: 'error',
      component: () => import(/* webpackChunkName: "Error-View" */ '@/pages/error/app-error.vue'),
    },
  ],
});

export default router;
