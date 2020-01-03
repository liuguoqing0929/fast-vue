<template>
    <div @click="login">
      hello1231231
    </div>
</template>

<script>
export default {
  name: 'hello',
  data: function () {
    return {
      msg: ''
    }
  },
  methods: {
    login: function () {
      console.log('123')
      this.$axios({
        method: 'get',
        url: 'http://127.0.0.1:8888/login'
      }).then(function (response) {
        // handle success
        console.log(response)
      }).catch(function (error) {
        // handle error
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
