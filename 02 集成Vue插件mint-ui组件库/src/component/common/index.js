// 编写属于自己的公共vue组件库:这一个文件是把main.js文件中
// import Header from '../component/common/header.vue';
// Vue.component('app-header',Header);的第二步分离出来，让main.js文件只做导入包和组件以及关联#app这两件事。


import HeaderComponent from './header.vue';

export default{
  install(Vue){
    Vue.component('app-header',HeaderComponent);
  }
}