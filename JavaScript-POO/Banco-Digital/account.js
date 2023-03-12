const Deposit = require("./deposit")
const Loan = require("./loan")
const Transfer = require("./transfer")

module.exports = class Account{
    #balance = 0
    #deposit = []
    #loan = []
    #transfer = []
    #user
    constructor(name, email){
        this.#user = {
            name: name,
            email: email
        }
    }
    get loan(){
        return this.#loan
    }
    get balance(){
        return `R$ ${this.#balance}`
    }

    newDeposit(value){
        const deposit = new Deposit(value)
        this.#deposit.push(deposit)
        this.#balance += value
    }

    newLoan(value,plots){
        const loan = new Loan(value,plots)
        this.#loan.push(loan)
        this.#balance += value
    }

    newTransfer(sender,addressee,value){
        if(this.#user.email === sender){
            const transfer = new Transfer(sender,addressee,value)
            this.#transfer.push(transfer)
            this.#balance-= value
        }else{
            const transfer = new Transfer(sender,addressee,value)
            this.#transfer.push(transfer)
            this.#balance+= value
        }
    }
}
