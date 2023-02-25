import { Charecter } from "./character.js"

export class Mage extends Charecter {
    constructor(name, life, attack, defense,magic){
        super(name, life, attack, defense)
        this.magic = magic
    }
    strike(objeto){
        damage =  this.attack - objeto.defense
        if(damage >= 0){
            objeto.life -= (damage+this.magic)
        }
    }
    recoverLife(objeto){
        objeto.life += (2*this.magic)
    }
}