import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../src/pages/HomePage.vue'
import LoginPage from '../src/pages/LoginPage.vue'
import RegisterPage from '../src/pages/RegisterPage.vue'
import CreatePostPage from '../src/pages/CreatePostPage.vue'
import EditPostPage from '../src/pages/EditPostPage.vue'
import ProductPage from '../src/pages/ProductPage.vue'
import CreateProductPage from '../src/pages/CreateProductPage.vue'
import EditProductPage from '../src/pages/EditProductPage.vue'
import FeedbackPage from '../src/pages/FeedbackPage.vue'
import ProfilePage from '../src/pages/ProfilePage.vue'
import AdminManagePage from '../src/pages/AdminManagePage.vue'
import HomeNoLoginPage from '../src/pages/HomeNoLoginPage.vue'


const routes = [
    {
        path: '/home',
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
        path: '/post/:id',
        name: 'product',
        component: ProductPage,
    },
    {
        path: '/post/:id/edit-post',
        name: 'edit-post',
        component: EditPostPage,
    },
    {
        path: '/post/:id/create-product',
        name: 'create-product',
        component: CreateProductPage,
    },
    {
        path: '/post/:id/edit-product/:productId',
        name: 'edit-product',
        component: EditProductPage,
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
    {
        path: '/',
        name: 'home-no-login',
        component: HomeNoLoginPage,
    }
]


const router = createRouter({
    history: createWebHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    if (to.path !== '/login' && to.path !== '/register' && to.path !== '/' && localStorage.getItem('token') == null) {
      next('/');
    } else {
      next();
    }
});

export default router