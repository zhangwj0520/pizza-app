const state = {
    isLogin:false
}
const getters = {
   isLogin:state=>state.isLogin
}
const mutations = {
      //更改用户的状态信息
  userStatus(state, user) {
    if (user) {
      state.isLogin = true;
    } else {
      state.isLogin = false;
    }
  }
}
const actions = {

}

export default {
  state,
  getters,
  mutations,
  actions
}
