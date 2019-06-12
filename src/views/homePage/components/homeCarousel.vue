<template>
  <Carousel :autoplay="false" :height="400" trigger="hover" arrow="never">
    <CarouselItem>
      <div class="carousal_page1">
        <Row type="flex" justify="center" align="middle" style="height:100%">
          <Col>
            <p class="carousal_item1_p1">{{$t('company_name')}}</p>
            <p class="carousal_item1_p2">{{$t('homeCarousel.item_1_01')}}</p>
            <Button @click="goToAboutUsPage" type="dashed" ghost class="carousal_item1_btn1"><Icon type="md-arrow-round-back" />{{$t('homeCarousel.item_1_02')}}</Button>
          </Col>
        </Row>
      </div>
    </CarouselItem>
    <CarouselItem>
        <div class="carousal_page2">
          <Row style="height:100%;" type="flex" justify="center" align="middle" :gutter="16">
            <Col style="height:100%;" span="10">
              <div class="carousal_page2_div1"></div>
            </Col>
            <Col span="10">
              <div>
                <p class="page2_div2_p1">{{$t('homeCarousel.item_2_01')}}</p>
                <p class="page2_div2_p2">{{$t('homeCarousel.item_2_02')}}</p>
                <p class="page2_div2_p3">{{$t('homeCarousel.item_2_03')}}</p>
              </div>
            </Col>
          </Row>
        </div>
    </CarouselItem>
    <CarouselItem>
        <div class="carousal_page3">
          <Row style="height:100%;" type="flex" justify="center" align="middle" :gutter="16">
            <Col span="10">
              <p class="page3_div1_p1">{{$t('homeCarousel.item_3_01')}}</p>
              <p class="page3_div1_p2">{{$t('homeCarousel.item_3_02')}}</p>
              <p class="page3_div1_p3">{{$t('homeCarousel.item_3_03')}}</p>
            </Col>
            <Col style="height:100%;" span="10">
              <div class="carousal_page3_div2"></div>
            </Col>
          </Row>
        </div>
    </CarouselItem>
    <CarouselItem>
        <div class="carousal_page4">
          <Row style="height:100%;" type="flex" justify="center" align="middle" :gutter="16">
            <Col span="10">
              <p class="page4_div1_p1">{{$t('homeCarousel.item_4_01')}}</p>
              <p class="page4_div1_p2">{{$t('homeCarousel.item_4_02')}}</p>
              <p class="page4_div1_p3">{{$t('homeCarousel.item_4_03')}}</p>
            </Col>
            <Col style="height:100%;" span="10">
              <div class="carousal_page4_div2"></div>
            </Col>
          </Row>
        </div>
    </CarouselItem>
  </Carousel>
</template>
<script>
export default {
  name:'homeCarousel',
  data(){
    return{
 
    }
  },
  methods:{
    goToAboutUsPage(){
      let _this=this;
      _this.$router.push({name:'aboutMe'});
    }
  }
}
</script>
<style lang="less">
.carousal_page1{
  height:100%;
  background-image:url('http://www.cambricon.com/dayrui/statics/default/images/banner1.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  text-align:center;
  font-family: "汉仪小麦体简";
}
.carousal_item1_p1{
  font-size: 50px;
  color:#FFFFE8;
}
.carousal_item1_p2{
  font-size: 25px;
  color:#FFFFE8;
}
.carousal_item1_btn1{
  margin-top:15px;
}
.carousal_page2{
  height:100%;
  background-color: #ffffff;
  text-align:center;
}
.carousal_page2_div1{
  height:100%;
  background-image:url('http://mg.mw35.com/download/acollection/dfe9454bb5634ec689d3_0.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.page2_div2_p1{
  font-size: 40px;
  font-family: "汉仪小麦体简";
}
.page2_div2_p2{
  font-size: 26px;
  font-family: "汉仪小麦体简";
}
.page2_div2_p3{
  font-size: 20px;
  font-family: "汉仪小麦体简";
}
.carousal_page3{
  height:100%;
  background-color: #ffffff;
  text-align:center;
}
.carousal_page3_div2{
  height:100%;
  background-image:url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560153003036&di=f4b05610ed3172ca1865666e550a2e71&imgtype=0&src=http%3A%2F%2Fbmp.skxox.com%2Flg34670336%2Flg34670336-140421114052.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.page3_div1_p1,.page3_div1_p2,.page3_div1_p3{
  font-family: "汉仪小麦体简";
}
.page3_div1_p1{
  font-size: 40px;
}
.page3_div1_p2{
  font-size: 26px;
}
.page3_div1_p3{
  font-size: 20px;
}
.carousal_page4{
  height:100%;
  background-color: #ffffff;
  text-align:center;
}
.carousal_page4_div2{
  height:50%;
  margin-top:100px;
  background-image:url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556545394&di=9ab870d2ddf91ba6436680e14809bcdd&imgtype=jpg&er=1&src=http%3A%2F%2Fimgeditor.jc35.com%2FMTEditor%2F20120424%2F634708725956406250.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.page4_div1_p1,.page4_div1_p2,.page4_div1_p3{
  font-family: "汉仪小麦体简";
}
.page4_div1_p1{
  font-size: 40px;
}
.page4_div1_p2{
  font-size: 26px;
}
.page4_div1_p3{
  font-size: 20px;
}
</style>
