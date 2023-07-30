import _typeof from './_typeof'

/**
 * 检测测试数据是否为 Array 类型
 * =============================================================
 * @method isArray
 * @param {*} val - 要检测的数据
 * @returns {boolean} 'val' 是 Array 类型返回 true，否则返回 false
 */
const isArray = (val) => {
  if (Array.isArray) {
    return Array.isArray(val)
  } else {
    return _typeof(val) === '[object Array]'
  }
}

export default isArray
