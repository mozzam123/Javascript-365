/*
An arrow function is a shorter/concise syntax for a function expression and does not have its own this, arguments, super, or new.target.
These functions are best suited for non-method functions, and they cannot be used as constructors.

*/

const arrowFunc1 =(a,b) => console.log(a + b);
arrowFunc1(1,2)