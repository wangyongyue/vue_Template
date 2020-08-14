<template>
  <div style="width: 200px;height: 200px">
    <component
      v-for="(item,index) in infos" v-bind:is="item.identifier" :info="item" v-on:clickEvent="clickEvent(index)"
    ></component>
  </div>
</template>
<script>

  export default {
    name: 'controller',
    props:{
      server:Object,
      infos:Array
    },
    data() {
      return{
      }
    },
    methods:{
      clickEvent(index){
        this.server.clickIndex(index)
      }
    }

  }
</script>

<style scoped>

</style>
