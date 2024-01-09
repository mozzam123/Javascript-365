// A closure is a function defined inside another function (called parent function) and
// as such it has access to the variables declared and defined within its parent function's scope.

// 1. Variable declared in its own scope
// 2. Variable declared in its parent function's scope
// 3. Variable declared in the global namespace

function outerFunction() {
    let outerVariable = "I am from the outer function";

    function innerFunction() {
        console.log(outerVariable);
    }

    return innerFunction;
}

const closureFunction = outerFunction();
closureFunction(); // Outputs: "I am from the outer function"
