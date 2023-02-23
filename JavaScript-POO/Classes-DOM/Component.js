 export class Component{
    #element = null
    constructor(tag, father,properties){
        this.tag = tag
        this.father = father
        this.properties =properties
    }
    getElement(){
        return  this.#element
    }

    biuld(){
        this.#element = document.createElement(this.tag)
        Object.assign(this.#element, this.properties)
        return this
    }

    render(){
        if(this.father instanceof Component){
            this.father.getElement().append(this.#element)
        }else{
            document.querySelector(this.father).append(this.#element)
        }
    }
    remove(){
        if(this.#element){
            this.#element.remove()
        }
    }
}