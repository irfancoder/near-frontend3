/** @format */

import { createRouter, createWebHistory } from 'vue-router'
import * as Layout from '@/layouts'
import * as Pages from '@/pages'

const { Authenticated, Guest } = Layout
const { Home } = Pages

const routes = [
    {
        path: '/',
        component: Home,
        meta: {
            layout: [Authenticated, Guest]
        }
    }
]

export default createRouter({
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
