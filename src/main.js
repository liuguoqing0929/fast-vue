// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import httpRequest from './request/http'
import echarts from 'echarts'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.prototype.$echarts = echarts
Vue.prototype.$http = httpRequest
Vue.prototype.$axios = axios // 全局注册，使用方法为:this.$axios
// eslint-disable-next-line no-undef
// Vue.prototype.qs = qs // 全局注册，使用方法为:this.qs

Vue.config.productionTip = false

// 设置浏览器标题
Vue.directive('title', {
  inserted: function (el, binding) {
    document.title = el.dataset.title
  }
})

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
