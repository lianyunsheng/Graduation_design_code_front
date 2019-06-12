<template>
  <div class="connectUs2_div1">
    <div class="connectUs2_div2">
      <h1>{{$t('connectUs.text2')}}</h1>
      <hr/>
    </div>
    <div class="connectUs2_div3">
      <Row justify="center" type="flex" align="middle">
        <Col span="18">
          <Card style="width:98.5%;margin:0 auto;">
            <Form :model="formData" :label-width="100">
              <FormItem label="主题：">
                  <Input v-model="formData.title"/>
              </FormItem>
              <FormItem label="姓名：">
                  <Input v-model="formData.name"/>
              </FormItem>
              <FormItem label="地址：">
                  <Input v-model="formData.address"/>
              </FormItem>
              <FormItem label="手机号：">
                  <Input v-model="formData.phoneNumber"/>
              </FormItem>
              <FormItem label="Email：">
                  <Input v-model="formData.email"/>
              </FormItem>
              <FormItem label="内容：">
                  <Input type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="Enter something..." v-model="formData.content"/>
              </FormItem>
              <FormItem :label-width="0" style="text-align:center;">
                  <Button @click="hardToName1" type="success">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{$t('homepage4.text_08')}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</Button>
              </FormItem>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  </div>
</template>
<script>
export default {
  name:'connectUs2',
  data(){
    return{
      formData:{
        title:'',
        name:'',
        address:'',
        phoneNumber:'',
        email:'',
        content:'',
      }
    }
  },
  mounted(){

  },
  methods:{
    hardToName1(){
      let _this=this;
      _this.$Notice.warning({
          title: '该功能尚未开发！',
          desc: '如果想开通此功能，请联系开发人员。'
      });
    }
  },
}
</script>
<style lang="less">
.connectUs2_div1{
  padding-top: 40px;
}
.connectUs2_div2{
  padding:0 180px;
}
.connectUs2_div2 hr{
  margin-top:3px;
  margin-bottom:17px;
}
</style>
