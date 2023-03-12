document.querySelector("form").addEventListener('submit',(e) =>{
    e.preventDefault()
    validateEmail()
    validateSenha()
})

function validateEmail(){
    document.querySelector('.erroUser').innerText = ''
    let email = document.querySelector('#username').value
    let emailFormat = email.trim().match(/\w{2,}@\w{2,}\.[A-Za-z]{2,}/)
    try{
        if(emailFormat){
            console.log("Formato permitido")
        }else{
            throw new Error("Email invalido!")
        }
    }catch(error){
        console.error(error.message)
        document.querySelector('.erroUser').innerText = error.message
    }
}

function validateSenha(){
    document.querySelector('.erroSenha').innerText = ''
    let senha = document.querySelector("#password").value
    let senhaFormat = senha.trim().match(/(?=.*[A-Z])(?=.*[a-z])(?=.*\W)(?=.*\d).+/)
    try{
        if(senhaFormat && senha.length >= 8){
            console.log("Senha Valida")
        }else{
            throw new Error(`Formato invalido, sua senha deve conter no minimo,
            um caractere especial, uma letra minuscula e uma 
            maiuscula, alem de ter um numero e 8 caracteres no total!`)
        }
    }catch(error){
        console.error(error.message)
        document.querySelector('.erroSenha').innerText = error.message
    }
}
/* Email \w{2,}@\w{2,}\.[A-Za-z]{2,}
Senha (?=.*[A-Z])(?=.*[a-z])(?=.*\W)(?=.*\d).+ */