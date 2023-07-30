/**
 * 清除本地缓存
 * ====================================================
 * @param key
 * @returns {string}
 */
const clearStorage = (key) => {
  localStorage.removeItem(key)
}

export default clearStorage
