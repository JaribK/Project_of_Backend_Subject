import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../src/pages/HomePage.vue'
import LoginPage from '../src/pages/LoginPage.vue'
import RegisterPage from '../src/pages/RegisterPage.vue'
import CreatePostPage from '../src/pages/CreatePostPage.vue'
import ProductPage from '../src/pages/ProductPage.vue'
import FeedbackPage from '../src/pages/FeedbackPage.vue'
import ProfilePage from '../src/pages/ProfilePage.vue'
import AdminManagePage from '../src/pages/AdminManagePage.vue'

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
    },
    {
        path: '/create-post',
        name: 'create-post',
        component: CreatePostPage,
    },
    {
        path: '/product/:id',
        name: 'product',
        component: ProductPage,
    },
    {
        path: '/feedback',
        name: 'feedback',
        component: FeedbackPage,
    },
    {
        path: '/profile',
        name: 'profile',
        component: ProfilePage,
    },
    {
        path: '/admin-manage',
        name: 'admin-manage',
        component: AdminManagePage,
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router