<template>
  <div class="languageSwitch-div1">
    <div class="languageSwitch-div2 addClass_a" @mouseenter="mouseenterHandler">
      <div class="languageSwitch-div3 flagShow abc"></div>
    </div>
    <transition name="draw">
    <div class="showOrHideDiv" v-show="isShow">
      <div class="languageSwitch-div2 addClass_b" @click="clickHandler1">
        <div class="languageSwitch-div3 usFlag"></div>
      </div>
      <div class="languageSwitch-div2 addClass_b" @click="clickHandler2">
        <div class="languageSwitch-div3 cnFlag"></div>
      </div>
      <div class="languageSwitch-div2 addClass_b" @click="clickHandler3">
        <div class="languageSwitch-div3 jpFlag"></div>
      </div>
    </div>
    </transition>
  </div>
</template>
<script>
export default {
  name:"languageSwitch",
  data(){
    return{
      isShow:false
    }
  },
  mounted(){

  },
  methods:{
    mouseenterHandler(){
      let _this=this;
      _this.isShow=true;
    },
    clickHandler1(){
      let _this=this;
      let ele=document.getElementsByClassName('abc')[0]
      ele.classList.remove('flagShow','usFlag','cnFlag','jpFlag');
      ele.classList.add('usFlag');
      _this.isShow=false;
      _this.$i18n.locale='en';
    },
    clickHandler2(){
      let _this=this;
      let ele=document.getElementsByClassName('abc')[0]
      ele.classList.remove('flagShow','usFlag','cnFlag','jpFlag');
      ele.classList.add('cnFlag');
      _this.isShow=false;
      _this.$i18n.locale='zh';
    },
    clickHandler3(){
      let _this=this;
      let ele=document.getElementsByClassName('abc')[0]
      ele.classList.remove('flagShow','usFlag','cnFlag','jpFlag');
      ele.classList.add('jpFlag');
      _this.isShow=false;
      _this.$i18n.locale='ja';
    }
  }
}
</script>
<style lang="less">
.languageSwitch-div1{
  position: fixed;
  right: 10px;
  top:16px;
  z-index: 800; 
}
.languageSwitch-div2{
  width:32px;
  height:32px;
  cursor:pointer;
  position: relative;
  border-radius: 6px;
}
.languageSwitch-div3{
  width:24px;
  height:24px;
  position:absolute;
  left:4px;
  top:4px;
}
.showOrHideDiv{
  height:96px;
  overflow: hidden;
}
.addClass_a{
  box-shadow: 0 0 2px 0 #aaaaaa;
}
.addClass_b:hover{
  background-color: rgba(80, 80, 80, 0.3);
}
.flagShow{
  background-image: url('../../../static/cn.png');
}
.usFlag{
  background-image: url('../../../static/us.png');
}
.cnFlag{
  background-image: url('../../../static/cn.png');
}
.jpFlag{
  background-image: url('../../../static/jp.png');
}
.draw-enter-active, .draw-leave-active {
    transition: all .3s ease;
}
.draw-enter, .draw-leave-to{
    height: 0;
}
</style>