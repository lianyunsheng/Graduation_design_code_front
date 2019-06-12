<template>
  <div>
    <HomeCarousel/>
    <Divider dashed><span class="divider_title">{{$t('homepage1.divider_text')}}</span></Divider>
    <HomePage1/>
    <Divider dashed><span class="divider_title">{{$t('homepage2.divider_text')}}</span></Divider>
    <HomePage2/>
    <Divider dashed><span class="divider_title">{{$t('homepage3.divider_text')}}</span></Divider>
    <HomePage3/>
    <Divider dashed><span class="divider_title">{{$t('homepage4.divider_text')}}</span></Divider>
    <HomePage4/>
  </div>
</template>
<script>
import HomeCarousel from './components/homeCarousel.vue';
import HomePage1 from './components/homePage1.vue';
import HomePage2 from './components/homePage2.vue';
import HomePage3 from './components/homePage3.vue';
import HomePage4 from './components/homePage4.vue';
export default {
  name:'homePage',
  data(){
    return {
      
    }
  },
  mounted(){

  },
  methods:{

  },
  components:{
    HomeCarousel,
    HomePage1,
    HomePage2,
    HomePage3,
    HomePage4,
  }
}
</script>
<style lang="less" >
.divider_title{
  color:#515a6e;
  font-family: "汉仪小麦体简";
}
</style>
