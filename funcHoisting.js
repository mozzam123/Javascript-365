/*

In JavaScript, hoisting is a behavior where variable and function declarations are moved
to the top of their containing scope during the compilation phase, before the code is executed.
This means you can use a variable or function before it's declared in your code.

*/

bar();
(function abc() {
  console.log("something");
})();


function bar() {
  console.log("bar got called !!!");
}
