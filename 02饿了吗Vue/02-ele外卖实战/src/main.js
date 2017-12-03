// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueResource from 'vue-resource'
import App from './App'
import router from './router'

// 添加全局样式文件
import 'common/stylus/index.styl'

Vue.config.productionTip = false

// 添加网络请求库Vue-Resource
Vue.use(VueResource)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {App}
})
// 首次进入应用的页面
router.push('goods')
