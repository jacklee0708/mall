import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  redirect: '/home'
},
  {
    path: '/home',
    component: () => import('../views/home/Home.vue'),
    meta: {
      title: '主页'
    }
  },
  {
    path: '/category',
    component: () => import('../views/category/Category.vue'),
    meta: {
      title: '分类'
    }
  },
  {
    path: '/message',
    component: () => import('../views/message/Message.vue'),
    meta: {
      title: '消息'
    }
  },
  {
    path: '/cart',
    component: () => import('../views/cart/Cart.vue'),
    meta: {
      title: '购物车'
    }
  },
  {
    path: '/profile',
    component: () => import('../views/profile/Profile.vue'),
    meta: {
      title: '我的'
    }
  },
  {
    path: '/search',
    component: () => import('components/search/Search.vue'),
    meta: {
      title: '搜索'
    }
  }]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
