import { createRouter, createWebHistory } from 'vue-router';

import EmptyView from '../views/EmptyView.vue';

export const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: EmptyView,
    },
  ],
});
