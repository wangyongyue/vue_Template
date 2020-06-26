<template>
  <div>
    <controller :server="leftServer"></controller>
  </div>
</template>

<script>
  import server from '../servers/server'

  export default {
    name: 'Main',
    data () {
      return {
        leftServer:null
      }

    },
    created () {
      this.leftServer = new server()

    },
    mounted () {

    }
  }

</script>

<style scoped>

</style>
