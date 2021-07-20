/*
 * @Descripttion: 
 * @version: 
 * @Author: LiuXuFei
 * @Date: 2021-07-09 10:55:28
 * @LastEditors: LiuXuFei
 * @LastEditTime: 2021-07-20 12:01:39
 */
// import Vue from 'vue'
// import App from './App.vue'
// import router from './router'
// import store from './store'

// Vue.config.productionTip = false

// new Vue({
//   router,
//   store,
//   render: h => h(App)
// }).$mount('#app')
//掘金代码
// import Vue from "vue";
// import VueRouter from "vue-router";
// import App from "./App.vue";
// import "./public-path";
// import routes from "./router";
// //vant导入
import Vant from 'vant'
import 'vant/lib/index.css'
Vue.use(Vant)

// Vue.config.productionTip = false;

// // 声明变量管理vue及路由实例
// let router = null;
// let instance = null;

// // 导出子应用生命周期 挂载前
// export async function bootstrap(props = {}) {
//   console.log('从父应用继承的数据',props);

//   Array.isArray(props.fns) && props.fns.map(i => {
//     Vue.prototype[i.name] = i[i.name]
//   });
// }

// // 导出子应用生命周期 挂载前 挂载后
// export async function mount() {

//   router = new VueRouter({
//     base: window.__POWERED_BY_QIANKUN__ ? "/app1" : "/",
//     mode: "history",
//     routes: routes.options.routes
//   });
//   instance = new Vue({
//     router,
//     render: h => h(App)
//   }).$mount("#app");
//   console.log('mountmountmount');

//   console.log(window.__POWERED_BY_QIANKUN__ ,'window.__POWERED_BY_QIANKUN__ window.__POWERED_BY_QIANKUN__ window.__POWERED_BY_QIANKUN__ ');

// }

// // 导出子应用生命周期 挂载前 卸载后
// export async function unmount() {
//   instance.$destroy();
//   instance = null;
//   router = null;
// }

// // // 单独开发环境
// // window.__POWERED_BY_QIANKUN__ || mount();
//阿里官方文档代码
import './public-path';
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import routes from './router';
import store from './store';

Vue.config.productionTip = false;

let router = null;
let instance = null;
function render(props = {}) {
  const { container } = props;
  router = new VueRouter({
    base: window.__POWERED_BY_QIANKUN__ ? '/app-vue/' : '/',
    mode: 'history',
    routes,
  });

  instance = new Vue({
    router,
    store,
    render: (h) => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app');
}

// 独立运行时
if (!window.__POWERED_BY_QIANKUN__) {
  render();
}

export async function bootstrap() {
  console.log('[vue] vue app bootstraped');
}
export async function mount(props) {
  console.log('[vue] props from main framework', props);
  render(props);
}
export async function unmount() {
  instance.$destroy();
  instance.$el.innerHTML = '';
  instance = null;
  router = null;
}