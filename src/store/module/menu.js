const state = {
  //设置属性
  menuItems: {},
}
const getters = {
  //获取属性的状态
  getMenuItems: state => state.menuItems
}
const mutations = {
  //改变属性的状态
  setMenuItems(state, payload) {
    state.menuItems = payload;
  },
  //讲匹配到对象,在menuItems中删除
  removeMenuItems(state, payload) {
    state.menuItems.forEach((item, index) => {
      if (item == payload) {
        state.menuItems.splice(index, 1)
      }
    });
  },
  //讲新添加的pizza push 到menuItems中
  pushToMunuItems(state, payload) {
    state.menuItems.push(payload)
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
