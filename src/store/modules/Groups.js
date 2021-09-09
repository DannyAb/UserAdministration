import { get, del, post } from '@/services/api.js'

const state = {
  groups: [],
  userSchema: { name: "", color: "" },
};

const getters = {
  getGroups: state => state.groups,
  getGroupSchema: state  => state.groupSchema,
};

const actions = {
  fetchGroups({ commit }) {
    get('groups').then((res) => {
      commit('setGroups', res.data);
    });
  },

  deleteGroup({ commit }, id) {
    del(`groups/${id}`).then(() => {
      commit('filterGroups', id);
    });
  },

  addNewGroup({ commit }, group) {
    post('groups', group).then((res) => {
      commit('pushGroup', res.data);
    });
  },

};


const mutations = {
    setGroups: ( state, groups ) => state.groups = groups,
    filterGroups: ( state, id ) => (state.groups = state.groups.filter(g => g.id !== id)),
    pushGroup: ( state, group ) => state.groups.push(group),
};

export default {
  state,
  getters,
  actions,
  mutations,
}
