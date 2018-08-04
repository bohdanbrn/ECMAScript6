"use strict";

var firstName = 'John',
    lastName = "Dou",
    email = "billgates@microsoft.com";

var person = {
    firstName: firstName,
    lastName: lastName,
    email: email,
    sayHello: function sayHello() {
        console.log("Hi my name is " + this.firstName + " " + this.lastName);
    },

    get fullName() {
        return this.firstName + " " + this.lastName;
    },
    set fullName(value) {
        this.email = value;
    }
    // set lastName(value) {
    //     this.lastName = value;
    // }
};

console.log(person);

// function createCar(property, value) {
//     return {
//         [property]: value,
//         ['get' + property]() {
//             return this[property];
//         }
//     };
// }

// console.log(createCar('brand', 'BMW'));