/**
 * 获取本地缓存
 * ====================================================
 * @param key
 * @returns {string}
 */
const getStorage = (key) => {
  return localStorage.getItem(key)
}

export default getStorage
