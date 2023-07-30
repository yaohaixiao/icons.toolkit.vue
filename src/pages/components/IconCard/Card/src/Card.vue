<template>
  <div
    :class="['icon-card', { 'is-checked': checked }]"
    @click="onCheck">
    <card-marked />
    <card-svg :name="name" />
    <card-name :name="name" />
    <card-toolbar
      :name="name"
      :symbol="symbol" />
  </div>
</template>

<script>
/**
 * IconCard.vue - Icon 示例卡片组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.10
 */
import CardMarked from '@/pages/components/IconCard/Marked'
import CardSvg from '@/pages/components/IconCard/Svg'
import CardName from '@/pages/components/IconCard/Name'
import CardToolbar from '@/pages/components/IconCard/Toolbar'

import getStorage from '@/utils/storage/getStorage'

export default {
  name: 'CardItem',
  componentName: 'CardItem',
  components: {
    CardMarked,
    CardSvg,
    CardName,
    CardToolbar
  },
  props: {
    symbol: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      name: '',
      checked: false
    }
  },
  watch: {
    symbol() {
      this.update()
    }
  },
  mounted() {
    this.update()

    this.$subscribe('toolkit:update:icons', this.updateChecked)
    this.$subscribe('toolkit:clean:cart', this.updateChecked)
  },
  beforeDestroy() {
    this.$unsubscribe('toolkit:update:icons', this.updateChecked)
    this.$unsubscribe('toolkit:clean:cart', this.updateChecked)
  },
  methods: {
    update() {
      const keys = this.symbol.match(/icon-(\w+(-\w+)*)+/)

      this.name = keys[1]

      this.updateChecked()
    },
    updateChecked() {
      const icons = getStorage('toolkit:icons')

      if (icons) {
        this.checked = JSON.parse(icons).indexOf(this.symbol) > -1
      } else {
        this.checked = false
      }
    },
    add(symbol) {
      this.$broadcast('toolkit:add:icon', symbol)
    },
    remove(symbol) {
      this.$broadcast('toolkit:remove:icon', symbol)
    },
    check(name, action = '加入') {
      this.$message.success({
        round: true,
        message: `图标 ${name} 已${action}购物车！`
      })
    },
    toggle() {
      this.checked = !this.checked
    },
    onCheck() {
      let action = ''
      const symbol = this.symbol

      this.toggle()

      if (this.checked) {
        this.add(symbol)
        action = '加入'
      } else {
        action = '移除'
        this.remove(symbol)
      }

      this.check(this.name, action)
    }
  }
}
</script>

<style lang="less">
@import 'card';
</style>
