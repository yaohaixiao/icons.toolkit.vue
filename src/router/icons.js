/**
 * index.js - Icons 示例路由配置
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.18
 */
export default [
  {
    text: 'Default',
    name: 'PageDefault',
    icon: 'bold-home',
    path: 'default',
    meta: {
      hide: false
    },
    component: () =>
      import(/* webpackChunkName: "PageDefault" */ '@/pages/PageDefault.vue')
  },
  {
    text: 'Brankic',
    name: 'PageBrankic',
    icon: 'bold-interface',
    path: 'brankic',
    meta: {
      hide: false
    },
    component: () =>
      import(/* webpackChunkName: "PageBrankic" */ '@/pages/PageBrankic.vue')
  },
  {
    text: 'Broccolidry',
    name: 'PageBroccolidry',
    icon: 'bold-community',
    path: 'broccolidry',
    meta: {
      hide: false
    },
    component: () =>
      import(
        /* webpackChunkName: "PageBroccolidry" */ '@/pages/PageBroccolidry.vue'
      )
  },
  {
    text: 'Eighty Shades',
    name: 'PageEightyShades',
    icon: 'bold-lamp',
    path: 'eighty-shades',
    meta: {
      hide: false
    },
    component: () =>
      import(
        /* webpackChunkName: "PageEightyShades" */ '@/pages/PageEightyShades.vue'
      )
  },
  {
    text: 'Entypo+',
    name: 'PageEntypoPlus',
    icon: 'bold-extend',
    path: 'entypo-plus',
    meta: {
      hide: false
    },
    component: () =>
      import(
        /* webpackChunkName: "PageEntypoPlus" */ '@/pages/PageEntypoPlus.vue'
      )
  },
  {
    text: 'Ever Icons',
    name: 'PageEverIcons',
    icon: 'bold-version',
    path: 'ever-icons',
    meta: {
      hide: false
    },
    component: () =>
      import(
        /* webpackChunkName: "PageEverIcons" */ '@/pages/PageEverIcons.vue'
      )
  },
  {
    text: 'Feather',
    name: 'PageFeather',
    icon: 'bold-app',
    path: 'feather',
    meta: {
      hide: false
    },
    component: () =>
      import(/* webpackChunkName: "PageFeather" */ '@/pages/PageFeather.vue')
  },
  {
    text: 'Font Awesome',
    name: 'PageFontAwesome',
    icon: 'bold-pc',
    path: 'font-awesome',
    meta: {
      hide: false
    },
    component: () =>
      import(
        /* webpackChunkName: "PageFontAwesome" */ '@/pages/PageFontAwesome.vue'
      )
  },
  {
    text: 'Hawcons',
    name: 'PageHawcons',
    icon: 'bold-component',
    path: 'hawcons',
    meta: {
      hide: false
    },
    component: () =>
      import(/* webpackChunkName: "PageHawcons" */ '@/pages/PageHawcons.vue')
  },
  {
    text: 'Iconic',
    name: 'PageIconic',
    icon: 'bold-app-store',
    path: 'iconic',
    meta: {
      hide: false
    },
    component: () =>
      import(/* webpackChunkName: "PageIconic" */ '@/pages/PageIconic.vue')
  },
  {
    text: 'Linecons',
    name: 'PageLinecons',
    icon: 'bold-terminal',
    path: 'linecons',
    meta: {
      hide: false
    },
    component: () =>
      import(/* webpackChunkName: "PageLinecons" */ '@/pages/PageLinecons.vue')
  },
  {
    text: 'Material',
    name: 'PageMaterial',
    icon: 'bold-group',
    path: 'material',
    meta: {
      hide: false
    },
    component: () =>
      import(/* webpackChunkName: "PageMaterial" */ '@/pages/PageMaterial.vue')
  },
  {
    text: 'Meteocons',
    name: 'PageMeteocons',
    icon: 'bold-message',
    path: 'meteocons',
    meta: {
      hide: false
    },
    component: () =>
      import(
        /* webpackChunkName: "PageMeteocons" */ '@/pages/PageMeteocons.vue'
      )
  },
  {
    text: 'Steadysets',
    name: 'PageSteadysets',
    icon: 'bold-coordination',
    path: 'steadysets',
    meta: {
      hide: false
    },
    component: () =>
      import(
        /* webpackChunkName: "PageSteadysets" */ '@/pages/PageSteadysets.vue'
      )
  },
  {
    text: 'Typicons',
    name: 'PageTypicons',
    icon: 'bold-deploy',
    path: 'typicons',
    meta: {
      hide: false
    },
    component: () =>
      import(/* webpackChunkName: "PageTypicons" */ '@/pages/PageTypicons.vue')
  },
  {
    text: 'Vicons',
    name: 'PageVicons',
    icon: 'bold-pipeline',
    path: 'vicons',
    meta: {
      hide: false
    },
    component: () =>
      import(/* webpackChunkName: "PageVicons" */ '@/pages/PageVicons.vue')
  },
  {
    text: 'Wpzoom',
    name: 'PageWpzoom',
    icon: 'bold-chart',
    path: 'wpzoom',
    meta: {
      hide: false
    },
    component: () =>
      import(/* webpackChunkName: "PageWpzoom" */ '@/pages/PageWpzoom.vue')
  },
  {
    text: 'Zondicons',
    name: 'PageZondicons',
    icon: 'bold-notice',
    path: 'zondicons',
    meta: {
      hide: false
    },
    component: () =>
      import(
        /* webpackChunkName: "PageZondicons" */ '@/pages/PageZondicons.vue'
      )
  }
]
