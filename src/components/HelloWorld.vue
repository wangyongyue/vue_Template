<template>
  <div>
    <controller :server="leftServer"></controller>
  </div>
</template>

<script>
  import server from '../servers/server'

export default {
  name: 'HelloWorld',

  data () {
    return {
      leftServer:null
    }

  },
  created () {
    this.leftServer = new server()

  },
  mounted () {
    this.leftServer.that = this
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
