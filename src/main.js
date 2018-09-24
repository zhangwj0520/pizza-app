import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'
import axios from 'axios';

//默认根路径
axios.defaults.baseURL = 'https://wd9985185382vlksfw.wilddogio.com/'
//配置Vue原型(在任何组件中都可以使用axios)
Vue.prototype.axios=axios

Vue.config.productionTip = false


//全局守卫
//router.beforeEach((to, from, next) => {
//   /* alert('还没有登录,请先登录!!!');
//   next(); */
//   // 判断store.getters.isLogin === false
//   if (/^\/((login)|(register))$/g.test(to.path)) {
//     next();
//   }else {
//     alert('还没有登录,请先登录!!!');
//     next('/login');
//   }
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
