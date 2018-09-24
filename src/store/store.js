import Vue from 'vue'
import Vuex from 'vuex'
import menu from './module/menu';
import status from './module/status';
import users from './module/users';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    menu,
    users,
    status
 }
})
