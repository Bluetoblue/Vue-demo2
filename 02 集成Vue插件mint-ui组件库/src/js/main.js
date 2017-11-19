// 插入第三方包：
import Vue from 'vue';
import MintUi from 'mint-ui';//这一步是通过package.json文件里面的main属性的值找到并加载'mint-ui/lib/'mint-ui.common.js'文件，这个文件里面是所有的小组件
import 'mint-ui/lib/style.css';
import Common from "../component/common";//导入自己的组件库，会自动找到index.js


// 启用vue插件：
Vue.use(MintUi);
// 启用自己的vue组件库：
Vue.use(Common);

// 导入公共头部组件：这一步会随着编写、启用自己的Vue组件库index.js而去掉。
// import Header from '../component/common/header.vue';
// Vue.component('app-header',Header);//这一步是把header组件配置项定义成全局的。但是这样一来会造成main.js文件有很多这样的代码，所以这一步放到index.js文件中去，编写成一个属于自己的Vue组件库。

// 导入根组件：
import AppComponent from '../component/App.vue';

// 渲染根组件，启动项目：
new Vue({
  el:'#app',
  render(createNode){
    return createNode(AppComponent);//声明成全局的,通过createNode()方法渲染根组件到index.html中去
  }
});







