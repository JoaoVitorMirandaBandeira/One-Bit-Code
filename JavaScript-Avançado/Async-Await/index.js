 async function calculateIMC(peso, altura){
        if(typeof peso === "number" && typeof altura === "number"){
            return peso/(altura*altura)
        }else{
            return Promise.reject('O parametro passado não e um numero.')
        }
}

async function IMC(peso,altura){

    await calculateIMC(peso,altura).then((result) => {
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