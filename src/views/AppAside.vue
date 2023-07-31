<template>
  <base-aside
    background
    flex
    padding="none"
    :collapsed="collapsed">
    <base-main class="aside-main">
      <app-menu />
    </base-main>
    <base-footer
      border
      aling="right"
      height="inner">
      <div
        class="aside-collapse"
        @click="onToggle">
        <icon
          name="aside-collapse"
          :size="20" />
      </div>
    </base-footer>
  </base-aside>
</template>

<script>
/**
 * AppAside.vue - 侧边栏组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2023.07.31
 */
import BaseMain from '@/components/BaseMain'
import BaseFooter from '@/components/BaseFooter'
import BaseAside from '@/components/BaseAside'
import Icon from '@/components/BaseIcon'

import AppMenu from './AppMenu'

import setStorage from '@/utils/storage/setStorage'
import getStorage from '@/utils/storage/getStorage'

export default {
  name: 'AppAside',
  componentName: 'AppAside',
  components: {
    BaseAside,
    BaseMain,
    BaseFooter,
    Icon,
    AppMenu
  },
  data() {
    return {
      collapsed: false
    }
  },
  created() {
    const collapsed = getStorage('toolkit:aside:collapsed')

    if (collapsed) {
      this.collapsed = !!(collapsed === 'true')
    }
  },
  methods: {
    onToggle() {
      this.collapsed = !this.collapsed
      setStorage('toolkit:aside:collapsed', this.collapsed)
    }
  }
}
</script>

<style lang="less">
.aside-main {
  width: 100%;
}

.aside-collapse {
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  width: 58px;
  height: 48px;
  transform: rotate(-180deg);
  transition-duration: 0.4s;
  cursor: pointer;
  color: @default_icon_color;
  overflow: hidden;

  &:hover {
    color: @primary_color;
  }

  .ijs-icon {
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}

.base-aside--collapsed {
  .aside-collapse {
    transform: rotate(0deg);
  }
}
</style>
