<template>
    <div class="ic-checkbox-container" :class="customClass">
        <span v-for="(item,index) in dataList" class="ic-checkbox-item"
              :class="{select:item.select}"
              @click="onClick(index)">
            <span class="ic-checkbox-icon" :style="getFill(item.select)"><span class="ic-checkbox-fill"></span></span>
            <span class="ic-checkbox-label" :style="{color:getTextColor(item.select)}">{{item.label}}</span>
        </span>
    </div>
</template>
<script>
    export default {
        name:'icCheckbox',
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
                let item=this.dataList[index];
                item.select=!item.select;
                this.$emit('change',item);
            },
            getFill(select){
                let border={};
                if(select && this.fill!=''){
                    border={border:'1px solid '+this.fill,background:this.fill};
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
<style lang="scss" src="../../css/checkbox.scss"></style>