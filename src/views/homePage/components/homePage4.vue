<template>
  <div>
    <Card style="width:90%;margin:0 auto;">
      <p slot="title">
            <Icon type="ios-at" :size="24"/>
            {{$t('homepage4.text_01')}}
      </p>
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
        <FormItem :label-width="0" style="text-align:center;">
            <Button @click="goToConnectUsPage" type="success" ghost><Icon type="md-arrow-round-back" />{{$t('homepage4.text_09')}}</Button>
        </FormItem>
      </Form>
    </Card>
  </div>
</template>
<script>
export default {
  name:'homePage',
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
    goToConnectUsPage(){
      let _this=this;
      _this.$router.push({name:'connectUs'});
    },
    hardToName1(){
      let _this=this;
      _this.$Notice.warning({
          title: '该功能尚未开发！',
          desc: '如果想开通此功能，请联系开发人员。'
      });
    }
  }
}
</script>

<style lang="less">

</style>
