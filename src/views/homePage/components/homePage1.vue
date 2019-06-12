<template>
    <div class="homepage1_div_outer">
      <Row style="height:100%;" type="flex" justify="center" align="middle">
        <Col style="height:100%;" span="10">
          <div class="homepage1_div_inner1"></div>
        </Col>
        <Col span="10">
          <div class="homepage1_div_inner2">
            <p class="homepage1_div_inner2_p1">{{$t('homepage1.p1')}}</p>
            <p class="homepage1_div_inner2_p2">{{$t('homepage1.p2')}}</p>
            <p class="homepage1_div_inner2_p3">{{$t('homepage1.p3')}}</p>
            <Button @click="goToProductsCenter" type="success" ghost><Icon type="md-arrow-round-back" />{{$t('homepage1.button1')}}</Button>
          </div>
        </Col>
      </Row>
    </div>
</template>
<script>
export default {
  name:'homePage1',
  data(){
    return{

    }
  },
  mounted(){

  },
  methods:{
    goToProductsCenter(){
      let _this=this;
      _this.$router.push({name:'productsCenter'});
    }
  }
}
</script>
<style lang="less">
.homepage1_div_outer{
  height:400px;
  background-color: #ffffff;
  text-align:center;
}
.homepage1_div_inner1{
  height:100%;
  background-image:url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556032117252&di=4bfa0866107c9964579937cfc7d2c9e3&imgtype=0&src=http%3A%2F%2Fwww.1024sj.com%2Fuploadimg%2F2012-2%2F509989218201222925612.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.homepage1_div_inner2_p1,.homepage1_div_inner2_p2,.homepage1_div_inner2_p3{
  font-size: 30px;
  font-family: "方正清刻本悦宋简体";
}
.homepage1_div_inner2_p3{
  margin-bottom: 40px;
}
</style>
