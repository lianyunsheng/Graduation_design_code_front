<template>
  <div class="navigation_bar_outer">
    <div class="navigation_cell" @click="fullscreen">
        <Icon :type="isFullscreen?'md-contract':'md-qr-scanner'" :size="24"/>
    </div>
    <div @click="redirctConnectUsPage" class="navigation_cell">{{$t('navigation_bar_6')}}</div>
    <div @click="redirctJoinUsPage" class="navigation_cell">{{$t('navigation_bar_5')}}</div>
    <div @click="redirectAboutMePage" class="navigation_cell">{{$t('navigation_bar_4')}}</div>
    <div @click="redirectNewsCenter" class="navigation_cell">{{$t('navigation_bar_3')}}</div>
    <div @click="redirectProductsCenter" class="navigation_cell">{{$t('navigation_bar_2')}}</div>
    <div @click="redirectHomePage" class="navigation_cell">{{$t('navigation_bar_1')}}</div>
  </div>
</template>
<script>
export default {
  name:'navigationBar',
  data(){
    return{
      isFullscreen:false,
    }
  },
  mounted(){

  },
  methods:{
    redirectHomePage(){
      let _this=this;
      _this.$router.push({name:'home'});
    },
    redirectAboutMePage(){
      let _this=this;
      _this.$router.push({name:'aboutMe'});
    },
    redirctConnectUsPage(){
      let _this=this;
      _this.$router.push({name:'connectUs'});
    },
    redirctJoinUsPage(){
      let _this=this;
      _this.$router.push({name:'joinUs_social'});
    },
    redirectNewsCenter(){
      let _this=this;
      _this.$router.push({name:'newsCenter'});
    },
    redirectProductsCenter(){
      let _this=this;
      _this.$router.push({name:'productsCenter'});
    },
    fullscreen(){
      let _this=this;
      if (!document.fullscreenElement && 
        !document.mozFullScreenElement && !document.webkitFullscreenElement) {
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
          _this.isFullscreen=true;
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
          _this.isFullscreen=true;
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
          _this.isFullscreen=true;
        }
      } else {
        if (document.cancelFullScreen) {
          document.cancelFullScreen();
          _this.isFullscreen=false;
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
          _this.isFullscreen=false;
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
          _this.isFullscreen=false;
        }
      }
    }
  }
}
</script>
<style lang="less">
.navigation_bar_outer{
  float: right;
}
.navigation_cell{
  text-align: center;
  line-height: 64px;
  font-size: 16px;
  color:#E8EaEd;
  font-family: "方正清刻本悦宋简体";
  padding:0 12px;
  cursor: pointer;
  transition: all .2s ease;
  float:right;
}
.navigation_cell:hover{
  font-size: 20px;
}
</style>
