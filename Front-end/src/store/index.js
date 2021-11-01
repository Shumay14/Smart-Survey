import Vue from "vue";
import Vuex from "vuex";
import persistedstate from "vuex-persistedstate";
Vue.use(Vuex)

const store = new Vuex.Store({

  state() {
    return {
      KakaoUser: {},
      metamaskAdd: {}
    };
  },
  mutations: {
    KakaoUser(state, data) {
      state.KakaoUser = data;
    },
    metamaskAdd(state, data) {
      state.metamaskAdd = data;
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