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
          <Col :span="4" class-name="social_joinUs">
            <Button type="success" @click="toSocial">社会招聘</Button>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table :columns="tableColumns" :data="tableData" size="large" @on-row-click="rowClickHandle"></Table>
          </Col>
        </Row>
        <Row class-name="pageLayout">
          <Col>
            <Page @on-change="getJobData5" :total="pageData.total" :current="pageData.current" :page-size="pageData.pageSize" show-total show-elevator/>
          </Col>
        </Row>
      </Card>
      <br/>
      <Card>
        <Row>
          <Col class-name="donotMind">
            <p class="p1">小练制造所2019春季校园招聘宣讲会流程</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Table stripe :columns="tableColumns2" :data="tableData2" size="large" border disabled-hover></Table>
          </Col>
        </Row>
      </Card>
      <br/>
      <Card>
        <Row>
          <Col class-name="donotMind">
            <p class="p1">2019届春季校园招聘FAQ</p>
          </Col>
        </Row>
        <Row type="flex" justify="center">
          <Col span="15">
            <p><strong>1. 小练制造所的招聘流程是怎样的？</strong></p>
            <p>请在小练制造所校招官网投递简历，同时宣讲会现场接收纸质简历。</p>
            <p>为避免遗漏，宣讲会现场投递后也请同步进行网申，宣讲会最新动态请关注校招官网。</p>
            <p>北京/上海/宣讲会现场会发放面试直通卡，请不要错过。</p>
            <p>北京/上海的现场面试会在宣讲会后陆续安排到公司进行。</p>
            <p>面试一般有三轮：技术面试，总监面试，HR面试。</p>
            <p>若无法参加宣讲会，则简历筛选通过后会收到线上面试的通知。</p>
            <p> 面试通过后，会尽快通知您面试结果及Offer情况。</p>
            <p><br></p>
            <p><strong>2. 可以投递几个岗位，一共可以面试几个岗位？</strong></p>
            <p>岗位可以投递多个，建议控制在2~3个。</p>
            <p>一般情况下，筛选最为合适的岗位进行面试。</p>
            <p><br></p>
            <p><strong>3. 简历投递中需要注意什么？</strong></p>
            <p>投递后请核对邮箱和手机是否正确，我们后续的通知和邀请都将会通过手机和邮箱进行。</p>
            <p>如遇到问题，可先联系招聘系统页面的在线客服。</p>
            <p><br></p>
            <p><strong>4. 2019届应届生的招聘范围是什么？</strong></p>
            <p>国内学生：2019年毕业的本科、硕士、博士同学</p>
            <p>海外留学生：2018年毕业，或2019年毕业的本科、硕士、博士同学。海外留学生同学请在简历中附上您的微信号方便联系。</p>
            <p><br></p>
            <p><strong>5. 面试地点如何确定？</strong></p>
            <p>合肥站（中国科学技术大学）宣讲结束直接安排现场面试，成都站（电子科技大学站）宣讲当晚进行现场面试。</p>
            <p>北京和上海的同学我们会安排到公司进行面试。</p>
            <p>如无法参加现场笔试或面试，我们也将安排电话和视频面试。</p>
            <p><br></p>
            <p><strong>6. 如有问题，我应该如何和小练制造所联系？</strong></p>
            <p>各城市的QQ交流群</p>
            <p>问题咨询总QQ群：329580251</p>
            <p>校招咨询邮箱：xiaolian2019@jixie.com</p>
          </Col>
        </Row>
      </Card>
  </div>
</template>
<script>
export default {
  name:'joinUs_school',
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
      tableColumns2:[
        {
            title: '城市',
            key: 'city',
            align:'center'
        },
        {
            title: '宣讲时间',
            key: 'time',
            align:'center'
        },
        {
            title: '学校',
            key: 'school',
            align:'center'
        },
        {
            title: '宣讲地点',
            key: 'location',
            align:'center'
        },
        {
            title: '咨询QQ群',
            key: 'QQNumber',
            align:'center'
        }
      ],
      tableData:[],
      tableData2:[
        {city:'沈阳',time:'3月8日 19:00',school:'沈阳理工大学',location:'文体中心210会议室',QQNumber:'123456789'},
        {city:'沈阳',time:'3月12日 19:00',school:'沈阳建筑大学',location:'三号教学楼202室',QQNumber:'684527935'},
        {city:'沈阳',time:'3月15日 19:00',school:'东北大学',location:'一号教学楼101室',QQNumber:'575486359'},
        {city:'大连',time:'3月22日 19:00',school:'大连理工大学',location:'学生活动中心二楼报告厅',QQNumber:'976548251'},
        {city:'大连',time:'4月1日 18:00',school:'大连海事大学',location:'航海楼B118教室',QQNumber:'698735421'},
        {city:'长春',time:'4月15日 18:00',school:'长春理工大学',location:'电信楼C210会议室',QQNumber:'123456789'},
        {city:'哈尔滨',time:'4月22日 19:00',school:'哈尔滨理工大学',location:'教学楼A210教室',QQNumber:'897465879'},
        {city:'哈尔滨',time:'4月26日 19:00',school:'哈尔滨工业大学',location:'教学楼C110教室',QQNumber:'123456789'},
      ],
    }
  },
  mounted(){
    this.getJobData();
  },
  methods:{
    getJobData(){
      let _this=this;
      let url='school/jobs'
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
    toSocial(){
      let _this=this;
      _this.$router.push({name:'joinUs_social'});
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
.donotMind{
  text-align:center;
}
.p1{
  font-size:34px;
  font-family: "方正苏新诗柳楷简体";
  padding:20px 0px;
}
.social_joinUs{
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