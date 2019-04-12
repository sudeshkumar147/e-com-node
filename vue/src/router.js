import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/Home.vue'
import Signup from './components/Signup.vue'
import Login from './components/Login.vue'
Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [{
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import( /* webpackChunkName: "about" */ './components/About.vue')
        },
        {
            path: '/signup',
            name: 'signup',
            component: Signup
        },
        {
            path: '/login',
            name: 'login',
            component: Login
        }
    ]
})