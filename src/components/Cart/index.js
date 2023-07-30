/**
 * index.js - 注册 Cart 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.09
 */
import Cart from './Drawer/src/Drawer.vue'

Cart.install = function (Vue) {
  Vue.component(Cart.name, Cart)
}

export default Cart
