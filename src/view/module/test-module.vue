<template>
    <div>
      test-module
      <div>
        {{tempAddress}}
      </div>
      <div v-for="(item, index) in tempAgeAttr" :key='item'>
        {{item}} -- {{index}}
      </div>
      <div>
        测试的自定义组件
      </div>
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
  methods: {
    login: function () {
      console.log('child')
    }
  }
}
</script>

<style scoped>

</style>
