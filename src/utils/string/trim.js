/**
 * 移除字符串头尾的空格
 * =============================================================
 * @param {String} str - 需要移除空格的字符串
 * @returns {String} 返回移除空格后的字符串
 */
const trim = (str) => {
  if (str.trim) {
    return str.trim()
  } else {
    return str.replace(/^\s+/g, '').replace(/\s+$/g, '')
  }
}

export default trim
