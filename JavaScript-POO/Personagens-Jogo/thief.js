import { Charecter } from "./character.js"

export class Thief extends Charecter {
    constructor(name, life, attack, defense){
        super(name, life, attack, defense)
    }
    strike(objeto){
        damage =  this.attack - objeto.defense
        if(damage >= 0){
            objeto.life -= (2*damage)
        }
    }
}