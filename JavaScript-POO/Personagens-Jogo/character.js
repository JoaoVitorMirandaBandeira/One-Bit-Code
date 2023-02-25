export class Charecter{
    constructor(name, life, attack, defense){
        this.name = name
        this.life = life
        this.attack = attack
        this.defense = defense
    }
    strike(objeto){
        damage =  this.attack - objeto.defense
        if(damage >= 0){
            objeto.life -= damage
        }
    }
}