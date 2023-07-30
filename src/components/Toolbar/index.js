/**
 * index.js - 注册 Toolbar 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.11
 */
import Toolbar from './src/Toolbar'

/* istanbul ignore next */
Toolbar.install = function (Vue) {
  Vue.component(Toolbar.name, Toolbar)
}

export default Toolbar
