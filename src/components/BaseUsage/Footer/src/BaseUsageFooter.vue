<template>
  <footer
    ref="footer"
    class="base-usage-footer"
    @click="onToggle">
    <span class="base-usage-footer__icon">
      <icon :name="icon" />
    </span>
    <span class="base-usage-footer__text">{{ text }}</span>
  </footer>
</template>

<script>
/**
 * BaseUsageFooter.vue - BaseUsageFooter 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.11
 */
import Icon from '@/components/BaseIcon'

export default {
  name: 'BaseUsageFooter',
  componentName: 'BaseUsageFooter',
  components: {
    Icon
  },
  props: {
    folded: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    icon() {
      return this.folded ? 'arrow-down' : 'arrow-up'
    },
    text() {
      return this.folded ? '显示代码' : '隐藏代码'
    }
  },
  methods: {
    onToggle() {
      this.$emit('toggle')
    }
  }
}
</script>

<style scoped lang="less">
@import 'base-usage-footer';
</style>
