import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

//引入socket.io配置连接
import VueSocketio from 'vue-socket.io';

Vue.use(VueSocketio, 'http://localhost:3000');

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

import VueHighcharts from 'vue-highcharts'
Vue.use(VueHighcharts)

import echarts from 'echarts'
Vue.prototype.$echarts = echarts



if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
