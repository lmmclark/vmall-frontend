import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex';  
import vuexI18n from 'vuex-i18n'; 
import axios from 'axios'
Vue.use(Vuex); 
Vue.use(vuexI18n); 
Vue.config.productionTip = false
//统一配置Axios
Vue.prototype.$http = axios
axios.defaults.baseURL = 'http://10.70.94.109:8091/'
axios.defaults.headers.common[ 'Content-Type' ] = 'application/json;charset=UTF-8';
axios.defaults.headers.common[ 'Accept' ] = 'application/json';

  
//我添加了注释

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
