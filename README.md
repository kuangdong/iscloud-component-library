# iscloud-component-library
Depending on the component library of the Vue.js

<h1>使用文档</h1>
  首先引入vue.js然后引入dist文件夹中的iscloudUi.js和index.css。
  <h3>loading组件</h3>
  <p>1.全局引用loading组件的方法:</p> 
   <div style="backgroud-color:#f8f8f8">
  <code>let loading=this.$loading;</code>
  <code>loading.open({iconType:1,iconColor:'#55a8fd',textColor:'#55a8fd',background:'rgba(0,0,0,0.8)',textSize:'12px'});</code>
  </div>
  
  <p>2.关闭全局loading组件:</p>
  <code>
  let loading=this.$loading;
  
  loading.close();
  </code>
  <p>loading.open方法的配置。</p>
  <table>
    <tr>
      <th>参数</th>
      <th>说明</th>
      <th>类型</th>
      <th>可选值</th>
      <th>默认值</th>
  </tr>
  <tr>
    <td>target</td>
    <td>Loading 需要覆盖的 DOM 节点。传入字符串.</td>
    <td>String</td>
    <td>-</td>
    <td>body</td>
  </tr>
  <tr>
    <td>text</td>
    <td>显示在加载图标下方的加载文字</td>
    <td>String</td>
    <td>-</td>
    <td>正在加载...</td>
  </tr>
  <tr>
    <td>background</td>
    <td>遮罩背景色</td>
    <td>String</td>
    <td>-</td>
    <td>rgba(0,0,0,0.6)</td>
  </tr>
  <tr>
    <td>testColor</td>
    <td>加载文字字体颜色</td>
    <td>String</td>
    <td>-</td>
    <td>#fff</td>
  </tr>
  <tr>
    <td>textSize</td>
    <td>加载文字字体大小</td>
    <td>String</td>
    <td>-</td>
    <td>14px</td>
  </tr>
  <tr>
    <td>iconColor</td>
    <td>加载图标颜色</td>
    <td>String</td>
    <td>-</td>
    <td>#fff</td>
  </tr>
  <tr>
    <td>iconColor</td>
    <td>加载图标类型(共有8种图标类型)</td>
    <td>Number</td>
    <td>-</td>
    <td>1</td>
  </tr>
  </table>
