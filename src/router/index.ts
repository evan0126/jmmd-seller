import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Layout from '@/layout/layout.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName:'login' */'@/views/login/login.vue')
  },
  {
    path: '/',
    component :Layout,
    children:[
      {
        path: '',//默认子路由
        name: 'home',
        component: () => import(/* webpackChunkName:'home' */'@/views/home/home.vue')
      },
      {
        path: '/menu',
        name: 'menu',
        component: () => import(/* webpackChunkName:'menu' */'@/views/menu/menu.vue')
      },
      {
        path: '/role',
        name: 'role',
        component: () => import(/* webpackChunkName:'role' */'@/views/role/role.vue')
      },
      {
        path: '/course',
        name: 'course',
        component: () => import(/* webpackChunkName:'course' */'@/views/course/course.vue')
      },
      {
        path: '/user',
        name: 'user',
        component: () => import(/* webpackChunkName:'user' */'@/views/user/user.vue')
      },
      {
        path: '/resource',
        name: 'resource',
        component: () => import(/* webpackChunkName:'resource' */'@/views/resource/resource.vue')
      },
      {
        path: '/advert',
        name: 'advert',
        component: () => import(/* webpackChunkName:'advert' */'@/views/advert/advert.vue')
      },
      {
        path: '/advert-space',
        name: 'advert-space',
        component: () => import(/* webpackChunkName:'advert-space' */'@/views/advert-space/advert-space.vue')
      },
    ]
  },
 
  {
    path: '*',
    name: '404',
    component: () => import(/* webpackChunkName:'404' */'@/views/404/404.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
