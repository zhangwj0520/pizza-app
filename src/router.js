import Vue from 'vue'
import Router from 'vue-router'
import store from './store/store'
import Home from './components/Home'
import Menu from './components/Menu';
import About from './components/about/About';
import Admin from './components/Admin';
import Login from './components/Login';
import Register from './components/Register';

//二级路由
import Contact from './components/about/Contact';
import Delivery from './components/about/Delivery';
import History from './components/about/History';
import OrderingGuide from './components/about/OrderingGuide';

// 三级路由
import Phone from './components/about/contact/Phone';
import PersonName from './components/about/contact/PersonName';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior(to, from, savedPosition) {
    //return { x: 0, y: 100 };
    //return {selector:'.btn'}
    if (savedPosition) {
      return savedPosition
    } else {
      return {
        x: 0,
        y: 0
      }
    }
  },
  routes: [{
      path: '/',
      name: 'homeLink',
      //component: Home,
      components: {
        default: Home,
        "orderingGuide": OrderingGuide,
        "delivery": Delivery,
        "history": History,
      },
    },
    {
      path: '/menu',
      name: 'menuLink',
      component: Menu,
    },
    {
      path: '/admin',
      name: 'adminLink',
      component: Admin,
      beforeEnter: (to, from, next) => {
        if (store.getters.isLogin) {
          next();
        } else {
          alert('还没有登录,请登录!');
          next('/login');
        }
      }
    },
    {
      path: '/about',
      name: 'aboutLink',
      redirect: "/contact",
      component: About,
      children: [{
          path: '/contact',
          name: 'contactLink',
          redirect: "/personname",
          component: Contact,
          children: [{
              path: '/phone',
              name: "phoneNumber",
              component: Phone
            },
            {
              path: '/personname',
              name: "personName",
              component: PersonName
            }
          ]
        },
        {
          path: '/delivery',
          name: 'deliveryLink',
          component: Delivery
        },
        {
          path: '/history',
          name: 'historyLink',
          component: History
        },
        {
          path: '/orderingGuide',
          name: 'orderingGuideLink',
          component: OrderingGuide
        }
      ]
    },
    {
      path: '/login',
      name: 'loginLink',
      component: Login
    },
    {
      path: '/register',
      name: 'registerLink',
      component: Register
    },
    {
      path: '*',
      name: 'none',
      redirect: '/'
    }
  ]
})
