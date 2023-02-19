class User{
    constructor(fullname, email, password){
        this.fullname = fullname
        this.email = email
        this.password = password
    }

    login(email,password){
        if((this.email === email) &&(this.password === password)){
            return console.log("Login bem sucedido!")
        }else{
            return console.log("Dados incoretos!")
        }
    }
}

const Joao = new User("Joao", "joao@gmail.com","12345")


Joao.login("joao@gmail.com","12345")
console.log(Joao)