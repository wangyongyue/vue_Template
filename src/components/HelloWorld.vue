<template>
  <div>
    <controller :server="leftServer" :infos="leftServer.list"></controller>
  </div>
</template>

<script>
  import Test from '../servers/test'

export default {
  name: 'HelloWorld',

  data () {
    return {
      leftServer: new Test(),
    }

  },
  created () {
    this.leftServer.that = this
    this.leftServer.networkRequest()

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
