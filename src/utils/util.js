/**
 * Created by dell on 2018/3/22.
 */
const getStyle=function (dom,styleName) {
    return dom.currentStyle ? dom.currentStyle[styleName] : getComputedStyle(dom, null)[styleName];
}
const mergeObject=function (defaultObj,originalObj) {
    for(let d in defaultObj){
        var value=defaultObj[d];
        if(originalObj[d]==undefined){
            originalObj[d]=value;
        }
    }
    return originalObj;
}
export {
    getStyle,
    mergeObject
}