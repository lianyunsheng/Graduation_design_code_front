<template>
  <div class="aboutMe3-div1">
    <Timeline class="aboutMe3-timeline">
      <TimelineItem>
          <p class="timelineitem-time">{{$t('aboutMe3.t1')}}</p>
          <p class="timelineitem-content">{{$t('aboutMe3.t1_text')}}</p>
      </TimelineItem>
      <TimelineItem>
          <p class="timelineitem-time">{{$t('aboutMe3.t2')}}</p>
          <p class="timelineitem-content">{{$t('aboutMe3.t2_text')}}</p>
      </TimelineItem>
      <TimelineItem>
          <p class="timelineitem-time">{{$t('aboutMe3.t3')}}</p>
          <p class="timelineitem-content">{{$t('aboutMe3.t3_text')}}</p>
      </TimelineItem>
      <TimelineItem>
          <p class="timelineitem-time">{{$t('aboutMe3.t4')}}</p>
          <p class="timelineitem-content">{{$t('aboutMe3.t4_text')}}</p>
      </TimelineItem>
      <TimelineItem>
          <p class="timelineitem-time">{{$t('aboutMe3.t5')}}</p>
          <p class="timelineitem-content">{{$t('aboutMe3.t5_text')}}</p>
      </TimelineItem>
      <TimelineItem>
          <p class="timelineitem-time">{{$t('aboutMe3.t6')}}</p>
          <p class="timelineitem-content">{{$t('aboutMe3.t6_text')}}</p>
      </TimelineItem>
      <TimelineItem>
          <p class="timelineitem-time">{{$t('aboutMe3.t7')}}</p>
          <p class="timelineitem-content">{{$t('aboutMe3.t7_text')}}</p>
      </TimelineItem>
      <TimelineItem>
          <p class="timelineitem-time">{{$t('aboutMe3.t8')}}</p>
          <p class="timelineitem-content">{{$t('aboutMe3.t8_text')}}</p>
      </TimelineItem>
      <TimelineItem>
          <p class="timelineitem-time">{{$t('aboutMe3.t9')}}</p>
          <p class="timelineitem-content">{{$t('aboutMe3.t9_text')}}</p>
      </TimelineItem>
    </Timeline>
  </div>
</template>
<script>
export default {
  name:'aboutMe3',
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
.timelineitem-time{
  font-size:14px !important;
  font-weight: bold;
}
.timelineitem-content{
  padding-left: 7px;
  font-size:12px !important;
}
.aboutMe3-div1{
  padding:0 5%;
  color:#333;
}
</style>