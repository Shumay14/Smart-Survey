import Vue from "vue";
import VueRouter from "vue-router";

// 0. 메인페이지
import Main from "@/views/0.Main/_Main.vue";


// 1. 설문조사 - 1.SurveySearch
// import SurveyDrawUp from "@/views/1.SurveySearch/_SV_SurveyDrawUp.vue";
import SurveyList from "@/views/1.SurveySearch/_SurveyList.vue";
//import _SV_SurveyGrid_copy from "@/components/section/1.SurveySearch/_SV_SurveyGrid_copy.vue";


// 2. 설문등록 - 2.SurveyRegistration
import admin from "@/views/2.SurveyRegistration/_AD_AdminPage.vue";


// 3. 고객센터 - 3.CustomerService
import FAQ from "@/views/3.CustomerService/_SC_FAQ.vue";
import OneOnOne from "@/views/3.CustomerService/_SC_OneOnOne.vue";
import Notice from "@/views/3.CustomerService/_SC_Notice.vue";


// 4. 마이페이지 - 4.MyPage
import MyPage from "@/views/4.MyPage/_MP_MyPage.vue";
import MySurvey from "@/views/4.MyPage/_MP_MySurvey.vue";
import Favorite from "@/views/4.MyPage/_MP_Favorite.vue";



import _ModalSelect from "@/components/sections/1.SurveySearch/_ModalSelect.vue";

// 안쓰는 모듈
// import _TestEncryption from "@/components/_TestEncryption.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "NotFound" */ "@/views/404.vue"),
  },
  {
    path: "/contact",
    name: "Contact",
    component: admin,
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
  // {
  //   path: "/surveydrawup",
  //   name: "surveydrawup",
  //   component: SurveyDrawUp,
  // },
  {
    path: "/admin",
    name: "admin",
    component: admin
  },
  // {
  //   path: "/_SV_SurveyGrid_copy",
  //   name: "_SV_SurveyGrid_copy",
  //   component: _SV_SurveyGrid_copy,
  // },
  // {
  //   path: "/_TestEncryption",
  //   name: "_TestEncryption",
  //   component: _TestEncryption,
  // },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
