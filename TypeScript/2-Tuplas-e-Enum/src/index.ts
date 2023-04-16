//Tupla e um array com um tipo especifico e de um tamanho especifico.
let crew: [string,string,string]

crew[0] = "João"
crew[1] = "Ozana"
crew[2] = "Jovane"
//crew[3] = "Emanuel" //O tamanho do arry foi utrapassado

let point: [number,number]

point = [2,5]

let [x,y] = point

let person: [string, number, boolean]

person = ["nome",20,true]


// Enum e um grupo de constantes que nos podemos atribuir nomes, ajudando na referenciação, ajuda muito quando mexemos com banco

enum Planets{
    MERCURIO = 1,
    VENUS,
    TERRA,
    MARTE
}

Planets.TERRA //Essa linha vai retornar um numero, ao que e melhor decorar nomes doque numeros

enum Roles{
    ADMIN = "wsrubeus",
    USER = "rubeus"
}