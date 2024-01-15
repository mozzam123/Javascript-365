const person = {
    name: "mozzam",
    city: "mumbai",
    salary: 1
}

console.log(Object.keys(person));

// Creating non-enumerable property
Object.defineProperty(person, "phoneNo", {
    value: 8888888888,
    enumerable: false
})


// logging to show the keys are not visible if non enumerable

console.log(Object.keys(person));