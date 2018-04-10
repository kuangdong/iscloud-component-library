/**
 * Created by dell on 2018/3/23.
 */
import Vue from 'vue';
import '../../css/loadingComponent.scss';
import { getStyle } from '../../utils/util';
import loadingTemplete from './loading.vue';
const Mask=Vue.extend(loadingTemplete);

export default Vue=>{
    const insertDom=(parent,dom)=>{
        if(parent==undefined || dom==undefined)
            return;
        var parentPosition=getStyle(parent,'position');
        if(parentPosition!="absolute" && parentPosition!="fixed"){
            parent.style.position="relative";
        }
        parent.appendChild(dom);
    };
   Vue.directive("loading",{
       bind:function (el,binding) {
            //el.appendChild(instance.template);
           const mask=new Mask({
               el: document.createElement('div'),
               data:{
                   text:el.getAttribute("loading-text"),
                   textColor:el.getAttribute("loading-text-color"),
                   background:el.getAttribute("loading-background"),
                   textSize:el.getAttribute("loading-text-size"),
                   iconColor:el.getAttribute("loading-icon-color"),
                   iconType:el.getAttribute("loading-icon-type"),
                   show:binding.value
               }
           });
           el.instance=mask;
           el.mask=mask.$el;
           insertDom(el,mask.$el);
       },
       update:function (el,binding) {
           if (binding.oldValue !== binding.value) {
                el.instance.show=binding.value;
           }
       }
   });
}