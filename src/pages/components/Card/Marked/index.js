import Marked from './src/Marked.vue'

/* istanbul ignore next */
Marked.install = function (Vue) {
  Vue.component(Marked.name, Marked)
}

export default Marked
