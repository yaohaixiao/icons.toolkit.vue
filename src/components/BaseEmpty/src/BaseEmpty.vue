<template>
  <div class="base-empty">
    <div
      v-if="showIcon"
      class="base-empty__icon">
      <slot name="icon">
        <icon
          :name="icon"
          :size="[120, 120]" />
      </slot>
    </div>
    <p class="base-empty__text">
      <slot>{{ text }}</slot>
    </p>
  </div>
</template>

<script>
/**
 * BaseEmpty.vue - BaseEmpty 组件样式
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.10
 */
import Icon from '@/components/BaseIcon'

export default {
  name: 'BaseEmpty',
  componentName: 'BaseEmpty',
  components: {
    Icon
  },
  props: {
    text: {
      type: String,
      default: '暂无数据'
    },
    showIcon: {
      type: Boolean,
      default: true
    },
    icon: {
      type: String,
      default: 'empty'
    },
    iconSize: {
      type: [String, Number, Array],
      default: () => [120, 120]
    }
  }
}
</script>

<style lang="less">
@import 'base-empty';
</style>
