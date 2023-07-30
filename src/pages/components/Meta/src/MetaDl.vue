<template functional>
  <dl class="article-meta">
    <dt class="article-meta__dt">Designer：</dt>
    <dd class="article-meta__dd">{{ props.designer }}</dd>
    <dt class="article-meta__dt">Homepage：</dt>
    <dd class="article-meta__dd">
      <a
        :href="props.homepage"
        rel="noreferrer">
        {{ props.homepage }}
      </a>
    </dd>
    <dt class="article-meta__dt">License：</dt>
    <dd class="article-meta__dd">{{ props.license }}</dd>
  </dl>
</template>

<script>
/**
 * Meta.vue - Copyright 信息件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2023.1.17
 */
export default {
  name: 'ArticleMeta',
  componentName: 'ArticleMeta',
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
@import 'meta-dl';
</style>
