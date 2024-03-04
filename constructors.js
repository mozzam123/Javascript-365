function Person (name, age, salary){
    this.name  = name
    this.age = age
    this.salary = salary
    this.incrementSalary = function(byValue){
        this.salary = this.salary + byValue
        console.log('Current new salary is: ', this.salary);
    }
}


function Employee(company){
    this.company = company
}

// Prototypal Inheritance


/*
Employee.prototype = new Person("mozzam", 23, 5000): This line establishes a prototypal inheritance relationship.
It sets the prototype of the Employee constructor to an instance of the Person constructor with specific values.
This means that all objects created with Employee will inherit properties and methods from Person.
*/

Employee.prototype = new Person("mozzam", 23, 5000)

var emp1 = new Employee("google")

emp1.incrementSalary(6)

// checking the instance of emp1

console.log(emp1 instanceof Person);
console.log(emp1 instanceof Employee);