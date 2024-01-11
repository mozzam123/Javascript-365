// Pass by value means it creates the copy of the variable

function updateValue(num){
    num = 50
    console.log(num);
}


let originalValue = 10
updateValue(originalValue)
console.log(originalValue);