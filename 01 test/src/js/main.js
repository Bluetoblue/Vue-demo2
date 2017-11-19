// 1.1导入第三方包：from后面的路径如果有./../那么就相对于当前文件找文件，如果没有，那么就会去node_modules里面去找对应文件：
import Vue  from 'vue';

//1.2 导入跟根组件：
import AppComponent from '../component/App.vue';

// 2.1渲染根组件,启动项目：
new Vue({
  el:'#app',
  // 因为现在是用模块化开发，所以现在template用一个render函数代替，否则报错,而原来的template和methods之类的代码全部写到App.vue(根组件的vue文件)中去：
  render(createNode){
    return createNode(AppComponent);
  }

});