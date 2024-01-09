
// When you have a promise, its callbacks (.then() or .catch()) are scheduled as micro tasks,
// which means they will be executed after the current task but before the next event loop cycle.

// The rest of the code, or synchronous code, runs as part of the regular call stack.
// If there's any asynchronous operation (like a timer or a network request), its callback will be placed in the task queue/callback queue.


async function getData() {
    return 1
}

console.log("A");
console.log("B");

setTimeout(() => console.log('C'), 0);

console.log('D');
getData().then(() => console.log('I got the data'))
console.log('E');