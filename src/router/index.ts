import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import VerbTrainingView from '../views/VerbTrainingView.vue';
import NounTraining from '@/views/NounTraining.vue';


const router = createRouter({
  // Usa el historial basado en la URL
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/verb-training',
      name: 'verbTraining',
      component: VerbTrainingView // Aquí cargaremos el módulo de verbos
    },
      {
      path: '/noun-training',
      name: 'nounTraining',
      component: NounTraining // Aquí cargaremos el módulo de verbos
    }
    // Aquí puedes añadir la ruta para "sustantivos" más tarde:
    // {
    //   path: '/sustantive-training',
    //   name: 'sustantiveTraining',
    //   component: SustantiveTrainingView
    // }
  ]
});

export default router;