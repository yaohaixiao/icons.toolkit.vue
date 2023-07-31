/**
 * main.js - API 文档应用主入口文件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2023.07.31
 */
import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'

import '@/plugins'

Vue.config.productionTip = false

new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
