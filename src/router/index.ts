import { createRouter, createWebHistory } from 'vue-router';
import { paths as routes } from './paths';

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
