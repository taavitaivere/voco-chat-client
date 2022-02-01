import { createStore } from "vuex";

export default createStore({
  state: {
    _STATE: 0,
    _NAME: null,
    _MESSAGE: []
  },

  getters: {
    _STATE: state => state._STATE,
    _NAME: state => state._NAME,
    _MESSAGE: state => state._MESSAGE
  },

  mutations: {
    setState( state, payload ) {
      state._STATE = payload;
    },

    setName ( state, payload ) {
      state._NAME = payload;
    },

    setMessage ( state, payload ) {
      state._MESSAGE.push(
          {
            message: payload,
            name: state._NAME
          }
      );

    }
  },
  actions: {}
});
