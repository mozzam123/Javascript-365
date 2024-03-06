var person = {
    name: 'John',
    age: 24
}

var address = {
    addressLine1: 'Some Location x',
    addressLine2: 'Some Location y',
    city: 'NewYork'
}

const mergeObj = (to, from) => {
    const newobj = Object.assign(to, from)
    console.log(newobj);
}


mergeObj(person, address)