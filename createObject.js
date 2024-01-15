var employee = {
    name: "mozzam",
    displayName: function () {
        console.log(`My name is ${this.name}`);
    },
    customName: function (custom_name){
        console.log(`My custom name is ${custom_name}`);
    }
}

var emp1 = Object.create(employee)
emp1.displayName()
emp1.customName("avya")
