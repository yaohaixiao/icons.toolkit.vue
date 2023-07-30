/**
 * 判断是否为 Number 类型值
 * =============================================================
 * @param {Number} val - 待检测的数
 * @returns {boolean}
 */
const isNumber = (val) => {
  return typeof val === 'number' && !isNaN(val)
}

export default isNumber
