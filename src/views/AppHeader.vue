<template>
  <base-header
    flex
    padding="inner"
    height="outer">
    <app-logo />
    <app-nav />
  </base-header>
</template>

<script>
/**
 * AppHeader.vue - 应用页头区域
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2023.07.31
 */
import BaseHeader from '@/components/BaseHeader'

import AppLogo from './AppLogo.vue'
import AppNav from './AppNav.vue'

export default {
  name: 'AppHeader',
  componentName: 'AppHeader',
  components: {
    BaseHeader,
    AppLogo,
    AppNav
  }
}
</script>
