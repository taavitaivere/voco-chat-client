import { createStore } from "vuex";
import { post, get } from "axios";

export default createStore({
  // state pannakse paika state väärtused
  state: {
    _STATE: 0,
    _NAME: null,
    _MESSAGE: [],
  },
  // getteritega saad vaadata state väärtusi
  getters: {
    _STATE: (state) => state._STATE,
    _NAME: (state) => state._NAME,
    _MESSAGE: (state) => state._MESSAGE,
  },
  //mutatsioonidega muudad state väärtusi
  mutations: {
    setState(state, payload) {
      state._STATE = payload;
    },

    setName(state, payload) {
      state._NAME = payload;
    },

    setAllMessages(state, payload) {
      state._MESSAGE = payload;
    },
  },
  /* axios stuff +

commit > mutation
dispatch > action

commit('funktsiooni-nimi', data/payload)
dispatch('funktsiooni-nimi', data/payload)

*/
  actions: {
    async getMessages({ commit }) {
      await get("http://localhost:3000/get/all/messages").then((response) =>
        commit("setAllMessages", response.data)
      );
    },

    async sendMessage({ commit, dispatch }, message) {
      await post("http://localhost:3000/send/messages", message).then(
        (response) => dispatch("getMessage")
      );
    },
  },
});
