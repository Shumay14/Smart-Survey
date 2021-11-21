import Vue from "vue";
import VueRouter from "vue-router";

import Main from "../views/_Main.vue";
import FAQ from "../views/_SC_FAQ.vue";
import OneOnOne from "../views/_SC_OneOnOne.vue";
import Notice from "../views/_SC_Notice.vue";
import Favorite from "../views/_MP_Favorite.vue";
import MyPage from "../views/_MP_MyPage.vue";
import MySurvey from "../views/_MP_MySurvey.vue";
import SurveyDrawUp from "../views/_SV_SurveyDrawUp.vue";
import SurveyList from "../views/_SurveyList.vue";
import _SV_SurveyGrid_copy from "../../src/components/_SV_SurveyGrid_copy.vue";
import _ModalSelect from "../../src/components/sections/_ModalSelect.vue";
import _TestEncryption from "../views/_TestEncryption.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "NotFound" */ "../views/404.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: () =>
      import(/* webpackChunkName: "contact" */ "../views/_AD_AdminPage.vue"),
  },
  // DID Project 팀 프로젝트
  {
    path: "/",
    name: "main",
    component: Main,
  },
  {
    path: "/mypage",
    name: "mypage",
    component: MyPage,
  }, {
    path: "/mysurvey",
    name: "mysurvey",
    component: MySurvey,
  },
  {
    path: "/favorite",
    name: "favorite",
    component: Favorite,
  },
  {
    path: "/_ModalSelect",
    name: "_ModalSelect",
    component: _ModalSelect,
  },
  {
    path: "/surveylist",
    name: "surveylist",
    component: SurveyList,
  },
  {
    path: "/faq",
    name: "faq",
    component: FAQ,
  },
  {
    path: "/oneonone",
    name: "oneonone",
    component: OneOnOne,
  },
  {
    path: "/notice",
    name: "notice",
    component: Notice,
  },
  {
    path: "/surveydrawup",
    name: "surveydrawup",
    component: SurveyDrawUp,
  },
  {
    path: "/admin",
    name: "admin",
    component: () =>
      import(/* webpackChunkName: "admin" */ "../views/_AD_AdminPage.vue"),
  },
  {
    path: "/_SV_SurveyGrid_copy",
    name: "_SV_SurveyGrid_copy",
    component: _SV_SurveyGrid_copy,
  },
  {
    path: "/_TestEncryption",
    name: "_TestEncryption",
    component: _TestEncryption,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
