<template>
  <div class="homepage2_div_outer">
    <Row type="flex" justify="center" align="middle" class-name="hello_thanks">
      <Col span="7">
        <div class="picture_div" id="picture_div1"></div>
        <p>{{$t('homepage2.p1')}}</p>
      </Col>
      <Col span="7">
        <div class="picture_div" id="picture_div2"></div>
        <p>{{$t('homepage2.p2')}}</p>
      </Col>
      <Col span="7">
        <div class="picture_div" id="picture_div3"></div>
        <p>{{$t('homepage2.p3')}}</p>
      </Col>
    </Row>
    <Row type="flex" justify="center" align="middle" class-name="thanks_hello">
      <Col>
        <Badge text="new" type="error"><Button @click="goToNewsCenter" type="success" ghost><Icon type="md-arrow-round-back" />{{$t('homepage2.button1')}}</Button></Badge>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  name:'homePage2',
  data(){
    return{

    }
  },
  mounted(){

  },
  methods:{
    goToNewsCenter(){
      let _this=this;
      _this.$router.push({name:'newsCenter'});
    }
  }
}
</script>
<style lang="less">
.homepage2_div_outer{
  padding-top:30px;
  padding-bottom:30px;
  background-color: #ffffff;
}
.picture_div{
  width:389px;
  height:184px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
#picture_div1{
  background-image:url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556040510767&di=db5e5f45e528a3d069578e1f0da5dd3a&imgtype=0&src=http%3A%2F%2Fpaper.taizhou.com.cn%2Ftzrb%2Fres%2F1%2F1%2F2017-03%2F09%2F08%2Fres13_attpic_brief.jpg');
}
#picture_div2{
  background-image:url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556042908651&di=0fecf1893214d348001bec9e74ab423f&imgtype=0&src=http%3A%2F%2Fimg1.cache.netease.com%2Fcatchpic%2FB%2FBD%2FBD86392ECC2A0E1C019DCDE0FE914481.jpg');
}
#picture_div3{
  background-image:url('https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1556042769344&di=41c01b0d35bdbf07ea6baaf294b902f8&imgtype=0&src=http%3A%2F%2Fwww.plmfj.com%2FUpFiles%2FArticle%2F2014%2F4%2F26%2F2014042652128109.jpg');
}
.hello_thanks p{
  font-size: 16px;
  padding-top:10px;
  font-family: "方正清刻本悦宋简体";
}
.thanks_hello{
  margin-top:40px;
}
</style>
