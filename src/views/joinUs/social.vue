<template>
  <div style="padding:16px;">
      <Modal
        :scrollable="true"
        v-model="applyModel"
        class-name="vertical-center-modal"
        :footer-hide="true">
        <Row>
          <Col>
            发布时间：{{modelData.createTime}}
          </Col>
        </Row>
        <Row>
          <Col class-name="popping">
            <Badge text="急">{{modelData.job}}&nbsp;&nbsp;</Badge>
          </Col>
        </Row>
        <Row>
          <Col>
            {{modelData.department}}<Divider type="vertical" />{{modelData.type}}<Divider type="vertical" />{{modelData.location}}
          </Col>
        </Row>
        <Divider></Divider>
        <Form :model="presonData" :label-width="55">
          <FormItem label="姓名：" prop="name">
            <Input v-model="presonData.name" placeholder="Enter your name"/>
          </FormItem>
          <FormItem label="手机：" prop="phone">
            <Input v-model="presonData.phone" placeholder="Enter your phone number"/>
          </FormItem>
          <FormItem label="邮箱：" prop="email">
            <Input v-model="presonData.email" placeholder="Enter your email"/>
          </FormItem>
          <FormItem label="简历：">
            <Row>
              <Col :span="6">
                <Upload action="http://localhost:8090/social/jobs/application/resume">
                    <Button icon="ios-cloud-upload-outline">上传简历</Button>
                </Upload>
              </Col>
              <Col :span="18" style="color:#c8c8d7">
                支持PDF、WORD、PPT、JPG、PNG、WPS等简历格式
              </Col>
            </Row>
          </FormItem> 
          <FormItem label="附件：">
            <Row>
              <Col :span="6">
                <Upload multiple action="http://localhost:8090/social/jobs/application/annex" :max-size="51200">
                    <Button icon="ios-cloud-upload-outline">上传附件</Button>
                </Upload>
              </Col>
              <Col :span="18" style="color:#c8c8d7">
                所有附件大小总和不超过50MB
              </Col>
            </Row>
          </FormItem>
          <FormItem>
            <Button type="success" @click="uploadPersonData">提交申请</Button>
          </FormItem>
        </Form>
      </Modal>
      <Modal
        :scrollable="true"
        v-model="modalIsShow"
        class-name="vertical-center-modal"
        :closable="false">
        <Row>
          <Col>
            发布时间：{{modelData.createTime}}
          </Col>
        </Row>
        <Row type="flex" align="middle">
          <Col class-name="popping" :span="18">
            <Badge text="急">{{modelData.job}}&nbsp;&nbsp;</Badge>
          </Col>
          <Col :span="6" style="text-align:right;">
            <Button type="success" @click="openApplyModel">申请职位</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            {{modelData.department}}<Divider type="vertical" />{{modelData.type}}<Divider type="vertical" />{{modelData.location}}
          </Col>
        </Row>
        <Divider></Divider>
        <Row>
          <Col class-name="breaking">
            <p style="font-size:14px;">岗位职责：</p>
            <p v-for="(item, index) in modelData.responsibilities" :key="'responsibility'+index">{{index+1}}、{{item}}</p>
          </Col>
        </Row>
        <Row>
          <Col class-name="breaking">
            <p style="font-size:14px;">任职条件：</p>
            <p v-for="(item, index) in modelData.qualifications" :key="'qualification'+index">{{index+1}}、{{item}}</p>
          </Col>
        </Row>
      </Modal>
      <Card>
        <Row>
          <Col :span="20">
            <Form :model="formItem" inline>
              <FormItem>
                <Input @on-change="getJobData1" v-model="formItem.job" placeholder="请输入职位关键字" clearable/>
              </FormItem>
              <FormItem>
                <Select @on-change="getJobData2" v-model="formItem.location" placeholder="请选择地点" clearable>
                  <Option v-for="item in locationList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </FormItem>
              <FormItem>
                <Select @on-change="getJobData3" v-model="formItem.type" placeholder="请选择职能类型" clearable>
                  <Option v-for="item in typeList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </FormItem>
              <FormItem>
                <Select @on-change="getJobData4" v-model="formItem.department" placeholder="请选择部门" clearable>
                  <Option v-for="item in departmentList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </FormItem>
            </Form>
          </Col>
          <Col :span="4" class-name="school_joinUs">
            <Button type="success" @click="toSchool">校园招聘</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table :columns="tableColumns" :data="tableData" size="large" @on-row-click="rowClickHandle"></Table>
          </Col>
        </Row>
        <Row class-name="pageLayout">
          <Col>
            <Page :total="pageData.total" :current="pageData.current" :page-size="pageData.pageSize" @on-change="getJobData5" show-total show-elevator/>
          </Col>
        </Row>
      </Card>
  </div>
