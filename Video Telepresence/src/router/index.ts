import { createRouter, createWebHistory } from 'vue-router'
import MainView from '../views/MainView.vue'
import ExampleComponentVue from '@/components/ExampleComponent.vue'
import IntroComponentVue from '@/components/IntroComponent.vue'
import ProsAndConsComponentVue from '@/components/ProsAndConsComponent.vue'

//{
//  path: '/about',
//  name: 'about',
//  // route level code-splitting
//  // this generates a separate chunk (About.[hash].js) for this route
//  // which is lazy-loaded when the route is visited.
//  component: () => import('../views/AboutView.vue')
//}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: IntroComponentVue
    },
    {
      path: '/',
      name: 'home',
      component: IntroComponentVue
    },
    {
      path: '/Definition',
      name: 'Definition',
      component: () => import('@/components/DefinitionComponent.vue')
    },
    {
      path: '/Overview',
      name: 'Overview',
      component: () => import('@/components/OverviewComponent.vue')
    },
    {
      path: '/Current-and-Future',
      name: 'Current and Future',
      component: () => import('@/components/CurrentAndFutureComponent.vue')
    },
    {
      path: '/Leading-Companies',
      name: 'Leading Companies',
      component: () => import('@/components/LeadingCompaniesComponent.vue')
    },
    {
      path: '/Pros-and-Cons',
      name: 'Pros and Cons',
      component: () => import('@/components/ProsAndConsComponent.vue')
    },
    {
      path: '/opinions',
      name: 'Opinions',
      component: () => import('@/components/OpinionsComponent.vue')
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: () => import('@/components/FAQComponent.vue')
    },
    {
      path: '/Additional-Links',
      name: 'Additional Links',
      component: () => import('@/components/AdditionalLinksComponent.vue')
    },
    {
      path: '/questions',
      name: 'Questions',
      component: () => import('@/components/QuestionsComponent.vue')
    },
  ]
})

export default router
