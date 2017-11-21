// 导入组件：
import HomeComponent from '../component/home/home.vue';
import NewsListComponent from '../component/news/news_list.vue';
import NewsDetailComponent from '../component/news/news_detail.vue';


// 这里对外到处一个路由配置项：
export default{
  routes:[
    // 首页路由配置：
    {name:"/", path:"/",redirect:"/index"},
    {name:"i", path:"/index", component:HomeComponent},
    // 新闻路由配置：
    { name:"nl", path:"/news/list", component:NewsListComponent},
    {name:"nd", path:"/news/detail/:id",  component:NewsDetailComponent}
    
  ]
}