</template>
<script>
export default {
  name:'joinUs_social',
  data(){
    return{
      modalIsShow:false,
      applyModel:false,
      presonData:{
        name:'',
        phone:'',
        email:''
      },
      modelData:{
        createTime:'',
        job:'',
        responsibilities:[],
        department:'',
        type:'',
        location:'',
        qualifications:[]
      },
      formItem:{
        job:'',
        location:'',
        type:'',
        department:''
      },
      pageData:{
        total:0,
        current:1,
        pageSize:10
      },
      locationList:[
        {value:'大连',label:'大连'},
        {value:'沈阳',label:'沈阳'},
        {value:'哈尔滨',label:'哈尔滨'},
        {value:'北京',label:'北京'},
        {value:'上海',label:'上海'},
        {value:'重庆',label:'重庆'},
        {value:'广州',label:'广州'},
        {value:'日本',label:'日本'},
        {value:'美国',label:'美国'},
        {value:'其他',label:'其他'}
      ],
      typeList:[
        {value:'技术类',label:'技术类'},
        {value:'职能类',label:'职能类'},
        {value:'市场类',label:'市场类'},
        {value:'销售类',label:'销售类'},
        {value:'运营类',label:'运营类'},
        {value:'产品类',label:'产品类'},
        {value:'其他',label:'其他'}
      ],
      departmentList:[
        {value:'销售部',label:'销售部'},
        {value:'财务部',label:'财务部'},
        {value:'行政部',label:'行政部'},
        {value:'人力资源部',label:'人力资源部'},
        {value:'市场部',label:'市场部'},
        {value:'产品部',label:'产品部'},
        {value:'生产部',label:'生产部'},
        {value:'质量部',label:'质量部'},
        {value:'其他',label:'其他'}
      ],
      tableColumns:[
        {
            title: '职位',
            key: 'job',
            align:'center'
        },
        {
            title: '部门',
            key: 'department',
            align:'center'
        },
        {
            title: '职能类型',
            key: 'type',
            align:'center'
        },
        {
            title: '工作地点',
            key: 'location',
            align:'center'
        },
        {
            title: '发布时间',
            key: 'createTime',
            align:'center'
        }
      ],
      tableData:[],
    }
  },
  mounted(){
    this.getJobData();
  },
  methods:{
    getJobData(){
      let _this=this;
      let url='social/jobs'
      _this.$http.get(url,{
        baseURL:'http://localhost:8090/',
        params:{
          current:_this.pageData.current?_this.pageData.current:1,
          pageSize:_this.pageData.pageSize?_this.pageData.pageSize:10,
          job:_this.formItem.job?_this.formItem.job:'',
          location:_this.formItem.location?_this.formItem.location:'',
          type:_this.formItem.type?_this.formItem.type:'',
          department:_this.formItem.department?_this.formItem.department:''
        }
      }).then((res)=>{
        _this.tableData=res.data.data;
        _this.pageData.total=res.data.total;
      });
    },
    getJobData1(){
      let _this=this;
      _this.resetPageData();
      _this.getJobData();
    },
    getJobData2(){
      let _this=this;
      _this.resetPageData();
      _this.getJobData();
    },
    getJobData3(){
      let _this=this;
      _this.resetPageData();
      _this.getJobData();
    },
    getJobData4(){
      let _this=this;
      _this.resetPageData();
      _this.getJobData();
    },
    getJobData5(value){
      let _this=this;
      _this.pageData.current=value;
      _this.getJobData();
    },
    resetPageData(){
      let _this=this;
      _this.pageData.current=1;
      _this.pageData.pageSize=10;
    },
    toSchool(){
      let _this=this;
      _this.$router.push({name:'joinUs_school'});
    },
    rowClickHandle(row, index){
      let _this=this;
      _this.modalIsShow=true;
      _this.modelData.job=_this.tableData[index].job;
      _this.modelData.createTime=_this.tableData[index].createTime;
      _this.modelData.type=_this.tableData[index].type;
      _this.modelData.department=_this.tableData[index].department;
      _this.modelData.location=_this.tableData[index].location;
      _this.modelData.responsibilities=_this.tableData[index].responsibilities;
      _this.modelData.qualifications=_this.tableData[index].qualifications;
    },
    openApplyModel(){
      let _this=this;
      _this.applyModel=true;
    },
    uploadPersonData(){
      let _this=this;
      _this.$Notice.warning({
          title: '该功能尚未开发！',
          desc: '如果想开通此功能，请联系开发人员。'
      }); 
    },
  },
}
</script>
<style lang="less" scoped>
.ivu-form-item{
  margin-bottom: 16px;
}
.pageLayout{
  text-align:right;
  padding-top: 16px;
}
.school_joinUs{
  text-align:right;
}
.vertical-center-modal{
  display: flex;
  align-items: center;
  justify-content: center;
}
.popping{
  font-size:18px;
  font-family: "方正苏新诗柳楷简体";
  padding:8px 0px;
  font-weight: 700;
}
.breaking p{
  padding-bottom: 2px;
}
</style>