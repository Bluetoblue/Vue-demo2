// 插入第三方包：
import Vue from 'vue';
import MintUi from 'mint-ui';//这一步是通过package.json文件里面的main属性的值找到并加载'mint-ui/lib/'mint-ui.common.js'文件，这个文件里面是所有的小组件
import 'mint-ui/lib/style.css';
import Common from "../component/common";//导入自己的组件库，会自动找到index.js
import 'mui/dist/css/mui.css';
import 'mui/examples/hello-mui/css/icons-extra.css';//导入拓展字体样式
import axios from 'axios';//导入axios，但他不是vue的插件，所以它是哪里需要导入哪里，这样就很麻烦，解决的方法就是把它写入Vue的原型里面


// 启用vue插件：
Vue.use(MintUi);
// 启用自己的vue组件库：
Vue.use(Common);
// 把axios写入Vue的原型，以后只要实例Vue就都可以用它：
Vue.prototype.axios=axios;

// 导入公共头部组件：这一步会随着编写、启用自己的Vue组件库index.js而去掉。
// import Header from '../component/common/header.vue';
// Vue.component('app-header',Header);//这一步是把header组件配置项定义成全局的。但是这样一来会造成main.js文件有很多这样的代码，所以这一步放到index.js文件中去，编写成一个属于自己的Vue组件库。

// 导入根组件：
import AppComponent from '../component/App.vue';

// 渲染根组件，启动项目：
new Vue({
  el:'#app',
  render(createNode){
    console.log(this.axios);
    return createNode(AppComponent);//声明成全局的,通过createNode()方法渲染根组件到index.html中去
  }
});







