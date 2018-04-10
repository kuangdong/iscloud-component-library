<template>
    <transition name="ic-loading-fade">
    <div class="ic-loading-container" v-show="show">
        <div class="ic-Mask" :style="{'backgroundColor':reversedBg}"></div>
        <div class="ic-loading-spinner">
            <i class="ic-loading-icon" v-html="icon"></i>
            <p class="ic-loading-text" :style="{'color':reverseTextColor,'font-size':reverseTextSize}">{{reversedText}}</p>
        </div>
    </div>
    </transition>
</template>
<script>
    import getSVG from '../../utils/getSVG';
    export default {
        data() {
            return {
                text:'',
                background:'',
                textColor:"#fff",
                textSize:"14px",
                iconColor:"#fff",
                iconType:1,
                show:false
            }
        },
        computed:{
            reversedText:function () {
                if(!this.text)
                    this.text="正在加载...";
                return this.text;
            },
            reversedBg:function () {
                if(!this.background)
                    this.background='rgba(0,0,0,0.6)';
                return this.background;
            },
            reverseTextColor:function () {
                if(!this.textColor)
                    this.textColor='#fff';
                return this.textColor;
            },
            reverseTextSize:function () {
                if(!this.textSize)
                    this.textSize='14px';
                return this.textSize;
            },
            icon:function () {
                if(!this.iconType)
                    this.iconType=1;
                if(!this.iconColor)
                    this.iconColor='#fff';
                var icon=getSVG(this.iconType,this.iconColor);

                return icon;
            }
        },
        methods:{

        }
    }
</script>