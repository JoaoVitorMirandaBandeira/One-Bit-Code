module.exports = class Installments{
    constructor(value,number,situation = 'Pendente'){
        this.value = value
        this.number = number
        this.situation = situation
    }
}