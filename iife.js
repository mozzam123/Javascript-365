// IIFE stands for Immediately Invoked Function Expression. It's a JavaScript design pattern where a function is defined and executed immediately after its creation.
// This helps in creating a private scope for variables, preventing them from polluting the global scope.



var x = 8;

(() => {
    // Your code here
    let x = 10;
    var foo = 88
    console.log(x);
})();

console.log(foo);
console.log(x);