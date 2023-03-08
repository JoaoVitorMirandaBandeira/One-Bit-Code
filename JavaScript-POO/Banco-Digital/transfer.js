const formatDate = require('./date')
module.exports = class Transfer{
    constructor(sender,addressee,value){
        this.sender = sender
        this.addressee = addressee
        this.value = value
        this.date = formatDate()
    }
}
