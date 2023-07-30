/**
 * 将字符串中的 HTML 实体字符，转移成 HTML 标签
 * =============================================================
 * @param {String} str
 * @returns {String}
 */
const decodeHTML = (str) => {
  const CHARTS = {
    '&amp;': '&',
    '&lt;': '<',
    '&gt;': '>',
    '&#39;': "'",
    '&quot;': '"'
  }

  return str
    .replace(/&amp;|&lt;|&gt;|&#39;|&quot;/g, (tag) => {
      return CHARTS[tag] || tag
    })
    .replace(/\{\s+\{/g, '{{')
}

export default decodeHTML
