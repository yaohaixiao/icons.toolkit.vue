<template functional>
  <textarea
    readonly
    :value="props.code"
    class="cart-drawer__code" />
</template>

<script>
/**
 * Code.vue - CartCode (函数)组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2023.07.29
 */
export default {
  name: 'CartCode',
  componentName: 'CartCode',
  props: {
    code: {
      type: String,
      default: ''
    }
  }
}
</script>
