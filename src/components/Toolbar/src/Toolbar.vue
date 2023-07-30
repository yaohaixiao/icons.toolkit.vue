<template>
  <div
    id="cart"
    :class="['cart-toolbar', { 'is-hidden': !isShow }]"
    @click="onToggle">
    <div class="cart-toolbar__icon">
      <icon
        name="put-on"
        :size="30" />
    </div>
    <sup class="cart-toolbar__count">{{ count }}</sup>
  </div>
</template>

<script>
/**
 * Toolbar.vue - 购物车组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2023.07.29
 */
import Icon from '@/components/BaseIcon'

export default {
  name: 'CartToolbar',
  componentName: 'CartToolbar',
  components: {
    Icon
  },
  props: {
    items: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
      isShow: true,
      collections: []
    }
  },
  computed: {
    count() {
      return this.collections.length
    }
  },
  watch: {
    items() {
      this.update()
    }
  },
  created() {
    this.update()
  },
  mounted() {
    const $cart = document.querySelector('#cart')
    const $body = document.body

    $body.appendChild($cart)

    this.$subscribe('toolkit:show:toolbar', this.show)
  },
  beforeDestroy() {
    this.$unsubscribe('toolkit:show:toolbar', this.show)
  },
  methods: {
    update() {
      this.collections = [...this.items]
    },
    toggle() {
      this.isShow = !this.isShow
    },
    show() {
      this.isShow = true
    },
    hide() {
      this.isShow = false
    },
    onToggle() {
      this.toggle()

      if (this.isShow) {
        setTimeout(() => {
          this.$broadcast('toolkit:hide:cart')
        }, 300)
      } else {
        setTimeout(() => {
          this.$broadcast('toolkit:show:cart')
        }, 300)
      }
    }
  }
}
</script>

<style scoped lang="less">
@import './toolbar';
</style>
