import 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import router from './router'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import 'common/stylus/index.styl'

// 使用WechatFE-vConsole
// import VConsole from 'vconsole'
/* eslint-disable no-unused-vars */
// var vConsole = new VConsole()
// console.log('使用了vConsole')

Vue.config.productionTip = false

// fastclick配置
fastclick.attach(document.body)
// 添加vuelazyload的配置
Vue.use(VueLazyload, {
  loading: require('common/image/default.png')
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
