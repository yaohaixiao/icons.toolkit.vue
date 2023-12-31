/**
 * popper.js - 简易弹窗控制器
 * =============================================================
 * Created By: Yaohaixiao
 * Update: 2023.07.31
 */
let zIndex = 100

const Popper = {
  getZIndex() {
    return zIndex
  },
  setZIndex(index) {
    zIndex = index
  },
  prevZIndex(step = 1) {
    zIndex -= step
    return zIndex
  },
  nextZIndex(step = 1) {
    zIndex += step
    return zIndex
  }
}

export default Popper
