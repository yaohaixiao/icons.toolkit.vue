<template>
  <div class="icon-card-svg">
    <icon
      :name="name"
      :size="32" />
  </div>
</template>

<script>
/**
 * Svg.vue - Icon 示例卡片组件 - SVG 图标子组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2023.1.18
 */
import Icon from '@/components/BaseIcon'

export default {
  name: 'CardSvg',
  componentName: 'CardSvg',
  components: {
    Icon
  },
  props: {
    name: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="less">
@import 'svg';
</style>
