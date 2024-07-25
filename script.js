//Example 1
// function PersonFunction(first, last, age, eye) {
//   this.firstName = first
//   this.lastName = last
//   this.age = age
//   this.eyeColor = eye
// }

// const myFather = new PersonFunction("John", "Doe", 50, "blue")

// console.log(myFather)

//Example 2
class Person {
    constructor(nameParameter, ageParameter) {
        this.name = nameParameter
        this.age = ageParameter
    }

    methodInsideAClass() {
        console.log(`Name: ${this.name}, Age: ${this.age}`)
    }
}

const person1 = new Person('Renan', 32)
const person2 = new Person('Makoto', 32)

person1.methodInsideAClass()
person2.methodInsideAClass()

//Example 3
// const order = {
//     salesDate : "May 5, 2016",
//     product : {
//         price: 500.00,
//         brand: "Acer",
//         output: function () { 
//                 return `${this.brand} $ ${this.price}`
//         }
//     },
//     customer : {
//         name: "Sue Smith",
//         address: "123 Somewhere St",
//         output: function () { 
//             return `${this.name}, ${this.address}`
//         }
//     }
// }
// console.log(order.product.output())
// console.log(order.customer.output())

//Example 4

class House {
    constructor(houseLocation, houseAddress, housePhone) {
        this.location = houseLocation
        this.address = houseAddress
        this.phone = housePhone
    }
    houseMethod() {
        console.log(`${this.location} ${this.address} ${this.phone}`)
    }

}

const house1 = new House('Toronto', 'Yonge Street', 4164164164)

house1.houseMethod()
