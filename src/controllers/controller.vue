<template>
  <div>
    <component v-for="(item,index) in infos" v-bind:is="item.identifier" :info="item" v-on:clickEvent="clickEvent(index)"></component>
  </div>
</template>

<script>

  export default {
    name: 'controller',
    props:{
      server:Object
    },
    data() {
      return{
        infos:[]
      }
    },
    mounted () {
      this.infos = this.server.views(null)
      this.post()
    },
    methods:{
      clickEvent(index){
        this.server.clickIndex(index)
      },
      post(){
        var params = this.server.body()
        var url = this.server.url()
        if (url.length == 0){return}
        this.$axios
          .post(url, params)
          .then(response => {
            var data = response['data']
            if (data['code'] == 1000) {

              this.infos = this.server.views(data)

              // this.infos.splice(index,1)

            }else {
              alert("失败")
            }

          })
          .catch(function (error) {
            alert(error)
          })

      },

    }

  }
</script>

<style scoped>

</style>
