import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
    {
        path: '*',
        name: 'NotFound',
        component: () => import(/* webpackChunkName: "NotFound" */ '../views/404.vue')
    },
    {
        path: '/',
        name: 'HomeOne',
        component: () => import(/* webpackChunkName: "home-one" */ '../views/HomeOne.vue')
    },
    {
        path: '/home-two',
        name: 'HomeTwo',
        component: () => import(/* webpackChunkName: "home-two" */ '../views/HomeTwo.vue')
    },
    {
        path: '/home-three',
        name: 'HomeThree',
        component: () => import(/* webpackChunkName: "home-three" */ '../views/HomeThree.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/service',
        name: 'Service',
        component: () => import(/* webpackChunkName: "service" */ '../views/Service.vue')
    },
    {
        path: '/service-details',
        name: 'ServiceDetails',
        component: () => import(/* webpackChunkName: "service-details" */ '../views/ServiceDetails.vue')
    },
    {
        path: '/service-details-right',
        name: 'ServiceDetailsRight',
        component: () => import(/* webpackChunkName: "service-details-right" */ '../views/ServiceDetailsRight.vue')
    },
    {
        path: '/project',
        name: 'Project',
        component: () => import(/* webpackChunkName: "project" */ '../views/Project.vue')
    },
    {
        path: '/project-details',
        name: 'ProjectDetails',
        component: () => import(/* webpackChunkName: "project-details" */ '../views/ProjectDetails.vue')
    },
    {
        path: '/blog-left-sidebar',
        name: 'BlogLeftSidebar',
        component: () => import(/* webpackChunkName: "blog-left-sidebar" */ '../views/BlogLeftSidebar.vue')
    },
    {
        path: '/blog-right-sidebar',
        name: 'BlogRightSidebar',
        component: () => import(/* webpackChunkName: "blog-right-sidebar" */ '../views/BlogRightSidebar.vue')
    },
    {
        path: '/blog-details',
        name: 'BlogDetails',
        component: () => import(/* webpackChunkName: "blog-details" */ '../views/BlogDetails.vue')
    },
    {
        path: '/blog-details-right-sidebar',
        name: 'BlogDetailsRightSidebar',
        component: () => import(/* webpackChunkName: "blog-details-right-sidebar" */ '../views/BlogDetailsRightSidebar.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
