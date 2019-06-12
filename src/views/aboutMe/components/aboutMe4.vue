<template>
  <div class="aboutMe4_div1">
    <h3>
      <span class="aboutMe4_span">{{$t('aboutMe4.title')}}</span>
      <font class="aboutMe4_font">
        {{$t('aboutMe4.part1')}}<br><br>

        {{$t('aboutMe4.part2')}}<br><br>

        {{$t('aboutMe4.part3')}}<br><br>

        {{$t('aboutMe4.part4')}}<br><br>

        {{$t('aboutMe4.part5')}}<br><br>

        {{$t('aboutMe4.part6')}}<br>

      </font>

	  </h3>
  </div>
</template>
<script>
export default {
  name:'aboutMe4',
  data(){
    return{

    }
  },
  mounted(){

  },
  methods:{

  },
}
</script>
<style lang="less">
.aboutMe4_div1{
  padding:3% 5%;
  padding-bottom: 1% !important;
}
.aboutMe4_span{
  display: block;
  text-align: left;
  font-size: 20px;
  font-family: Arial, "黑体";
  font-weight: bold;
  margin-bottom: 1em;
  color: #333;
  border-bottom: 1px solid #666;
}
.aboutMe4_font{
  font-size:16px;
  font-family: Arial, "黑体";
}
</style>