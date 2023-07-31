import Vue from 'vue'
import emit from '@yaohaixiao/subscribers.js/emit'
import on from '@yaohaixiao/subscribers.js/on'
import off from '@yaohaixiao/subscribers.js/off'

Vue.prototype.$broadcast = emit
Vue.prototype.$subscribe = on
Vue.prototype.$unsubscribe = off
