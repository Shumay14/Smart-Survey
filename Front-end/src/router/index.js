import Vue from 'vue'
import VueRouter from 'vue-router'
import FAQ from "../views/_SC_FAQ.vue";
import OneOnOne from "../views/_SC_OneOnOne.vue";
import Notice from "../views/_SC_Notice.vue";
import Favorite from "../views/_MP_Favorite.vue";
import MyPage from "../views/_MP_MyPage.vue";
import SurveyDrawUp from "../views/_SV_SurveyDrawUp.vue";
import SurveyList from "../views/_SurveyList.vue";


Vue.use(VueRouter)

const routes = [{
        path: '*',
        name: 'NotFound',
        component: () => import( /* webpackChunkName: "NotFound" */ '../views/404.vue')
    },
    {
        path: '/',
        name: 'HomeOne',
        component: () => import( /* webpackChunkName: "home-one" */ '../views/HomeOne.vue')
    },
    {
        path: '/home-two',
        name: 'HomeTwo',
        component: () => import( /* webpackChunkName: "home-two" */ '../views/HomeTwo.vue')
    },
    {
        path: '/home-three',
        name: 'HomeThree',
        component: () => import( /* webpackChunkName: "home-three" */ '../views/HomeThree.vue')
    },
    {
        path: '/about',
        name: 'About',
        component: () => import( /* webpackChunkName: "about" */ '../views/About.vue')
    },
    {
        path: '/service',
        name: 'Service',
        component: () => import( /* webpackChunkName: "service" */ '../views/Service.vue')
    },
    {
        path: '/service-details',
        name: 'ServiceDetails',
        component: () => import( /* webpackChunkName: "service-details" */ '../views/ServiceDetails.vue')
    },
    {
        path: '/service-details-right',
        name: 'ServiceDetailsRight',
        component: () => import( /* webpackChunkName: "service-details-right" */ '../views/ServiceDetailsRight.vue')
    },
    {
        path: '/project',
        name: 'Project',
        component: () => import( /* webpackChunkName: "project" */ '../views/Project.vue')
    },
    {
        path: '/project-details',
        name: 'ProjectDetails',
        component: () => import( /* webpackChunkName: "project-details" */ '../views/ProjectDetails.vue')
    },
    {
        path: '/blog-left-sidebar',
        name: 'BlogLeftSidebar',
        component: () => import( /* webpackChunkName: "blog-left-sidebar" */ '../views/BlogLeftSidebar.vue')
    },
    {
        path: '/blog-right-sidebar',
        name: 'BlogRightSidebar',
        component: () => import( /* webpackChunkName: "blog-right-sidebar" */ '../views/BlogRightSidebar.vue')
    },
    {
        path: '/blog-details',
        name: 'BlogDetails',
        component: () => import( /* webpackChunkName: "blog-details" */ '../views/BlogDetails.vue')
    },
    {
        path: '/blog-details-right-sidebar',
        name: 'BlogDetailsRightSidebar',
        component: () => import( /* webpackChunkName: "blog-details-right-sidebar" */ '../views/BlogDetailsRightSidebar.vue')
    },
    {
        path: '/contact',
        name: 'Contact',
        component: () => import( /* webpackChunkName: "contact" */ '../views/_AD_AdminPage.vue')
    },
    // DID Project 팀 프로젝트
    {
        path: "/mypage",
        name: "mypage",
        component: MyPage,
    }, {
        path: "/favorite",
        name: "favorite",
        component: Favorite,
    }, {
        path: "/surveylist",
        name: "surveylist",
        component: SurveyList,
    }, {
        path: "/faq",
        name: "faq",
        component: FAQ,
    }, {
        path: "/oneonone",
        name: "oneonone",
        component: OneOnOne,
    }, {
        path: "/notice",
        name: "notice",
        component: Notice,
    }, {
        path: "/surveydrawup",
        name: "surveydrawup",
        component: SurveyDrawUp,
    },
    {
        path: '/admin',
        name: 'admin',
        component: () => import( /* webpackChunkName: "admin" */ '../views/_AD_AdminPage.vue')
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router