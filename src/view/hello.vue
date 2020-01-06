<template>
    <div>
      <el-button type="primary">主要按钮1</el-button>
      <div @click="login">
        <test></test>
      </div>
      <test-module :address.sync="address" :ageAttr="ageAttr"></test-module>
    </div>
</template>

<script>
import Test from '../components/test/test'
import TestModule from './module/test-module'
export default {
  name: 'hello',
  components: {
    Test,
    TestModule
  },
  data: function () {
    return {
      msg: '',
      address: '北京',
      ageAttr: ['张三', '李四', '王五', '赵六']
    }
  },
  methods: {
    login: function () {
      this.$axios({
        method: 'get',
        url: 'http://127.0.0.1:8888/login'
      }).then(function (response) {
        console.log(response)
      }).catch(function (error) {
        console.log(error)
      })
      // const that = this
      // that.$axios({
      //   method: 'get',
      //   url: 'http://127.0.0.1:8888//login'
      // }).then(function (response) {
      //   // handle success
      //   console.log(response)
      // }).catch(function (error) {
      //   // handle error
      //   console.log(error)
      // })
    }
  }
}
</script>

<style scoped>

</style>
