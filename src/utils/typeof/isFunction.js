/**
 * 检测测试数据是否为 Function 类型
 * =============================================================
 * @method isFunction
 * @param {*} val - 要检测的数据
 * @returns {boolean} 'val' 是 Function 类型返回 true，否则返回 false
 */
const isFunction = (val) => {
  return typeof val === 'function' || _typeof(val) === '[object Function]'
}

export default isFunction
