/**
 * Created by dell on 2018/3/20.
 */
import loading from './loading/loadingService.js'
import loadingDir from './loading/loadingDirective'
import pagination from './pagination/pagination.vue'
import radio from './radio/radio.vue'
import checkbox from  './checkbox/checkbox.vue'
const iscloudUi={
  install(Vue,options){
    Vue.use(loadingDir);
    Vue.component(pagination.name,pagination);
    Vue.component(radio.name,radio);
    Vue.component(checkbox.name,checkbox);

    Vue.prototype.$loading=loading;
  },
  Loading:loading
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(iscloudUi)
}
export default iscloudUi