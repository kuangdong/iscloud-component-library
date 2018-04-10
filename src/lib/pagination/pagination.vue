<template>
    <div class="ic-pagination-container" :class="[customClass,{background:background}]">
        <div class="ic-pagination-text" v-if="showTotal">共  {{totalItem}}  条</div>
        <div class="ic-pagination-pre iconfont icon-arrow-left" @click="onPrev" :class="{disable:insideCurrentPage===0}"></div>
        <div class="ic-pagination-page">
            <div class="ic-pagination-item" @click="onItem(item.name)" :class="{active:item.active}" v-for="(item,index) in pageList">{{item.name}}</div>
        </div>
        <div class="ic-pagination-next iconfont icon-right" @click="onNext" :class="{disable:insideCurrentPage===pages-1}"></div>
        <div class="ic-pagination-jump" v-if="showJump"><input v-model="jumpNum" type="number" autocomplete="off" min="1" :max="pages" class="ic-pagination-input"
                                                 @blur="onBlur"
                                                 /><div @click="onJumpPage" class="ic-pagination-jump-btn">{{jumpBtnText}}</div></div>
    </div>
</template>
<script>
    export default {
        name:'icPagination',
        data (){
            return {
                pageList:[],
                pages:0,
                insideCurrentPage:0,
                jumpNum:''
            }
        },
        props:{
            pageSize:{
                type:Number,
                default:1
            },
            totalItem:{
                type:Number,
                default:1
            },
            customClass:{
                type:String,
                default:''
            },
            background:{
                type:Boolean,
                default:false
            },
            currentPage:{
                type:Number,
                default:0
            },
            jumpBtnText:{
                type:String,
                default:'前往'
            },
            showTotal:{
                type:Boolean,
                default:false
            },
            showJump:{
                type:Boolean,
                default:false
            }
        },
        created(){
            this.init();
        },
        methods:{
            init(){
                this.insideCurrentPage=this.currentPage;
                this.calculatePages();
            },
            calculatePages(){
                this.pages=Math.ceil(this.totalItem/this.pageSize);
                this.pageList=this.createPageList();
            },
            createPageList(){
                var list=new Array();
                var maxPage=5;
                var minPage=this.insideCurrentPage-2;
                if(minPage<0)
                    minPage=this.insideCurrentPage-1;
                if(minPage<0)
                    minPage=this.insideCurrentPage;
                if(this.pages<5){
                    maxPage=this.pages;
                }
                else{
                    maxPage=minPage+5;
                    if(maxPage>this.pages){
                        maxPage=this.pages;
                        minPage=this.pages-5;
                    }
                }
                for(var i=minPage;i<maxPage;i++){
                    var obj={name:i+1,active:false};
                    if(obj.name==this.insideCurrentPage+1)
                        obj.active=true;
                    list.push(obj);
                }
                return list;
            },
            onNext(){
                this.insideCurrentPage++;
                if(this.insideCurrentPage>this.pages-1)
                    this.insideCurrentPage=this.pages-1;
                this.pageList=this.createPageList();
                this.$emit('change',this.insideCurrentPage+1);
            },
            onPrev(){
                this.insideCurrentPage--;
                if(this.insideCurrentPage<0)
                    this.insideCurrentPage=0;
                this.pageList=this.createPageList();
                this.$emit('change',this.insideCurrentPage+1);
            },
            onItem(index){
                this.insideCurrentPage=index-1;
                this.pageList=this.createPageList();
                this.$emit('change',this.insideCurrentPage+1);
            },
            onBlur(){
                if(this.jumpNum<1){
                    this.jumpNum=1;
                }
                if(this.jumpNum>this.pages)
                    this.jumpNum=this.pages;
            },
            onJumpPage(){
                if(this.jumpNum<1){
                    this.jumpNum=1;
                }
                if(this.jumpNum>this.pages)
                    this.jumpNum=this.pages;
                this.insideCurrentPage=this.jumpNum-1;
                this.pageList=this.createPageList();
                this.$emit('change',this.insideCurrentPage+1);
            }

        }
    }
</script>
<style lang="scss" src="../../css/pagination.scss"></style>