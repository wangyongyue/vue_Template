<template>
  <div>
    <controller :server="leftServer" :infos="leftServer.list"></controller>
    <div>{{leftServer.name}}</div>
  </div>
</template>

<script>
  import People from '../servers/people'
  export default {
    name: 'Main',
    data () {
      return {
        leftServer:new People()
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

</style>
