<template>
  <div id="test">
    <div>loading插件</div>
    <button @click="onOpen">open</button>
    <button @click="onClose">close</button>
    <div class="testDiv"
         v-loading="loadingOpen1"
         loading-background="rgba(255,255,255,0.8)"
         loading-text-size="12px"
         loading-text-color="#55a8fd"
         loading-icon-type="8"
         loading-icon-color="#55a8fd"
         @click="onOpenLoading(1)">
    </div>
    <div class="testDiv"
         v-loading="loadingOpen2"
         @click="onOpenLoading(2)">
    </div>
    <div>分页器</div>
    <ic-pagination
            :total-item="totalItem"
            :page-size="pageSize"
             :background="true"
            :show-jump="true"
            :current-page="4"
            jump-btn-text="go"
            custom-class="custormPagintion"
             @change="onPaginationChange">
    </ic-pagination>
    <div>单选组件</div>
    <ic-radio custom-class="customRadio"
              :data-list="radioData"
              :fill="'#ff0000'"
              @change="onRadioChange">

    </ic-radio>
    <div>多选框组件</div>
    <ic-checkbox custom-class="customCheckbox"
                 :data-list="checkboxData"
                 :fill="'#ff0000'"
                 @change="onCheckboxChange">

    </ic-checkbox>
  </div>
</template>

<script>
//import IscloudUi from './lib/index';
//import isUi from "iscloud-component-library";
//import IscloudUi from '../dist/iscloudUi';
//import IscloudUi from 'iscloud-component-library';
//import '../dist/index.css';
export default {
  name: 'app',
  data () {
    return {
        loadingOpen1:false,
        loadingOpen2:false,
        totalItem:92,
        pageSize:10,
        radioData:[{label:'北京市',select:false,value:1},{label:'上海市',select:false,value:2},{label:'广州市',select:false,value:3},{label:'天津市',select:false,value:4},{label:'重庆市',select:false,value:5}],
        checkboxData:[{label:'北京市',select:false,value:1},{label:'上海市',select:false,value:2},{label:'广州市',select:false,value:3},{label:'天津市',select:false,value:4},{label:'重庆市',select:false,value:5}]
    }
  },
  components: {

  },
    methods: {
        onOpen(){
            //let loading=IscloudUi.Loading;
            let loading=this.$loading;
            loading.open({iconType:1,iconColor:'#55a8fd',textColor:'#55a8fd',background:'rgba(0,0,0,0.8)',textSize:'12px'});
        },
        onClose(){
            //let loading=IscloudUi.Loading;
            this.$loading.close();
            //loading.close();
        },
        onOpenLoading(value){
            console.info("value=",value);
            if(value=="1")
            {
                this.loadingOpen1=!this.loadingOpen1;
            }
            else if(value=="2"){
                this.loadingOpen2=!this.loadingOpen2;
            }
        },
        onPaginationChange(page){
            console.info("page=",page);
        },
        onRadioChange(item){
            console.info("raido",item);
            console.info("radioData=",this.radioData);
        },
        onCheckboxChange(item){
            console.info("checkbox",item);
            console.info("checkboxData=",this.checkboxData);
        }
    }

}
</script>
<style>
.testDiv{
  width:200px;
  height: 200px;
  background-color: blue;
  border: 1px solid #f00;
}
  .custormPagintion .ic-pagination-jump-btn{
    border: 1px solid #dfdfdf;
    height:25px;
    line-height: 19px;
  }
  .customRadio .ic-radio-label{
     font-size:13px;
  }
  .customCheckbox{
     font-size: 12px;
  }
.customCheckbox .ic-checkbox-icon{
  width:12px;
  height:12px;
}
.customCheckbox .ic-checkbox-fill{
  width:7px;
  height: 4px;
  top:2px;
}
</style>

