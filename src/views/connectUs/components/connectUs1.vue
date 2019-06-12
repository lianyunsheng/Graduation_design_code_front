<template>
  <div class="connectUs1_div1">
    <div class="connectUs1_div2">
      <h1>{{$t('connectUs.text1')}}</h1>
      <hr/>
    </div>
    <div class="connectUs1_div3">
      <Row justify="center" type="flex" align="middle">
        <Col span="6">
          <Card style="width:320px;margin:auto;height:197px;">
              <div style="text-align:center">
                  <img src="http://www.cambricon.com/dayrui/statics/default/images/page_cantact_one_ino1.png">
                  <h3 style="color:#1066be;">电话：86-10-86868686</h3>
              </div>
          </Card>
        </Col>
        <Col span="6">
          <Card style="width:320px;margin:auto;height:197px;">
              <div style="text-align:center">
                  <img src="http://www.cambricon.com/dayrui/statics/default/images/page_cantact_one_ino2.png">
                  <h3 style="color:#33a9e7;">
                    商务合作：business@laolian.com
                    <br/>
                    媒体垂询：media@laolian.com
                  </h3>
              </div>
          </Card>
        </Col>
        <Col span="6">
          <Card style="width:320px;margin:auto;height:197px;">
              <div style="text-align:center">
                  <img src="http://www.cambricon.com/dayrui/statics/default/images/page_cantact_one_ino4.png">
                  <h3 style="color:#63cac9;">沈阳市浑南新区南屏中路6号</h3>
              </div>
          </Card>
        </Col>
      </Row>
      <br/>
      <Row justify="center" type="flex" align="middle">
        <Col span="6">
          <Card style="width:320px;margin:auto;height:197px;">
              <div style="text-align:center">
                  <img src="http://www.cambricon.com/dayrui/statics/default/images/page_cantact_one_ino6.png">
                  <h3 style="color:#1066be;">官方微信号：laolianfriend</h3>
              </div>
          </Card>
        </Col>
        <Col span="6">
          <Card style="width:320px;margin:auto;height:197px;">
              <div style="text-align:center">
                  <img src="http://www.cambricon.com/dayrui/statics/default/images/page_cantact_one_ino5.png">
                  <h3 style="color:#47b1e9;">小练制造所@新浪微博</h3>
              </div>
          </Card>
        </Col>
        <Col span="6">
          <Card style="width:320px;margin:auto;height:197px;">
              <div style="text-align:center">
                  <img src="http://www.cambricon.com/dayrui/statics/default/images/page_cantact_one_ino3.png">
                  <h3 style="color:#63cac9;">小练制造所@知乎</h3>
              </div>
          </Card>
        </Col>
      </Row>
    </div>
  </div>
</template>
<script>
export default {
  name:'connectUs1',
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
.connectUs1_div1{
  padding-top: 60px;
}
.connectUs1_div2{
  padding:0 180px;
  
}
.connectUs1_div2 hr{
  margin-top:3px;
  margin-bottom:17px;
}
.connectUs1_div3 img{
  padding-top:20px;
  padding-bottom:10px;
}
.connectUs1_div3{
  font-family: "方正苏新诗柳楷简体";
  font-size:12px;
}
</style>
