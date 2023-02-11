//Calcula a media simples
function simpleMedia(...number){
    let sum = number.reduce((accu , curr) => accu + curr,0)
    let length = number.length
    return sum / length
}
console.log(simpleMedia(1,2,3,4)) 

//Calcula a media ponderada
function weightedMedia(...number){
    console.log(number)
    let sum = number.reduce((accu,{n,p}) => accu + (n * (p ?? 1)) ,0)
    console.log(sum)
    let sumWeight = number.reduce((accu,{p}) => accu + p,0)
    console.log(sumWeight)
    return sum/sumWeight
}
console.log(weightedMedia({ n: 7, p: 2}, { n: 9, p: 5 }, { n: 3, p: 1 })) 

 //Calcular a mediana
function median(...number){
    let sequence = number.sort((a,b) => { return a - b })
    console.log(sequence)
    let center = Math.trunc((number.length/2))
    
    if( number.length % 2 == 1){
       
    }else{
        console.log((sequence[center] + sequence[center - 1])/2)
    }
}

//Calculando a moda
function moda(...number){
    let contagem = number.map(num => [
        num, number.filter(n => num === n).length])
    let ordenar = contagem.sort((a,b) => b[1] - a[1])
    return ordenar[0][0]
}