class Property {
    constructor(area, price){
        this.area = area
        this.price = price
    }

    getPricePerSquarerMeter(){
        return this.price/this.area
    }
}
//Para declarar que a proxima classe e filha colocase o "extends"
//Para que a classe filha herde os atributos da mae usamos o "super"

class House extends Property{
    //Lembre sempre de passar os atributos do contrutor mesmo sendo filha 
    constructor(number, area, price){
        super(area,price)
        this.number = number
    }
}