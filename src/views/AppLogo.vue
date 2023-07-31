<template>
  <div
    class="app-logo"
    @click="toHome">
    <span class="app-logo__icon">
      <icon
        name="bold-deploy"
        :size="22" />
    </span>
    <h1 class="app-logo__title">
      <em class="app-logo__key">icons.toolkit.</em>
      vue
    </h1>
  </div>
</template>

<script>
/**
 * AppLogo.vue - 应用 LOGO 区域
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2023.07.31
 */
import Icon from '@/components/BaseIcon'

export default {
  name: 'AppLogo',
  componentName: 'AppLogo',
  components: {
    Icon
  },
  computed: {
    isHome() {
      return this.$route.name === 'PageBrankic'
    }
  },
  methods: {
    toHome() {
      if (this.isHome) {
        return false
      }

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

  &:hover {
    .app-logo__icon {
      background-color: @primary_color;
    }
  }

  &__icon {
    .radius(16px);
    display: inline-block;
    position: relative;
    z-index: 1;
    width: 32px;
    height: 32px;
    background-color: @third_text_color;
    color: @white;
    text-align: center;
    overflow: hidden;

    .ijs-icon {
      position: absolute;
      z-index: 2;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }

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
