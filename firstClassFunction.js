/*

In JavaScript, a first-class function is a function that can be treated like any other variable, such as a number or a string.
This means you can pass a function as an argument to another function, return it from a function, and assign it to a variable.

*/

// Function that takes another function as an argument
function operate(num1, num2, operation) {
    return operation(num1, num2);
}

// Define a function to add two numbers
function add(a, b) {
    return a + b;
}

// Pass the 'add' function as an argument
const result = operate(5, 3, add);
console.log(result); // Output: 8


/*

In this example, the operate function accepts two numbers and another function (add) as its operation.
It then applies the provided function to the numbers, demonstrating the first-class nature of functions in JavaScript.

*/
