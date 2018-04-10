import '../../css/loadingComponent.scss';
import { getStyle,mergeObject } from '../../utils/util';
import getSVG from '../../utils/getSVG';
const loading={
    _parent:null,
    _parentPosition:'',
    _defalut:{
        target:'body',
        text:'正在加载...',
        background:'rgba(0,0,0,0.6)',
        testColor:"#fff",
        textSize:"14px",
        iconColor:"#fff",
        iconType:1
    },
    open:function(option){
        if(option==undefined || option==null){
            option={};
        }

        mergeObject(this._defalut,option);
        var loadingContainer=document.createElement("div");
        loadingContainer.id="ic-loading-container";
        loadingContainer.className="ic-loading-container";
        var mask=document.createElement("div");
        mask.className="ic-Mask";
        mask.style.backgroundColor=option.background;
        loadingContainer.appendChild(mask);
        var loadingSpinner=document.createElement("div");
        loadingSpinner.className="ic-loading-spinner";
        loadingContainer.appendChild(loadingSpinner);
        var loadingIcon=document.createElement("i");
        loadingIcon.className="ic-loading-icon";
        loadingIcon.innerHTML=getSVG(option.iconType,option.iconColor);
        loadingSpinner.appendChild(loadingIcon);
        var loadingText=document.createElement("p");
        loadingText.className="ic-loading-text";
        loadingText.innerText=option.text;
        loadingText.style.color=option.textColor;
        loadingText.style.fontSize=option.textSize;
        loadingSpinner.appendChild(loadingText);
        var parent=document.querySelector(option.target);
        this._parent=parent;
        if(parent.querySelector("#ic-loading-container")!=null){
            parent.removeChild(parent.querySelector("#ic-loading-container"));
        }
        var parentPosition=getStyle(parent,'position');
        if(parentPosition!="absolute" && parentPosition!="fixed"){
            this._parentPosition=parentPosition;
            parent.style.position="relative";
        }

        parent.appendChild(loadingContainer);
        loadingContainer.style.opacity=0;
        setTimeout(function () {
            loadingContainer.style.opacity=1;
        },20);

    },
    close:function () {
        var parent=this._parent;
        if(!parent)
            return;
        var loading=parent.querySelector("#ic-loading-container");
        loading.style.position=this._parentPosition;
        loading.style.opacity=0;
        setTimeout(function () {
            parent.removeChild(loading);
        },600);
        this._parent=null;
        this._parentPosition='';
    }
}
export default loading;