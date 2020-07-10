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
      server:Object
    },
    data() {
      return{
        infos:[]
      }
    },
    mounted () {
      this.infos = this.server.list
      this.server.reloadData(null)
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

              this.server.reloadData(response)

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
