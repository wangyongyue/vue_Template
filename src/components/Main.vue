<template>
  <div>
    <controller :server="leftServer"></controller>
    <div>{{leftServer.name}}</div>
  </div>
</template>

<script>
  import People from '../servers/people'
  export default {
    name: 'Main',
    data () {
      return {
        leftServer:null
      }
    },
    created () {
      this.leftServer = new People()
      this.leftServer.that = this

    },
    mounted () {

    }
  }

</script>

<style scoped>

</style>
