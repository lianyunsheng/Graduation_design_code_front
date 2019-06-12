<template>
  <div style="padding:16px;">
    <Card>
      <Row>
        <Col>
          <Form :model="formItem" inline>
            <FormItem>
              <Input @on-change="getData1" v-model="formItem.keyword" placeholder="请输入标题关键字" clearable/>
            </FormItem>
            <FormItem>
              <DatePicker type="daterange" format="yyyy/MM/dd" placeholder="请选择起止日期" :editable="false" @on-change="getDateString"></DatePicker>
            </FormItem>
          </Form>
        </Col>
      </Row>
      <Row :gutter="16" v-for="i in items1" :key="'laolian'+i" class-name="whatRow">
        <Col :span="6" v-for="j in items2" :key="'heihei'+j">
          <Card v-if="totalData[i*4+j]" style="width:100%;cursor:pointer;" @click.native="showDrawer(i*4+j)">
            <p slot="title">{{totalData[i*4+j].title}}</p>
            <img :src="totalData[i*4+j].imageUrl" style="width:100%;height:150px;">
            <p class="news-content">{{totalData[i*4+j].content[0]}}</p>
            <p class="news-date">{{totalData[i*4+j].createTime}}</p>
          </Card>
        </Col>
      </Row>
      <Row class-name="pageLayout">
        <Col>
          <Page :total="pageData.total" :current="pageData.current" :page-size="pageData.pageSize" @on-change="getData2" show-total show-elevator/>
        </Col>
    </Row>
    </Card>
    <Drawer :title="drawerData.title" v-model="isShowDrawer" :width="60" style="text-align:center;">
      <img :src="drawerData.imageUrl" style="width:50%;height:250px;margin-bottom:16px;">
      <p style="margin-bottom:16px;color:#999999">时间：{{drawerData.createTime}}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;编辑：老练</p>
      <div v-for="(item, index) in drawerData.content" :key="'content'+index" style="text-align:left;font-size:14px;">
        <p>{{item}}</p>
        <br/>
      </div>
    </Drawer>
  </div>
</template>
<script>
export default {
  name:'newsCenter',
  data(){
    return{
      pageData:{
        total:0,
        current:1,
        pageSize:8,
      },
      items1:[0,1],
      items2:[0,1,2,3],
      formItem:{
        keyword:'',
        startTime:'',
        endTime:'',
      },
      totalData:[],
      drawerData:'',
      isShowDrawer:false
    }
  },
  mounted(){
    this.getData();
  },
  methods:{
    getData(){
      let _this=this;
      let url='news/all'
      _this.$http.get(url,{
        baseURL:'http://localhost:8090/',
        params:{
          page:_this.pageData.current?_this.pageData.current:1,
          pageSize:_this.pageData.pageSize?_this.pageData.pageSize:8,
          startTime:_this.formItem.startTime?_this.formItem.startTime:'',
          endTime:_this.formItem.endTime?_this.formItem.endTime:'',
          keyword:_this.formItem.keyword?_this.formItem.keyword:''
        }
      }).then((res)=>{
        _this.totalData=res.data.data;
        _this.pageData.total=res.data.total;
      });
    },
    resetPageData(){
      let _this=this;
      _this.pageData.pageSize=8;
      _this.pageData.current=1;
    },
    getData1(){
      let _this=this;
      _this.resetPageData();
      _this.getData();
    },
    getDateString(value){
      let _this=this;
      _this.resetPageData();
      _this.formItem.startTime=value[0];
      _this.formItem.endTime=value[1];
      _this.getData();
    },
    getData2(value){
      let _this=this;
      _this.pageData.current=value;
      _this.getData();
    },
    showDrawer(value){
      let _this=this;
      _this.drawerData=_this.totalData[value]?_this.totalData[value]:{};
      _this.isShowDrawer=true;
    }
  }
}
</script>
<style lang="less" scoped>
.ivu-form-item{
  margin-bottom: 8px;
}
.pageLayout{
  text-align:right;
  padding-top: 8px;
}
.whatRow{
  padding:8px 0;
}
.news-content{
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.news-date{
  margin-top:16px;
  color:#aaaaaa;
  text-align:right;
}
</style>
