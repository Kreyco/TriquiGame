import Vue from 'vue'
import Vuex from 'vuex'

import { auth } from './auth.module';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: {
      users: true
    }
  },
  mutations: {
    loadingState(state, payload) {
      // eslint-disable-next-line no-prototype-builtins
      state.loading.users = payload.hasOwnProperty('users') ? payload.users : true;
    },
  },
  modules: {
    auth
  }
})
