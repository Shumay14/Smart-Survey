import Vue from "vue";
import Vuex from "vuex";
import persistedstate from "vuex-persistedstate";
Vue.use(Vuex);

const store = new Vuex.Store({
  state() {
    return {
      KakaoUser: {},
      metamaskAdd: null,
      metamaskShortAdd: null,
      Selectcategory: [],
      vcgradeSelect: [],
      catelist: [],
      countlistlist: [],
      categorylist: [],
      vsgradelist: [],
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
