<template>
  <div class="aboutMe_1">
    <Row type="flex" justify="center" align="middle">
      <Col>
        <p class="aboutMe_1_p1">{{$t('company_name')}}</p>
      </Col>
    </Row>
    <Row type="flex" justify="center" align="middle">
      <Col>
        <p class="aboutMe_1_p2">{{$t('homeCarousel.item_1_01')}}</p>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  name:'aboutMe1',
  data(){
    return{

    }
  },
  mounted(){

  },
  methods:{

  },
}
</script>
<style lang="less">
.aboutMe_1{
  height:400px;
  background-image:url('http://www.cambricon.com/dayrui/statics/default/images/banner1.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.aboutMe_1_p1{
  font-size: 50px;
  font-family: "汉仪小麦体简";
  color:#FFFFE8;
  text-align: center;
  padding-top:100px;
}
.aboutMe_1_p2{
  font-size: 25px;
  font-family: "汉仪小麦体简";
  color:#FFFFE8;
  text-align: center;
}
</style>
