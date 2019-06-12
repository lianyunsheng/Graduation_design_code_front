<template>
  <div class="aboutMe2_div1">
    <Row>
      <Col>
        <div id="allmap" style="height:400px;"></div>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  name:'aboutMe2',
  data(){
    return{
      
    }
  },
  mounted(){
    let inmap = new inMap.Map({
      id: 'allmap',
      skin: "Blueness",
      center: [105.403119, 38.028658],
      zoom: {
          value: 5,
          show: true,
          max: 20,
          min: 3
      },
    })
    let data = [{
      name: '北京',
      geometry: {
          type: 'Point',
          coordinates: ['116.3', '39.9']
      },
      style: { 
          color: 'rgba(200, 200, 50, 0.7)',
          speed: 0.5,
      }
    },
    {
      name: '上海',
      geometry: {
          type: 'Point',
          coordinates: ['121.29', '31.11']
      },
      style: {
          color: '#6EE7FF',
          speed: 0.5,
          size: 20,
      }
    },
    {
      name: '广东',
      geometry: {
          type: 'Point',
          coordinates: ['113.394818', '23.408004']
      },
      style: {
          color: '#f8983a',
          speed: 0.5,
      }
    },
    {
      name: '大连',
      geometry: {
          type: 'Point',
          coordinates: ['121.62', '38.92']
      },
      style: {
          color: '#f8983a',
          speed: 1,
          size:40,
      }
    },
    {
      name: '沈阳',
      geometry: {
          type: 'Point',
          coordinates: ['123.25', '41.48']
      },
      style: {
          color: '#6EE7FF',
          speed: 0.5,
          size:20,
      }
    },
    {
      name: '哈尔滨',
      geometry: {
          type: 'Point',
          coordinates: ['126.53', '45.80']
      },
      style: {
          color: '#4b8bf5',
          speed: 0.5,
          size:20,
      }
    },
    {
      name: '成都',
      geometry: {
          type: 'Point',
          coordinates: ['104.07', '30.67']
      },
      style: {
          color: '#b848f5',
          speed: 0.5,
          size:20,
      }
    },
    {
      name: '东京',
      geometry: {
          type: 'Point',
          coordinates: ['139', '35.2']
      },
      style: {
          color: '#b848f5',
          speed: 0.5,
          size:20,
      }
    }
  ]
    let overlay = new inMap.PointAnimationOverlay({
      style: {
          fps: 90, //动画帧数
          color: "#FAFA32",
          size: 20,
          speed: 0.15
      },
      data: data
    });
    inmap.add(overlay);
  },
  methods:{

  }
}
</script>
<style lang="less">
.aboutMe2_div1{
  padding:0 5%;
}
</style>