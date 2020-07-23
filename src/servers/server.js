

function server () {
  this.list = new Array()
  this.url = function () {
    return ""
  }
  this.body = function () {
    var params = new URLSearchParams()
    params.append('id',1)
    return params
  }
  this.reloadData = function (response) {

    this.list.push({identifier:"people",name:"sdfsfsdfsdf"})
    this.list.push({identifier:"people",name:"sdfsfsdfsdf"})
    this.list.push({identifier:"people",name:"sdfsfsdfsdf"})
    this.list.push({identifier:"people",name:"sdfsfsdfsdf"})

  }

  this.clickIndex = function (index) {
    console.log(index)
  }

  this.networkRequest = function () {

    var params = this.body()
    var url = this.url()
    if (url.length == 0){
      this.reloadData(null)
      return
    }
    this.that.$axios
      .post(url, params)
      .then(response => {
        var data = response['data']
        if (data['code'] == 1000) {
          this.reloadData(response)
        }else {
          alert("失败")
        }
      })
      .catch(function (error) {
        alert(error)
      })
  }




}
module.exports = server;
