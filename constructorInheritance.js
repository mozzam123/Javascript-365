// Define Person class
function person(name){
    this.name = name || "mozzam",
    this.callName = function(){
        console.log("my name is: ", this.name);
    }

}

var obj = {}

person.call(obj)

console.log(obj.name);
obj.callName()