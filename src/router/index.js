import { createRouter, createWebHistory } from 'vue-router';
import AiSoftwarePage from '@/views/AISoftwarePage.vue';
import CompanyPage from '@/views/CompanyPage.vue';
import ContactPage from '@/views/ContactPage.vue';
import HomePage from '@/views/HomePage.vue';
import IndustryPage from '@/views/IndustryPage.vue';
import ServicesPage from '@/views/ServicesPage.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },
    {
        path: '/software',
        name: 'AISoftware',
        component: AiSoftwarePage
    },
    {
        path: '/company',
        name: 'Company',
        component: CompanyPage
    },
    {
        path: '/contact',
        name: 'Contact',
        component: ContactPage
    },
    {
        path: '/industry',
        name: 'Industry',
        component: IndustryPage
    },
    {
        path: '/services',
        name: 'Services',
        component: ServicesPage
    },
    {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('@/views/NotFound.vue')
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
