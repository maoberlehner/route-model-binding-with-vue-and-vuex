import axios from 'axios';
import { getField, updateField } from 'vuex-map-fields';

export default {
  namespaced: true,
  actions: {
    async byId({ commit }, id) {
      const { data: user } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`);

      commit('set', user);
    },
  },
  getters: {
    getField,
  },
  mutations: {
    clear(state) {
      /* eslint-disable no-param-reassign */
      state.id = null;
      state.email = '';
      state.username = '';
      /* eslint-enable */
    },
    set(state, user) {
      /* eslint-disable no-param-reassign */
      state.id = user.id;
      state.email = user.email;
      state.username = user.username;
      /* eslint-enable */
    },
    updateField,
  },
  state: {
    id: null,
    email: '',
    username: '',
  },
};
