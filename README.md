# iscloud-component-library
Depending on the component library of the Vue.js

<h1>使用文档</h1>
  首先引入vue.js然后引入dist文件夹中的iscloudUi.js和index.css。
  <h3>loading组件</h3>
  1.全局引用loading组件的方法：
       let loading=this.$loading;
       loading.open({iconType:1,iconColor:'#55a8fd',textColor:'#55a8fd',background:'rgba(0,0,0,0.8)',textSize:'12px'});
  2.关闭全局loading组件:
       let loading=this.$loading;
       loading.close();
