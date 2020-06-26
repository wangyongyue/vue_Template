<template>
  <div>
    <div>wwwwwwwwwwwwwwwwwwww</div>
    <div>{{info.name}}</div>
    <button v-on:click="onClick()">button</button>
  </div>

</template>

<script>
  export default {
    name: 'people',
    props:{
      info:{
        name:String
      }
    },
    methods:{
      onClick(){
        this.$emit("clickEvent");
      }

    }
  }
</script>

<style scoped>

</style>
