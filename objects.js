// In JavaScript, you can prevent modification of an object in several ways. Here are three common methods:

// Method 1
// Object.freeze()  freezes an object, preventing new properties from being added, existing properties from being removed,
//  and values of existing properties from being changed. It returns the frozen object.

const myObj = {
    name: "mozzam",
    age: 23
}

Object.freeze(myObj)

myObj.newKey = "newValue"

console.log(myObj);


// Method 2
// Object.seal()  seals an object, preventing new properties from being added and existing properties from being removed. However, you can still modify the values of existing properties.
 
const myObj1 = {
    name: "mozzam234",
    age: 55
}

Object.seal(myObj1)

myObj1.name = "New_name"

console.log(myObj1);



// Method 3
// Object.preventExtensions()  prevents new properties from being added to an object but allows the modification or deletion of existing properties.

const myObj2 = {
    city: "mumbai",
    pin: 400102
}

Object.preventExtensions(myObj2)


delete myObj2.city
myObj2.pin = 777
console.log(myObj2);
