// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
//引入axios插件
import MyHttpServer from '@/plugins/http.js'
import './css/index.css'
import 'element-ui/lib/theme-chalk/index.css'
//使用插件

Vue.use(ElementUI)
Vue.use(MyHttpServer)

// Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  //挂载路由
  router,
  components: {
    App
  },
  template: '<App/>'
})
