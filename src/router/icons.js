/**
 * index.js - Icons 示例路由配置
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.18
 */
export default [
  {
    text: 'Brankic',
    name: 'PageBrankic',
    path: 'brankic',
    meta: {
      hide: false
    },
    component: () =>
      import(
        /* webpackChunkName: "PageDefault" */ '@/pages/PageBrankic.vue'
        )
  }
]
