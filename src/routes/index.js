/** @format */

import { createRouter, createWebHistory } from 'vue-router'
import * as Layout from '@/layouts'
import * as Pages from '@/pages'

const { Authenticated, Guest } = Layout
const { Home, Login } = Pages

const routes = [
    {
        path: '/',
        component: Home,
        name: 'home:index',
        meta: {
            layout: [Authenticated, Guest]
        }
    },
    {
        path: '/login',
        component: Login,
        name: 'auth:login:index',
        meta: {
            layout: [Guest]
        }
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { top: 0, behavior: 'smooth' }
        }
    }
})

export default router
