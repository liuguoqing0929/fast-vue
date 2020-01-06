<template>
    <div>
      <div>
        {{tempAddress}}
      </div>
      <div v-for="(item, index) in tempAgeAttr" :key='item'>
        {{item}} -- {{index}}
      </div>
      <div style="width: 300px; height: 300px" ref="chart"></div>
    </div>
</template>

<script>
export default {
  name: 'test-module',
  props: [
    'address',
    'ageAttr'
  ],
  data () {
    return {
      tempAddress: this.address,
      tempAgeAttr: this.ageAttr
    }
  },
  mounted () {
    this.initChat()
  },
  methods: {
    initChat: function () {
      let myChart = this.$echarts.init(this.$refs.chart)
      myChart.setOption({
        title: { text: '在Vue中使用echarts' },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: {},
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }]
      })
    },
    login: function () {
      console.log('child')
    }
  }
}
</script>

<style scoped>

</style>
