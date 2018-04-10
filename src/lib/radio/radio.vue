<template>
    <div class="ic-radio-container" :class="customClass">
        <span v-for="(item,index) in dataList" class="ic-radio-item"
              :class="{select:item.select}"
               @click="onClick(index)">
            <span class="ic-radio-icon" :style="getBorder(item.select)"><span class="ic-radio-fill" :style="{background:fill}"></span></span>
            <span class="ic-radio-label" :style="{color:getTextColor(item.select)}">{{item.label}}</span>
        </span>
    </div>
</template>
<script>
    export default {
        name:'icRadio',
        data (){
            return {
            }
        },
        props:{
            dataList:{
                type:Array,
                default:function () {
                    return []
                }
            },
            customClass:{
                type:String,
                default:''
            },
            fill:{
                type:String,
                default:''
            }
        },
        methods:{
            onClick(index){
                for(let i=0;i<this.dataList.length;i++){
                    if(this.dataList[i].select){
                        this.dataList[i].select=false;
                        break;
                    }
                }
                let item=this.dataList[index];
                item.select=true;
                this.$emit('change',item);
            },
            getBorder(select){
                let border={};
                if(select && this.fill!=''){
                    border={border:'1px solid '+this.fill};
                }
                return border;
            },
            getTextColor(select){
                let color=''
                if(select){
                    color=this.fill
                }
                return color;
            }
        }
    }
</script>
<style lang="scss" src="../../css/radio.scss"></style>
