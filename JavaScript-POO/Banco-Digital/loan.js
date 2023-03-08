const formatDate = require('./date')
const Installments = require('./installments')
module.exports = class Loan{
    #interest = 0.015
    constructor(value,plots){
        this.value = value
        this.date = formatDate()
        this.plots = []
        this.calculatePlots(plots)
    }

    calculatePlots(plots){
        const CF = this.#interest/(1-(1/(1+this.#interest)**plots))
        const valuePlots = parseFloat((this.value * CF).toFixed(2))
        for(let i = 0; i < plots;i++){
            const objectPlots = new Installments(valuePlots,(i+1))
            this.plots.push(objectPlots)
        }
    }

    static getInterest(){
        return this.#interest * 100;
    }
    static setInterest(newInterest){
        this.#interest = (newInterest/100)
    }
}