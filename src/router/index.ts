import { RouteRecordRaw, Router, createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import home from '../pages/home.vue'
import Layout from '../layout/index.vue'
import 'vue-router';

const routes: Readonly<RouteRecordRaw[]> = [
    {
        path: '/',
        redirect: '/login'        
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            name: '登录'
        },
        component: () => import('../pages/login.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        component: Layout,
        meta: {
            name: '首页'
        },
        children: [
            {
                path: '',
                name: 'dashboard',
                meta: {
                    name: '仪表盘'
                },
                component: () => import('../pages/dashboard.vue')
            }
        ]
    },
    {
        path: '/data',
        name: 'data',
        component: Layout,
        meta: {
            name: '数据中心'
        },
        children: [
            {
                path: 'logistics',
                meta: {
                    name: '物流管理'
                },
                component: () => import('../pages/dashboard.vue')
            },
            {
                path: 'distribute',
                meta: {
                    name: '分拣中心'
                },
                component: () => import('../pages/dashboard.vue')
            },
        ]
    },
    {
        path: '/auth',
        name: 'auth',
        component: Layout,
        meta: {
            name: '权限中心'
        },
        children: [
            {
                path: 'user',
                meta: {
                    name: '用户'
                },
                component: () => import('../pages/dashboard.vue')
            },
            {
                path: 'api',
                meta: {
                    name: '接口'
                },
                component: () => import('../pages/dashboard.vue')
            },
            {
                path: 'role',
                meta: {
                    name: '角色'
                },
                component: () => import('../pages/dashboard.vue')
            }
        ]
    },
    {
        path: '/personal',
        name: 'personal',
        meta: {
            name: '个人中心'
        },
        component: () => import('../pages/personal.vue')
    },
    {
        path: '/(.*)',
        name: 'NotFound',
        meta: {
            name: '404'
        },
        component: () => import('../pages/NotFound.vue')
    },
]

const router: Router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})
export default router