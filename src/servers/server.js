function server () {
  this.url = function () {
    return ""
  }
  this.body = function () {
    var params = new URLSearchParams()
    params.append('id',1)
    return params
  }
  this.views = function (response) {
    let list = new Array();

    list.push({identifier:"people",name:"peddoplehhhhh"})
    list.push({identifier:"people",name:"peoplsdfehhhhh"})
    list.push({identifier:"people",name:"peoplddehhhhh"})
    list.push({identifier:"people",name:"sdfs"})

    return list
  }
  this.clickIndex = function (index) {
    console.log(index)
    if (index == 2 && this.that != null){
      this.that.$router.push({path:'main'})
    }
  }

}
module.exports = server;
