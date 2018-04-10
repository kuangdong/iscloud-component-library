/**
 * Created by dell on 2018/3/19.
 */
import Vue from 'vue';
import App from './App.vue';
import IscloudUi from './lib/index';
//import IscloudUi from '../dist/iscloudUi';
//import '../dist/index.css';
//import IscloudUi from 'iscloud-component-library';
//import '../node_modules/iscloud-component-library/dist/index.css';
Vue.use(IscloudUi);
new Vue({
    el: '#app',
    template: '<app/>',
    components: { 'app':App }
})


