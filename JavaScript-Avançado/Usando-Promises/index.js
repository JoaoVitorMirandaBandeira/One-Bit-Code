function calculateIMC(peso, altura){
    return new Promise((resolve, reject) => {
        if(typeof peso === "number" && typeof altura === "number"){
            resolve(peso/(altura*altura))
        }else{
            reject('O parametro passado não e um numero.')
        }
    })
}

function IMC(peso,altura){

    calculateIMC(peso,altura).then((result) => {
        if(result < 18.5) console.log(`Magreza`)
        else if(result < 24.9 ) console.log(`Normal`)
        else if(result < 29.9) console.log(`Sobrepeso`)
        else if(result < 39.9) console.log(`Obesidade`)
        else if(result > 39.9) console.log(`Obesidade Grave`)
    }).catch((erro) => {
        console.log(`Erro: ${erro}`)
    })
    console.log(`Calculando o IMC ...`)
}

IMC(80,1.58)
IMC(80,"oi")