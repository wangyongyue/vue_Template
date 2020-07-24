var Server = require("./server.js");

function people () {
  this.name = ""
}
people.prototype = new Server;
people.prototype.url = function(){
  return ""
}
people.prototype.reloadData = function(response){

  this.name = 'peopledfsfsdfsdfs'
  this.list.push({identifier:"people",name:"people"})
  this.list.push({identifier:"people",name:"people"})
  this.list.push({identifier:"people",name:"people"})
  this.list.push({identifier:"people",name:"people"})

}
people.prototype.clickIndex = function(index){
  console.log(index)
  console.log(this.that)

}
module.exports = people;
