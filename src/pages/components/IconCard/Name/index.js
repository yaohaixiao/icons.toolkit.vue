import Name from './src/Name.vue'

/* istanbul ignore next */
Name.install = function (Vue) {
  Vue.component(Name.name, Name)
}

export default Name
