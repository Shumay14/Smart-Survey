import Vue from "vue";
import Vuex from "vuex";
import persistedstate from "vuex-persistedstate";
Vue.use(Vuex)

const store = new Vuex.Store({

  state() {
    return {
      KakaoUser: {},
      metamaskAdd: {},
      metamaskShortAdd: ""
    };
  },
  mutations: {
    KakaoUser(state, data) {
      state.KakaoUser = data;
    },
    metamaskAdd(state, data) {
      state.metamaskAdd = data;
      state.metamaskShortAdd = data.substring(0,4) + "..." + data.substring(39,42);
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