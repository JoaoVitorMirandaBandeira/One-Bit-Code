class Product{
    constructor(name,description,price,inStock){
        this.name = name
        this.description = description
        this.price = price
        this.inStock = inStock
    }
    addToStock(add){
        this.inStock += add
    }
    calculateDisconunst(discount){
        let preco =  this.price * ((100 - discount)/100)
        return console.log(`R$${preco},00`)
    }
}

const carro = new Product('celta','2019 Azul',2000,0)

carro.addToStock(2)

console.log(carro)

carro.calculateDisconunst(10)