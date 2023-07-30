<template>
  <div
    class="app-logo"
    @click="toHome">
    <h1 class="app-logo__title">
      <em class="app-logo__key">icons.toolkit</em>
      vue
    </h1>
  </div>
</template>

<script>
/**
 * AppLogo.vue - 应用 LOGO 区域
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.10.8
 */
export default {
  name: 'AppLogo',
  componentName: 'AppLogo',
  methods: {
    toHome() {
      this.$router.push({
        path: '/'
      })
    }
  }
}
</script>

<style lang="less">
.app-logo {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-self: auto;
  align-items: center;
  cursor: pointer;
  overflow: hidden;

  &__title {
    padding-left: 10px;
    color: @dark_green;
    font-size: 22px;
    font-family: Georgia, 'Courier New', Consolas, Arial, sans-serif;
  }

  &__key {
    color: @primary_color;
  }
}
</style>
