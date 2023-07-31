<template>
  <i
    v-if="name"
    class="ijs-icon">
    <svg
      aria-hidden="true"
      :style="cssRules"
      class="ijs-icon__svg">
      <use v-bind="binds" />
    </svg>
  </i>
</template>

<script>
/**
 * BaseIcon.vue - SVG 图标显示组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2024.07.27
 */
import isArray from '../../../utils/types/isArray'

export default {
  name: 'IjsIcon',
  componentName: 'IjsIcon',
  props: {
    name: {
      type: String,
      default: ''
    },
    size: {
      type: [String, Number, Array],
      default: 0
    },
    color: {
      type: String,
      default: ''
    },
    iconSet: {
      type: String,
      default: 'icon'
    }
  },
  computed: {
    binds() {
      const iconSet = this.iconSet
      const name = this.name
      const xlink =
        iconSet && iconSet !== 'icon'
          ? `#${iconSet}-icon-${name}`
          : `#icon-${name}`

      return {
        'xlink:href': xlink
      }
    },
    width() {
      const size = this.size
      return isArray(size) ? size[0] : size
    },
    height() {
      const size = this.size
      return isArray(size) ? size[1] : size
    },
    defaultRules() {
      const size = this.size
      return size ? `width:${this.width}px;height:${this.height}px;` : null
    },
    cssRules() {
      const defaultRules = this.defaultRules
      const color = this.color

      return color ? defaultRules + `color:${color}` : defaultRules
    }
  }
}
</script>

<style lang="less">
@import 'base-icon';
</style>
