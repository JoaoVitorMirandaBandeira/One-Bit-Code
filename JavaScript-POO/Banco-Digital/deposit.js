const formatDate = require('./date')
module.exports = class Deposit{
    constructor(value){
        this.value = value
        this.date = formatDate()
    }
}

