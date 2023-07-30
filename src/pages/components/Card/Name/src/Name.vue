<template functional>
  <p class="icon-card-name">
    {{ props.name }}
  </p>
</template>

<script>
/**
 * Name.vue - Icon 示例卡片组件 - 图标名称子组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2023.1.18
 */
export default {
  name: 'CardName',
  componentName: 'CardName',
  props: {
    name: {
      type: String,
      default: ''
    }
  }
}
</script>
