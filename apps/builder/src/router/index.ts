import { createRouter, createWebHistory } from 'vue-router'
import DataSourceView from '@/views/DataSourceView.vue';
import AppView from '@/views/AppView.vue';
import LayoutView from '@/views/LayoutView.vue';
import ActionsView from '@/views/ActionsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/app',
      name: 'app',
      component: AppView,
      children: [
        { path: 'dataSource', name: 'dataSource', component: DataSourceView },
        { path: 'layout', name: 'layout', component: LayoutView },
        { path: 'actions', name: 'actions', component: ActionsView },
      ]
    }
  ],
})

export default router
