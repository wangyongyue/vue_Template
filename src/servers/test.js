var Server = require("./server.js");

function test () {
  
}
test.prototype = new Server;
test.prototype.reloadData = function(response){

  this.list.push({identifier:"people",name:"test"})
  this.list.push({identifier:"people",name:"test"})
  this.list.push({identifier:"people",name:"test"})
  this.list.push({identifier:"people",name:"test"})

}
test.prototype.clickIndex = function(index){
  console.log(index)
  if (index == 2 && this.that != null){
    this.that.$router.push({path:'main'})
  }

}
module.exports = test;
