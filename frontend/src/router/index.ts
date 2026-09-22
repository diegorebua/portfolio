import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import SkillsView from '../views/SkillsView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import ExperienceView from '../views/ExperienceView.vue';
import ContactView from '../views/ContactView.vue';
import { usePageLoader } from '../composables/usePageLoader';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { title: 'Diego Rebuá | Início' }
  },
  {
    path: '/sobre',
    name: 'about',
    component: AboutView,
    meta: { title: 'Diego Rebuá | Sobre Mim' },
    alias: '/about'
  },
  {
    path: '/stack',
    name: 'skills',
    component: SkillsView,
    meta: { title: 'Diego Rebuá | Arsenal Tecnológico' },
    alias: '/skills'
  },
  {
    path: '/projetos',
    name: 'projects',
    component: ProjectsView,
    meta: { title: 'Diego Rebuá | Projetos em Destaque' },
    alias: '/projects'
  },
  {
    path: '/trajetoria',
    name: 'experience',
    component: ExperienceView,
    meta: { title: 'Diego Rebuá | Minha Trajetória' },
    alias: '/experience'
  },
  {
    path: '/contato',
    name: 'contact',
    component: ContactView,
    meta: { title: 'Diego Rebuá | Contato' },
    alias: '/contact'
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    }
    return { top: 0, left: 0, behavior: 'smooth' };
  }
});

const { startLoading, finishLoading } = usePageLoader();

router.beforeEach((to, from, next) => {
  if (to.path !== from.path) {
    startLoading(to.path);
  }
  next();
});

router.afterEach((to) => {
  if (to.meta?.title) {
    document.title = to.meta.title as string;
  }
  finishLoading();
});

export default router;
