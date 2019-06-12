<template>
  <div class="homePage3_div_outer">
    <Row justify="center" type="flex" align="middle">
      <Col span="5">
        <Card style="width:98%;margin:auto;">
          <div style="text-align:center">
              <img src="../../../../static/Cooperation.png" class="homepage3-img">
              <h3>{{$t('homepage3.cooperation')}}</h3>
          </div>
        </Card>
      </Col>
      <Col span="5">
        <Card style="width:98%;margin:auto;">
          <div style="text-align:center">
              <img src="../../../../static/Profession.png" class="homepage3-img">
              <h3>{{$t('homepage3.profession')}}</h3>
          </div>
        </Card>
      </Col>
      <Col span="5">
        <Card style="width:98%;margin:auto;">
          <div style="text-align:center">
              <img src="../../../../static/Innovation.png" class="homepage3-img">
              <h3>{{$t('homepage3.innovation')}}</h3>
          </div>
        </Card>
      </Col>
      <Col span="5">
        <Card style="width:98%;margin:auto;">
          <div style="text-align:center">
              <img src="../../../../static/Book.png" class="homepage3-img">
              <h3>{{$t('homepage3.accumulation')}}</h3>
          </div>
        </Card>
      </Col>
    </Row>
    <Row>
      <Col style="padding-top:20px;text-align:center;">
        <Button @click="goToJoinUsPage" type="success" ghost><Icon type="md-arrow-round-back" />{{$t('homepage3.button1')}}</Button>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  name:'homePage3',
  data(){
    return{

    }
  },
  mounted(){

  },
  methods:{
    goToJoinUsPage(){
      let _this=this;
      _this.$router.push({name:'joinUs_social'});
    }
  }
}
</script>
<style lang="less">
.homepage3-img{
  width:30%;
  height:30%;
}
h3{
  color:#282c34;  
}
.homePage3_div_outer{
  background-color: #ffffff;
  padding-top:20px;
  padding-bottom:20px;
}
</style>
