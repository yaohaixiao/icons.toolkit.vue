<template>
  <base-container>
    <app-header v-once />
    <base-main
      use-main-tag
      flex
      overflow="hidden">
      <app-aside v-once />
      <base-main overflow="hidden">
        <keep-alive>
          <router-view />
        </keep-alive>
      </base-main>
    </base-main>
    <toolbar :items="icons" />
    <cart :items="icons" />
  </base-container>
</template>

<script>
/**
 * AppLayout.vue - 主题框架页
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2023.07.31
 */
import BaseContainer from '@/components/BaseContainer'
import BaseMain from '@/components/BaseMain'

import AppHeader from './AppHeader.vue'
import AppAside from './AppAside.vue'

// 动态加载组件
import Toolbar from '@/components/Toolbar'
import Cart from '@/components/Cart'

import setStorage from '@/utils/storage/setStorage'
import getStorage from '@/utils/storage/getStorage'
import clearStorage from '@/utils/storage/clearStorage'

import ICONS from '@/assets/icons'
import add from '@yaohaixiao/icons.js/add'

export default {
  name: 'AppLayout',
  componentName: 'AppLayout',
  components: {
    BaseContainer,
    BaseMain,
    AppHeader,
    AppAside,
    Toolbar,
    Cart
  },
  data() {
    return {
      icons: []
    }
  },
  watch: {
    icons() {
      setStorage('toolkit:icons', JSON.stringify(this.icons))
      this.$broadcast('toolkit:update:icons')
    }
  },
  created() {
    add(ICONS)
    this.update()
  },
  mounted() {
    this.$subscribe('toolkit:add:icon', this.add)
    this.$subscribe('toolkit:remove:icon', this.remove)
    this.$subscribe('toolkit:clean:cart', this.clean)
  },
  beforeDestroy() {
    this.$unsubscribe('toolkit:add:icon', this.add)
    this.$unsubscribe('toolkit:remove:icon', this.remove)
    this.$unsubscribe('toolkit:clean:cart', this.clean)

    clearStorage('toolkit:icons')
  },
  methods: {
    update() {
      const icons = getStorage('toolkit:icons')

      if (icons) {
        this.icons = JSON.parse(icons)
      }
    },
    add(icon) {
      const icons = [...this.icons]

      icons.push(icon)
      this.icons = icons
    },
    remove(icon) {
      const icons = [...this.icons]
      const index = icons.indexOf(icon)

      if (index < 0) {
        return false
      }

      icons.splice(index, 1)
      this.icons = icons
    },
    clean() {
      this.icons = []
    }
  }
}
</script>
