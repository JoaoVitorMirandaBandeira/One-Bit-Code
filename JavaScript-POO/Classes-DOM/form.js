import { Component } from "./Component";

export class Form extends Component{
    constructor(father,properties){
        super('form',father,properties)
    }
    addChildren(...componet){
        componet.forEach(comp => {
            this.getElement().appendChild(comp.getElement())
        })
    }
}