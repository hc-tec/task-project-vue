import Vue from 'vue'
import App from './App.vue'
import router from './router'
import { taskList } from './task-list'

// 将 taskList 配置到全局，方便数据的传输与修改
Vue.prototype.$taskList = taskList;

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

