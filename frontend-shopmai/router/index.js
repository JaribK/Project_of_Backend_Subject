import {createRouter, createWebHistory } from 'vue-router'
import HomePage from '../src/pages/HomePage.vue'
import LoginPage from '../src/pages/LoginPage.vue'
import RegisterPage from '../src/pages/RegisterPage.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomePage,
    },
    {
        path: '/login',
        name: 'login',
        component: LoginPage,
    },
    {
        path: '/register',
        name: 'register',
        component: RegisterPage,
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router