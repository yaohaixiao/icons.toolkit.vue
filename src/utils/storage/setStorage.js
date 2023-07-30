/**
 * 设置本地缓存
 * ====================================================
 * @param {String} key
 * @param {*} value
 */
const setStorage = (key, value) => {
  localStorage.setItem(key, value)
}

export default setStorage
