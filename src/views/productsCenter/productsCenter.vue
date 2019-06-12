<template>
  <div style="padding:16px;">
    <Card>
      <Row>
        <Col>
          <Form :model="formItem" inline>
            <FormItem>
              <Select @on-change="getData1" v-model="formItem.keyword" placeholder="请选择类别" clearable>
                <Option v-for="item in keywordList" :value="item.value" :key="item.value">{{ item.label }}</Option>
              </Select>
            </FormItem>
            <FormItem>
              <Input @on-change="getData2" v-model="formItem.productName" placeholder="请输入产品名称" clearable/>
            </FormItem>
          </Form>
        </Col>
      </Row>
      <Row :gutter="16" v-for="i in items1" :key="'product_row'+i" class-name="IKnowWhatRow">
        <Col :span="6" v-for="j in items2" :key="'product_col'+j">
          <Card v-if="totalData[i*4+j]" style="width:100%;cursor:pointer;" @click.native="showModel(i*4+j)">
            <img :src="totalData[i*4+j].imageUrl" style="width:100%;height:150px;">
            <p class="product_name">{{totalData[i*4+j].productName}}</p>
          </Card>
        </Col>
      </Row>
      <Row class-name="row_of_pageComponent">
        <Col>
          <Page :total="pageData.total" :current="pageData.current" :page-size="pageData.pageSize" @on-change="getData3" show-total show-elevator/>
        </Col>
      </Row>
    </Card>
    <Modal
      :scrollable="true"
      v-model="modalIsShow"
      class-name="vertical-center-modal"
      :closable="false"
      :width="720">
      <Row type="flex" justify="center" align="middle">
        <Col :span="12" class-name="hard_to_name2">
          <img :src="modelData.imageUrl" style="width:310px;height:250px"/>
        </Col>
        <Col :span="12" class-name="hard_to_name1">
          <p><span>产品名称：</span>{{modelData.productName}}</p>
          <p><span>品牌：</span>{{modelData.brand}}</p>
          <p><span>型号：</span>{{modelData.model}}</p>
          <p><span>规格：</span>{{modelData.specification}}</p>
          <p><span>材质：</span>{{modelData.material}}</p>
          <p><span>适用机床：</span>{{modelData.suitableMachine}}</p>
          <p><span>描述：</span>{{modelData.description}}</p>
          <p><span>创建时间：</span>{{modelData.createTime}}</p>
        </col>
      </Row>
    </Modal>
  </div>
</template>
<script>
export default {
  name:'productsCenter',
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
        productName:'',
      },
      totalData:[],
      modelData:'',
      modalIsShow:false,
      keywordList:[
        {value:'',label:'全部'},
        {value:'经济型数控机床',label:'经济型数控机床'},
        {value:'精密型数控机床',label:'精密型数控机床'},
        {value:'超精密型数控机床',label:'超精密型数控机床'}
      ]
    }
  },
  mounted(){
    this.getData();
  },
  methods:{
    getData(){
      let _this=this;
      let url='products/all'
      _this.$http.get(url,{
        baseURL:'http://localhost:8090/',
        params:{
          page:_this.pageData.current?_this.pageData.current:1,
          pageSize:_this.pageData.pageSize?_this.pageData.pageSize:8,
          keyword:_this.formItem.keyword?_this.formItem.keyword:'',
          productName:_this.formItem.productName?_this.formItem.productName:''
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
    getData2(){
      let _this=this;
      _this.resetPageData();
      _this.getData();
    },
    getData3(value){
      let _this=this;
      _this.pageData.current=value;
      _this.getData();
    },
    showModel(value){
      let _this=this;
      _this.modelData=_this.totalData[value]?_this.totalData[value]:{};
      _this.modalIsShow=true;
    }
  }
}
</script>
<style lang="less" scoped>
.ivu-form-item{
  margin-bottom: 8px;
}
.row_of_pageComponent{
  text-align:right;
  padding-top: 8px;
}
.IKnowWhatRow{
  padding:8px 0;
}
.product_name{
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
  text-align:center;
  margin-top:12px;
  font-family: "方正苏新诗柳楷简体";
  font-size:16px;
  font-weight: 700;
}
.vertical-center-modal{
  display: flex;
  align-items: center;
  justify-content: center;
}
.hard_to_name1 span{
  display: inline-block;
  width:90px;
  font-family: "方正苏新诗柳楷简体";
  font-size:16px;
  font-weight: 700;
  text-align:right;
}
.hard_to_name2{
  text-align: center;
  line-height:100%;
}
</style>
