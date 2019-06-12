<template>
  <div class="logoAndName_div_outer">
    <div class="my_company_logo"></div>
    <div class="my_company_name">{{$t('company_name')}}</div>
  </div>
</template>
<script>
export default {
  name:'logoAndName',
  data(){
    return{

    }
  },
}
</script>
<style lang="less">
.my_company_logo{
  width:64px;
  height:64px;
  background-image:url('../../../public/logo.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  float:left;
}
.my_company_name{
  text-align: center;
  line-height: 64px;
  font-size: 22px;
  color:#E8EaEd;
  font-family: "汉仪小麦体简";
  float:left;
}
.logoAndName_div_outer{
  float:left;
}
</style>
