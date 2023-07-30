/**
 * index.js - 注册 List 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.17
 */
import CartDrawerList from './src/List.vue'

CartDrawerList.install = function (Vue) {
  Vue.component(CartDrawerList.name, CartDrawerList)
}

export default CartDrawerList
