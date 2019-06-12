<template>
  <div>
    <Layout>
      <Header class="home_header">
        <LogoAndName/>
        <NaviagationBar/>
      </Header>
      <Content class="home_content">
        <LanguageSwitch/>
        <keep-alive>
          <router-view/>
        </keep-alive>
      </Content>
      <Footer class="main-footer">{{$t('copyright')}}</Footer>
    </Layout>   
  </div>
</template>
<script>
import LanguageSwitch from '_c/languageSwitch';
import LogoAndName from '_c/logoAndName';
import NaviagationBar from '_c/navigationBar';
export default {
  name: 'home',
  data(){
    return{
      
    }
  },
  mounted(){

  },
  methods:{

  },
  components:{
    LanguageSwitch,
    LogoAndName,
    NaviagationBar,
  }
}
</script>

<style lang="less">
.main-footer{
  text-align: center;
  font-family: "方正苏新诗柳楷简体"
}
.home_header{
  position:sticky;
  z-index:500;
  top:0;
}
.ivu-layout-header{
  padding-left:0px !important;
}
//滚动条样式设置
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: rgba(0,0,0,0.2);
  border: none;
  -webkit-border-radius: 4px;
          border-radius: 4px;
}
::-webkit-scrollbar-thumb:hover {
  background-color: rgba(0,0,0,0.3);
}
::-webkit-scrollbar-track {
  background-color: transparent;
  border: none;
}
::-webkit-scrollbar-track:hover {
  background-color: rgba(0,0,0,0.1);
}
::-webkit-scrollbar-track:active {
  background-color: rgba(0,0,0,0.1);
}
::-webkit-scrollbar-corner {
  background: transparent;
}
</style>

