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


    this.list.push({identifier:"people",name:"peddoplehhhhh"})
    this.list.push({identifier:"people",name:"peoplsdfehhhhh"})
    this.list.push({identifier:"people",name:"peoplddehhhhh"})
    this.list.push({identifier:"people",name:"sdfs"})

  }
  this.clickIndex = function (index) {
    console.log(index)
    if (index == 2 && this.that != null){
      this.that.$router.push({path:'main'})
    }
  }

}
module.exports = server;
