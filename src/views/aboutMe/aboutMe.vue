<template>
  <div>
    <AboutMe4/>
    <Divider dashed><span class="divider_title">{{$t('aboutMe1.dividerText')}}</span></Divider>
    <AboutMe2/>
    <Divider dashed><span class="divider_title">{{$t('aboutMe2.dividerText')}}</span></Divider>
    <AboutMe3/>
  </div>
</template>
<script>
import AboutMe1 from './components/aboutMe1.vue';
import AboutMe2 from './components/aboutMe2.vue';
import AboutMe3 from './components/aboutMe3.vue';
import AboutMe4 from './components/aboutMe4.vue';
export default {
  name:'aboutMe',
  data(){
    return{

    }
  },
  mounted(){

  },
  methods:{

  },
  components:{
    AboutMe1,
    AboutMe2,
    AboutMe3,
    AboutMe4,
  }
}
</script>
<style lang="less">
.divider_title{
  color:#515a6e;
  font-family: "汉仪小麦体简";
}
</style>
