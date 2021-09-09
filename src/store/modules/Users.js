import { get, post, put, del } from '@/services/api.js'
import Vue from 'vue'

const state = {
  users: [],
  userSchema: { name: "", email: "" },
};

const getters = {
  getUsers: state => state.users,
  getSingleUser: state => id => state.users.find(u => u.id == id),
  getUserSchema: state  => state.userSchema,
};

const actions = {
  fetchUsers({ commit }) {
    get('users').then((res) => {
      commit('setUsers', res.data);
    });
  },

  updateUser({ commit }, user) {
    put(`users/${user.id}`, user).then((res) => {
      commit('updateUser', res.data);
    });
  },

  deleteUser({ commit }, id) {
    del(`users/${id}`).then(() => {
      commit('filterUsers', id);
    });
  },

  addNewUser({commit}, user) {
    post('users', user).then((res) => {
      commit('pushUser', res.data);
    });
  },

};


const mutations = {
  setUsers: ( state, users ) => state.users = users,
  updateUser: ( state, item ) => {
    const index = state.users.findIndex(u => u.id == item.id);
    if (index > -1) {
      Vue.set(state.users, index, item)
    }
  },
  filterUsers: ( state, id ) => (state.users = state.users.filter(u => u.id !== id)),
  pushUser: ( state, user ) => state.users.push(user),
};

export default {
  state,
  getters,
  actions,
  mutations,
}
