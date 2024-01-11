// "passed by reference" involves passing a reference (memory address) to the variable. 

function updateArray(arr,num){
    arr.push(num)
    console.log("log inside function", arr);
}


let array = [1,2,3]

updateArray(array, 4)
console.log("log outside function", array);

