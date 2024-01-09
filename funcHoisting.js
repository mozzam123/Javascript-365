/*
So, in summary, due to function hoisting, the code executes without errors and produces the following output
*/

bar();
(function abc() {
  console.log("something");
})();
function bar() {
  console.log("bar got called !!!");
}
