import Vue from "vue";
import Vuex from "vuex";
import persistedstate from "vuex-persistedstate";

import mixins from "./mixins";

Vue.use(Vuex);
Vue.mixin(mixins);

const store = new Vuex.Store({
  state() {
    return {
      KakaoUser: {},
      metamaskAdd: null,
      metamaskShortAdd: null,
      categorylist: [],
      vsgradelist: [],
      eng_category: ["travel", "car", "music", "food", "electronic-products"],
      kor_category: ["여행", "자동차", "음악", "음식", "전자제품"],
      vcgradeenglish: [
        "gender",
        "age",
        "edu",
        "residence",
        "Major",
        "income",
        "Certificate",
        "email",
        "phonenumber",
        "carowner",
      ],
      vcgradekor: [
        "성별",
        "나이대",
        "학력",
        "거주지",
        "전공",
        "연봉",
        "자격증",
        "이메일",
        "전화번호",
        "차량보유여부",
      ],
      test: 5,
    };
  },

  mutations: {
    KakaoUser(state, data) {
      state.KakaoUser = data;
    },
    metamaskAdd(state, data) {
      state.metamaskAdd = data;
      state.metamaskShortAdd =
        data.substring(0, 4) + "..." + data.substring(39, 42);
    },
    // countplus(state, data) {
    //   state.countlistlist.push(data);
    // },
    cateplus(state, data) {
      state.categorylist.push(data);
    },
    vcplus(state, data) {
      state.vsgradelist.push(data);
    },
    catededuplication(state, data) {
      state.categorylist.splice(state.categorylist.indexOf(data), 1);
    },
    vcdeduplication(state, data) {
      state.vsgradelist.splice(state.vsgradelist.indexOf(data), 1);
    },
    countnull(state) {
      state.categorylist.splice(0);
      state.vsgradelist.splice(0);
    },
    testtesttest(state) {
      // var tmp = ["travel", "car"];
      // return state.vsgradelist.indexOf(data);
      console.log("Asdf");
      return "Asdf";
    },
  },
  getters: {
    testtest(state, asdf) {
      var tmp = ["travel", "car"];
      // state.vsgradelist.indexOf(data);
      return state.test;
    },
  },
  plugins: [
    persistedstate({
      //cart만 영구 보존하겠다
      //path: ["cart"],
      path: ["KakaoUser"],
    }),
  ],
});

export default store;
