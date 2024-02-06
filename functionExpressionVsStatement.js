// Difference between Function Expression and Function Statement



/* The below Example shows how function expression gives errors and through hoisting perspective also */
foo();
var foo = function () {
    console.log('Function expression is running');
}



/* The below Example shows how function statement will not gives errors and through hoisting perspective also */

bar()
function bar() {
    console.log('Function Statement is running');
}