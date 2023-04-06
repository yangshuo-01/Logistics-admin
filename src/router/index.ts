import { Router, createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import home from '../pages/home.vue'
import Layout from '../layout/index.vue'

const routes: any[] = [
    {
        path: '/',
        name: 'home',
        redirect: 'layout',
        component: home
    },
    {
        path: '/login',
        name: 'login',
        component: () => import('../pages/login.vue')
    },
    {
        path: '/layout',
        name: 'layout',
        component: Layout,
        children: [
            {
                path: 'main',
                component: () => import('../pages/main.vue')
            }
        ]
    },
    {
        path: '/example',
        name: 'example',
        component: () => import('../example/index.vue')
    },
    {
        path: '/(.*)',
        name: 'NotFound',
        component: () => import('../pages/NotFound.vue')
    },
]

const router:Router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
export default router