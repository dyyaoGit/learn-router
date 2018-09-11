import Router from 'vue-router'
import Vue from 'vue'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'

Vue.use(Router)

import home from '../components/home'

const router = new Router({
  routes: [
    {
      path: '/',
      component: home,
      name: 'home',
      meta: {
        title: '首页'
      }
    },
    {
      path: '/about/:id',
      component: () => import('../components/about'),
      name: '详情',
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../components/login'),
      meta: {
        title: '登录'
      }
    },
    {
      path: '/main',
      component: () => import('../views/Layout'),
      redirect: '/main/home',
      children: [
        {
          path: 'home',
          component: home,
          name: 'home1',
          meta: {
            title: '首页'
          }
        },
        // /main/about/998
        {
          path: 'about/:id',
          component: () => import('../components/about'),
          name: '详情1',
        },
        {
          path: 'login',
          name: 'login1',
          component: () => import('../components/login'),
          meta: {
            title: '登录'
          }
        },
      ]
    }
  ]
})

router.beforeEach((to, from, next) => {
  Nprogress.start()
  if(to.meta.title){
    document.title = to.meta.title
  }
  next()
})

router.afterEach((to, from) => {
  Nprogress.done()
})

export default router
