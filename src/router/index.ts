import { RouteRecordRaw, Router, createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import Layout from '../layout/index.vue'
import 'vue-router';



const routes: Readonly<RouteRecordRaw[]> = [
    {
        path: '/',
        redirect: '/login',
        meta: {
            hidden: true,
        }    
    },
    {
        path: '/login',
        name: 'login',
        meta: {
            hidden: true,
            name: '登录'
        },
        component: () => import('../pages/login.vue')
    },
    {
        path: '/dashboard',
        name: 'dashboard',
        redirect: '/dashboard/panel',
        component: Layout,
        meta: {
            name: '首页',
            icon: 'HomeFilled',
        },
        children: [
            {
                path: '/dashboard/panel',
                name: 'dashboard',
                meta: {
                    name: '仪表盘',
                    icon: 'Odometer',
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
            name: '数据中心',
            icon: 'Menu',
        },
        children: [
            {
                path: 'logistics',
                meta: {
                    name: '物流管理',
                    icon: '#icon-a-ziyuan6',
                },
                component: () => import('../pages/dashboard.vue')
            },
            {
                path: 'distribute',
                meta: {
                    name: '分拣中心',
                    icon: '#icon-log',
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
            name: '权限中心',
            icon: 'Lock',
        },
        children: [
            {
                path: 'user',
                meta: {
                    name: '用户',
                    icon: '#icon-group_fill',
                },
                component: () => import('../pages/dashboard.vue')
            },
            {
                path: 'api',
                meta: {
                    name: '接口',
                    icon: '#icon-suo1',
                },
                component: () => import('../pages/dashboard.vue')
            },
            {
                path: 'role',
                meta: {
                    name: '角色',
                    icon: '#icon-a-icon-changeadministrator',
                },
                component: () => import('../pages/dashboard.vue')
            }
        ]
    },
    {
        path: '/personal',
        name: 'personal',
        meta: {
            name: '个人中心',
            icon: '#icon-touxiang',
        },
        component: () => import('../pages/personal.vue')
    },
    {
        path: '/(.*)',
        name: 'NotFound',
        meta: {
            hidden: true,
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