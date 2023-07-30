<template>
  <div
    ref="code"
    class="base-usage-code">
    <span
      class="base-usage-code__copy"
      @click="onCopy">
      <icon name="copy" />
      复制代码
    </span>
    <slot />
  </div>
</template>

<script>
/**
 * BaseUsageCode.vue - BaseUsageCode 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.11
 */
import Icon from '@/components/BaseIcon'
import { copyToClipboard } from '@/utils/utils'
import decodeHTML from '@/utils/string/decodeHTML'

export default {
  name: 'BaseUsageCode',
  componentName: 'BaseUsageCode',
  components: {
    Icon
  },
  methods: {
    copy() {
      const $code = this.$refs.code
      const code = $code.querySelector('.article__code').innerHTML

      copyToClipboard(decodeHTML(code))
    },
    onCopy() {
      this.copy()

      this.$message.success({
        round: true,
        message: '代码已复制到粘贴板！'
      })
    }
  }
}
</script>

<style scoped lang="less">
@import 'base-usage-code';
</style>
