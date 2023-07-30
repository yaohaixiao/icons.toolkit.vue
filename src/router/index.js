/**
 * index.js 系统的路由配置入口
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.07.29
 */
import Vue from 'vue'
import Router from 'vue-router'

import Icons from './icons'

import AppLayout from '@/views/AppLayout.vue'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'AppLayout',
    component: AppLayout,
    redirect: '/brankic',
    children: Icons
  }
]

const router = new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  scrollBehavior: () => ({
    y: 0
  }),
  linkActiveClass: 'checked',
  linkExactActiveClass: 'active',
  routes
})

export default router
