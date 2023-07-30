<template>
  <span class="icon-card-marked">
    <icon
      name="selected"
      :size="24" />
  </span>
</template>

<script>
/**
 * Marked.vue - Icon 示例卡片组件 - 选中标记子组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2023.1.18
 */
import Icon from '@/components/BaseIcon'

export default {
  name: 'CardMarked',
  componentName: 'CardMarked',
  components: {
    Icon
  }
}
</script>

<style scoped lang="less">
@import 'marked';
</style>
