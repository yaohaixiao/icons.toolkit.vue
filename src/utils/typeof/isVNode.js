import hasOwn from './hasOwn'

/**
 * 判断是否未 VNode 对象
 * =============================================================
 * @param node
 * @returns {boolean}
 */
const isVNode = (node) => {
  return (
    node !== null &&
    typeof node === 'object' &&
    hasOwn(node, 'componentOptions')
  )
}

export default isVNode
