/*
 * @Descripttion: 
 * @version: 
 * @Author: LiuXuFei
 * @Date: 2021-07-19 15:30:02
 * @LastEditors: LiuXuFei
 * @LastEditTime: 2021-07-20 15:17:52
 */
import Vue from 'vue'
import { registerMicroApps, runAfterFirstMounted, setDefaultMountApp, start } from 'qiankun';
import Framework from './Framework';

Vue.config.productionTip = false

let app = null;
let count = 0

//类似单例模式，初次加载时渲染主应用框架，之后每次注册子应用时会再次触发该函数
function render({ appContent, loading }) {
  count++
  window.console.log("子应用程序加载", count)
  if (!app) {
    app = new Vue({
      el: '#my-app',
      data() {
        return {
          content: appContent,
          loading,
        };
      },
      render(h) {
        return h(Framework, {
          props: {
            content: this.content,
            loading: this.loading,
          },
        });
      },
    });
  } else {
    app.content = appContent;
    app.loading = loading;
  }
}

function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}

render({ loading: true });



// support custom fetch see: https://github.com/kuitos/import-html-entry/blob/91d542e936a74408c6c8cd1c9eebc5a9f83a8dc0/src/index.js#L163
const request = url =>
  fetch(url, {
    referrerPolicy: 'origin-when-cross-origin',
  });

// 传入子应用的数据
let msg = {
  data: {
    auth: false
  },
  fns: [
    {
      name: "_LOGIN",
      _LOGIN() {
        // console.log(`父应用返回信息${data}`);
      }
    }
  ]
};
// msg = JSON.stringify(msg)
//注册子应用
registerMicroApps(
  [
    { name: 'vuecli', entry: '//localhost:9001', render, activeRule: genActiveRule('/vuecli'), props: msg },
    { name: 'app-vue/', entry: '//localhost:9095', render, activeRule: genActiveRule('/app-vue/') },
  ],
  {
    beforeLoad: [
      //子应用加载前
      app => {
        window.console.log('before load', app);
      },
    ],
    beforeMount: [
      //进入子应用时触发
      app => {
        window.console.log('before mount', app);
      },
    ],
    afterUnmount: [
      //离开子应用时触发
      app => {
        window.console.log('after unload', app);
      },
    ],
  },
  {
    fetch: request,
  },
);

setDefaultMountApp('/vuecli');//进入主应用时加载的默认路由
runAfterFirstMounted(() => window.console.info('first app mounted'));

start({ prefetch: true, fetch: request });
