<template>
  <div>
    <controller :server="leftServer"></controller>
  </div>
</template>

<script>
  import Test from '../servers/test'

export default {
  name: 'HelloWorld',

  data () {
    return {
      leftServer:null
    }

  },
  created () {
    this.leftServer = new Test()
    this.leftServer.that = this
  },
  mounted () {
  }
}
</script>

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
