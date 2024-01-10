const person = {
    name: "",
    city: "mumbai",
    pin: 400102,
    sayEverything: function (name = "this.name", city = this.city, pin = this.pin) {
        console.log(name, city, pin);
    }
}

person.sayEverything(); // Example usage with only the 'name' parameter provided
