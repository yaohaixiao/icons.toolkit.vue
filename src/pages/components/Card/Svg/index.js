import Svg from './src/Svg.vue'

/* istanbul ignore next */
Svg.install = function (Vue) {
  Vue.component(Svg.name, Svg)
}

export default Svg
