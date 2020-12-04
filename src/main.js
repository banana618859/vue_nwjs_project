/*
 * @Descripttion: 
 * @Author: yizheng.yuan
 * @Date: 2020-12-03 21:47:15
 * @LastEditors: yizheng.yuan
 * @LastEditTime: 2020-12-03 21:54:00
 */
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

// element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
