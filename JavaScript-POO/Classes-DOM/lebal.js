import { Component } from "./Component.js";

export class Label extends Component{
    constructor(text , father,properties){
        super('label',father, Object.assign({}, properties , {  textContent: text }))
    }
}