// 编写属于自己的公共的Vue组件库：
import HeaderComponent from './header.vue';

// Vue 插件要求提供一个install方法，这个方法会被注入Vue
// 需要我们调用Vue的filter component directive去拓展功能:
export default{
  install(Vue){
    Vue.component('app-header',HeaderComponent);
  }
};