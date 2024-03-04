/*
In JavaScript, the .call() function is a method that allows you to invoke a function with a specified this value
and arguments provided individually. It is primarily used to set the context (this value) of a function explicitly.
The syntax for the .call() method is as follows:
*/

function greet(message) {
  console.log(`${message} ${this.name}`);
}

person = {
  name: "mozzam",
};

greet.call(person, "hello");
