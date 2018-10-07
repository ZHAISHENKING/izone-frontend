import Vue from 'vue'
import App from './App.vue'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import './index.css'

import store from './vuex/store'
//
import './unit/const';
import './control';
import { subscribeRecord } from './unit';
subscribeRecord(store); // 将更新的状态记录到localStorage
Vue.use(iView);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');