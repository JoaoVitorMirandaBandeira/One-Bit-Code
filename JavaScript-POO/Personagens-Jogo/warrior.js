import { Charecter } from "./character.js"

export class Warrior extends Charecter {
    constructor(name, life, attack, defense,shield){
        super(name, life, attack, defense)
        this.shield = shield
        this.position = 'attack'
    }
    attack(objeto){
        if(this.position === 'attack'){
            super.strike(objeto)
        }
    }
    checkPosition(){
        if(this.position === 'attack'){
            this.defense -=this.attack
        }else{
            this.defense += this.shield
        }
    }
    swapPosition(){
        if(this.position === 'attack'){
            this.position ==='defense'
            this.checkPosition()
        }else{
            this.position ==='attack'
            this.checkPosition()
        }
    }
}