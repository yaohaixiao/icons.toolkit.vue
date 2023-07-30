import Vue from 'vue'
import Emitter from '@yaohaixiao/subscribers.js/subscribers.core'

Vue.prototype.$broadcast = Emitter.emit
Vue.prototype.$subscribe = Emitter.on
Vue.prototype.$unsubscribe = Emitter.off
