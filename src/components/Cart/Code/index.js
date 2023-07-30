/**
 * index.js - 注册 Code 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.17
 */
import Code from './src/Code.vue'

Code.install = function (Vue) {
  Vue.component(Code.name, Code)
}

export default Code
