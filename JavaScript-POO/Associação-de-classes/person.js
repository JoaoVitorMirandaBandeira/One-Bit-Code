const Address = require("./address")

class Person{
    constructor(fullName, street,number,neighborhood, city, state){
        this.fullName = fullName
        this.address = new Address(street,number,neighborhood, city, state)
    }
}

module.exports = Person