<template>
  <icon
    :name="name"
    :size="size"
    :color="color"
    :iconSet="iconSet" />
</template>

<script>
/**
 * BaseIcon.vue - SVG 图标显示组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2023.07.27
 */
import Icon from '@yaohaixiao/icons.js/components/Icon'

export default {
  name: 'BaseIcon',
  componentName: 'BaseIcon',
  components: {
    Icon
  },
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
  }
}
</script>
