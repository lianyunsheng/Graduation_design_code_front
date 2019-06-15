<template>
  <div>
    <HomeCarousel/>
    <Divider dashed></Divider>
    <HomePage1/>
    <Divider dashed></Divider>
    <HomePage2/>
    <Divider dashed></Divider>
    <HomePage3/>
    <Divider dashed></Divider>
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

</style>
