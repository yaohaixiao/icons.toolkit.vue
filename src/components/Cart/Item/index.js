/**
 * index.js - 注册 Item 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.09
 */
import Item from './src/Item.vue'

Item.install = function (Vue) {
  Vue.component(Item.name, Item)
}

export default Item
