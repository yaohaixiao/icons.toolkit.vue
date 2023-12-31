<template>
  <li
    :data-index="id"
    :class="['cart-item', { 'is-empty': isEmpty }]"
    @dragenter="dragEnter"
    @dragover="dragOver"
    @dragleave="dragLeave"
    @drop="dragDrop"
    @dragend="dragEnd">
    <slot>
      <div
        draggable="true"
        class="cart-item__inner"
        @dragstart="dragStart"
        @drag="drag">
        <div class="cart-item__draggable">
          <icon
            name="drag"
            :size="20" />
        </div>
        <div class="cart-item__checkbox">
          <base-checkbox
            v-model="checked"
            @change="onCheck" />
        </div>
        <div class="cart-item__icon">
          <icon
            :name="name"
            :size="32" />
        </div>
        <div class="cart-item__meta">
          <h3 class="cart-item__title">
            {{ name }}
            <base-tag
              v-if="!buildIn"
              type="success"
              size="small">
              导入
            </base-tag>
          </h3>
          <dl class="cart-item__dl">
            <dt class="cart-item__dt">宽：</dt>
            <dd class="cart-item__dd">{{ width }}</dd>
            <dt class="cart-item__dt">高：</dt>
            <dd class="cart-item__dd">{{ height }}</dd>
            <dt class="cart-item__dt">viewBox：</dt>
            <dd class="cart-item__dd">
              {{ `0 0 ${size.width} ${size.height}` }}
            </dd>
          </dl>
        </div>
        <div
          class="cart-item__delete"
          @click="onDelete">
          <icon
            name="trash"
            :size="20" />
        </div>
      </div>
    </slot>
  </li>
</template>

<script>
/**
 * Item.vue - CartItem 组件
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2022.11.10
 */
import BaseCheckbox from '@/components/BaseCheckbox'
import BaseTag from '@/components/BaseTag'
import Icon from '@/components/BaseIcon'

import closest from '@/utils/dom/closest'

const CLS_ITEM = 'cart-drawer-item'
const CLS_OVER = `${CLS_ITEM}_over`
const CLS_DRAGGING = `${CLS_ITEM}_dragging`

export default {
  name: 'CartItem',
  componentName: 'CartItem',
  components: {
    BaseCheckbox,
    BaseTag,
    Icon
  },
  props: {
    index: {
      type: Number,
      default: 0
    },
    symbol: {
      type: String,
      default: ''
    },
    isChecked: {
      type: Boolean,
      default: false
    },
    isBuildIn: {
      type: Boolean,
      default: true
    },
    isEmpty: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      id: 0,
      checked: false,
      buildIn: true,
      item: ''
    }
  },
  computed: {
    name() {
      const matches = this.item.match(/icon-(\w+(-\w+)*)+/)
      return matches[1] || ''
    },
    size() {
      const match = this.item.match(/viewBox="0 0 (.*?)"/)[1].split(' ')
      let width = 0
      let height = 0

      if (match) {
        width = match[0] ? parseInt(match[0], 10) : 0
        height = match[1] ? parseInt(match[1], 10) : 0
      }

      return {
        width,
        height
      }
    },
    width() {
      const { width } = this.size
      return width > 200 ? 200 : width
    },
    height() {
      const { height } = this.size
      return height > 200 ? 200 : height
    }
  },
  watch: {
    index() {
      this.update()
    },
    symbol() {
      this.update()
    },
    isChecked() {
      this.update()
    },
    isBuiltIn() {
      this.update()
    }
  },
  created() {
    this.update()
  },
  methods: {
    update() {
      this.id = this.index
      this.item = this.symbol
      this.checked = this.isChecked
      this.buildIn = this.isBuildIn
    },
    dragStart(evt) {
      const $target = evt.target
      const $item = closest($target, `.${CLS_ITEM}`, this.$el, true)
      const $ghost = $item.cloneNode(true)

      $item.classList.add(CLS_DRAGGING)

      $ghost.id = 'drag-item-ghost'
      $ghost.classList.add('cart-item--ghost')
      document.body.appendChild($ghost)
      evt.dataTransfer.setDragImage($ghost, 0, 0)

      this.$emit('dragstart', $item.getAttribute('data-index'))
    },
    drag(evt) {
      const $clone = document.querySelector('#drag-item-ghost')

      $clone.style.top = `${evt.pageY}px`
      $clone.style.left = `${evt.pageX}px`

      evt.dataTransfer.dropEffect = 'move'
      evt.dataTransfer.effectAllowed = 'move'
    },
    dragEnter(evt) {
      const $item = closest(evt.target, `.${CLS_ITEM}`, this.$el, true)

      evt.preventDefault()
      $item.classList.add(CLS_OVER)
    },
    dragOver(evt) {
      const $item = closest(evt.target, `.${CLS_ITEM}`, this.$el, true)

      evt.preventDefault()
      $item.classList.add(CLS_OVER)
    },
    dragLeave(evt) {
      const $item = closest(evt.target, `.${CLS_ITEM}`, this.$el, true)

      $item.classList.remove(CLS_OVER)
    },
    dragDrop(evt) {
      const $item = closest(evt.target, `.${CLS_ITEM}`, this.$el, true)

      $item.classList.remove(CLS_OVER)

      this.$emit('drop', $item.getAttribute('data-index'))
    },
    dragEnd(evt) {
      const $ghost = document.querySelector('#drag-item-ghost')
      const $item = closest(evt.target, `.${CLS_ITEM}`, this.$el, true)

      $item.classList.remove(CLS_DRAGGING)

      if ($ghost) {
        $ghost.parentNode.removeChild($ghost)
      }

      this.$emit('dragend')
    },
    onCheck() {
      this.$emit('check', {
        id: this.id,
        symbol: this.item,
        checked: this.checked,
        name: this.name
      })
    },
    onDelete() {
      this.$emit('delete', {
        id: this.id,
        symbol: this.item,
        name: this.name,
        isBuildIn: this.buildIn
      })
    }
  }
}
</script>

<style scoped lang="less">
@import './item';
</style>
