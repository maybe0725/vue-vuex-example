import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // ====================
    // 컴포넌트의 data 역할.
    // ====================
    allUsers: [
      {
        userId: "hoza123",
        password: "123",
        name: "Hoza",
        address: "Seoul",
        src: "https://goo.gl/oqLfJR"
      },
      {
        userId: "max123",
        password: "456",
        name: "Max",
        address: "Berlin",
        src: "https://goo.gl/Ksk9B9"
      },
      {
        userId: "lego123",
        password: "789",
        name: "Lego",
        address: "Busan",
        src: "https://goo.gl/x7SpCD"
      }
    ]
  },
  getters: {
    // =======================
    // 컴포넌트의 computed 역할
    // =======================

    // function type 1
    // allUsersCount: function(state) {
    //   return state.allUsers.length;
    // }

    // function type 2
    allUsersCount: state => {
      return state.allUsers.length;
    },
    countOfSeoul: state => {
      let count = 0;
      state.allUsers.forEach(user => {
        if (user.address === "Seoul") count++;
      });
      return count;
    },
    percentOfSeoul: (state, getters) => {
      return Math.round((getters.countOfSeoul / getters.allUsersCount) * 100);
    }
  },
  mutations: {
    // ===============
    // state 값을 변경
    // ===============
    addUsers: (state, payload) => {
      state.allUsers.push(payload);
    }
  },
  actions: {
    // ============================================
    // state 를 변화 시키기위한 비즈니스 로직
    // 비즈니스 로직을 실행 후 mutations call
    // ============================================

    // addUsers: context => {
    //   context.commit('addUsers');
    // }
    // mutations 의 'addUsers' call
    addUsers: ({ commit }, payload) => {
      commit("addUsers", payload); // mutations > addUsers call
    }
  }
});
