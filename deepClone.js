// Write a function called deepClone which takes an object and creates a object copy of it.

// Simple Object
const person = {
  name: "John",
  age: 25,
  city: "Exampleville",
  isStudent: false,
  sayHello: function () {
    console.log("Hello, I'm " + this.name + "!");
  },
};

function deepClone(obj) {
  return obj;
}

var newObj = deepClone(person);

console.log(newObj);