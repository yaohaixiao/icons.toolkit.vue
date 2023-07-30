<template functional>
  <dl class="copyright-meta">
    <dt class="copyright-meta__dt">Designer：</dt>
    <dd class="copyright-meta__dd">{{ props.designer }}</dd>
    <dt class="copyright-meta__dt">Homepage：</dt>
    <dd class="copyright-meta__dd">
      <a
        :href="props.homepage"
        rel="noreferrer">
        {{ props.homepage }}
      </a>
    </dd>
    <dt class="copyright-meta__dt">License：</dt>
    <dd class="copyright-meta__dd">{{ props.license }}</dd>
  </dl>
</template>

<script>
/**
 * CopyrightMeta.vue - Copyright 信息件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2023.1.17
 */
export default {
  name: 'CopyrightMeta',
  componentName: 'CopyrightMeta',
  props: {
    designer: {
      type: String,
      default: ''
    },
    homepage: {
      type: String,
      default: ''
    },
    license: {
      type: String,
      default: ''
    }
  }
}
</script>

<style scoped lang="less">
@import 'copyright-meta';
</style>
