<template>
  <router-link
    v-if="route"
    :to="disabled ? null : href"
    :target="target"
    :rel="rel"
    :class="className">
    <icon
      v-if="icon"
      :name="icon"
      :size="iconSize"
      class="base-link__icon" />
    <span class="base-link__inner">
      <slot />
    </span>
  </router-link>
  <a
    v-else
    :href="disabled ? null : href"
    :target="target"
    :rel="rel"
    :download="download"
    :class="className">
    <icon
      v-if="icon"
      :name="icon"
      :size="iconSize"
      class="base-link__icon" />
    <span class="base-link__inner">
      <slot />
    </span>
  </a>
</template>

<script>
/**
 * BaseLink.vue - BaseLink 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.9
 */
import Icon from '@/components/BaseIcon'

export default {
  name: 'BaseLink',
  componentName: 'BaseLink',
  components: {
    Icon
  },
  props: {
    type: {
      type: String,
      default: 'default'
    },
    href: {
      type: String,
      default: ''
    },
    target: {
      type: String,
      default: '_self'
    },
    rel: {
      type: String,
      default: null
    },
    route: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    download: {
      type: [Boolean, String],
      default: null
    },
    underline: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ''
    },
    iconSize: {
      type: Number,
      default: 16
    }
  },
  computed: {
    className() {
      const clsDisabled = this.disabled
        ? `util-anchor-${this.type}--disabled`
        : ''

      return [
        'base-link',
        `util-anchor-${this.type}`,
        {
          'util-anchor-underline': this.underline,
          clsDisabled,
          'base-link_icon': this.icon
        }
      ]
    }
  }
}
</script>

<style lang="less">
@import 'base-link';
</style>
