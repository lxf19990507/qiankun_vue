/*
 * @Descripttion: 
 * @version: 
 * @Author: LiuXuFei
 * @Date: 2021-07-19 15:30:02
 * @LastEditors: LiuXuFei
 * @LastEditTime: 2021-07-19 16:17:52
 */
import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// let router = null;
let instance = null;

if (window.__POWERED_BY_QIANKUN__) {
  // eslint-disable-next-line no-undef
  __webpack_public_path__ = window.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
} else {
  instance = new Vue({
    // router,
    // store,
    render: h => h(App),
  }).$mount('#app');
}

export async function test(){
  window.console.log('测试');
}

export async function bootstrap(val) {
  window.console.log('父应用传递的数据：');
  window.console.log(val) 
}

export async function mount(props) {
  window.console.log('props from main framework', props);
  // router = new VueRouter({
  //   base: window.__POWERED_BY_QIANKUN__ ? '/vue' : '/',
  //   mode: 'history',
  //   routes,
  // });

  instance = new Vue({
    // router,
    // store,
    render: h => h(App),
  }).$mount('#app');
}

export async function unmount() {
  instance.$destroy();
  instance = null;
  // router = null;
}

