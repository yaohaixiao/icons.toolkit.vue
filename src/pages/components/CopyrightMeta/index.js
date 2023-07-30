import Meta from './src/CopyrightMeta.vue'

/* istanbul ignore next */
Meta.install = function (Vue) {
  Vue.component(Meta.name, Meta)
}

export default Meta
