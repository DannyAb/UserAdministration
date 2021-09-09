import Vue from 'vue'
import Vuex from 'vuex'

import Users from './modules/Users';
import Groups from './modules/Groups';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Users,
    Groups,
  }
})
