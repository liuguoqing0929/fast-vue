<template>
  <div class="hello">
    <test></test>
    <br/>
    <div @click="hello1">
      跳转1
    </div>
    {{msg}}
  </div>
</template>

<script>
import Test from './test/test'
export default {
  name: 'HelloWorld2',
  components: {Test},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App2'
    }
  },
  comments: {
    Test
  },
  methods: {
    hello1: function () {
      console.log('hello1')
      // 两种方式都可以
      this.$router.replace('/Hello')
      // this.$router.push('/')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
