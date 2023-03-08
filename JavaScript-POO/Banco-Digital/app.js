const Loan = require("./loan")
const User = require("./user")

 module.exports = class App{
    static #user = []
    
    static getUser(){
        return this.#user
    }

    static createUser(name, email){
        if(!this.validateEmail(email)){
            const newUser = new User(name, email)
            App.#user.push(newUser)
        }
    }
    static validateEmail(email){
        App.#user.forEach((e) => {
             if(e.email === email){
                return true
             } })
        return false 
    }
    
    static findUser(email){
        let foundUser = null;
        App.#user.forEach((user) => {
            if (user.email === email) {
                foundUser = user;
            }
        });
        return foundUser;
    }

    static deposit(email,value){
        const user = this.findUser(email)
        if(user){
            user.account.newDeposit(value)
        }else{
            console.info(`Email ${email} não encontrado na base de dados`)
        }
    }
    
    static transfer(emailSender, emailAddressee,value){
        const sender = this.findUser(emailSender)
        const addressee = this.findUser(emailAddressee)
        if(sender && addressee){
            sender.account.newTransfer(emailSender,emailAddressee,value)
            addressee.account.newTransfer(emailSender,emailAddressee,value)
        }else{
            !sender ? console.error(`E-mail ${sender} não encontrados na base de dados`) : console.error(`E-mail ${addressee} não encontrados na base de dados`);
        }
    }
    static loan(email,valor,plots){
        const user = this.findUser(email)
        if(user){
            user.account.newLoan(valor,plots)
        }
    }

    static changeInterest(newInterest){
        Loan.setInterest = newInterest
    }
}