interface GithubUser {
    id: number,
    login: string,
    name: string,
    bio: string,
    public_repos: number,
    repos_url: string,
    message?: "Not Found"
}

interface GithubRepository{
    name: string,
    description: string,
    fork: boolean,
    stargazers_count: number
}

const users: GithubUser[] = []

async function buscarUsuario(login: string){
    const response = await fetch(`https://api.github.com/users/${login}`)
    const user: GithubUser =  await response.json()
    if(user.message){
        alert("Usuario não localizado")
    }else{
        users.push(user)
    }
}

async function exibirUsuario(login: string) {
    const user = users.find( e => {return e.login === login})
    if(!user){
        alert("Usuario não encontrado")
    }else{
        const response = await fetch(user.repos_url)
        const repository: GithubRepository[] = await response.json()
        let repositoryText: string = ""
        repository.forEach( e => {
            repositoryText += `Nome: ${e.name}\nDescrição: ${e.description}\nFork: ${e.fork}\nEstrelas: ${e.stargazers_count}\n\n`
        })
        alert(`
        Nome: ${user.name}
        ID: ${user.id}
        Login: ${user.login}
        Bio: ${user.bio}
        Repositorios: ${user.public_repos}
            ${repositoryText}
        `)
    }
}

function organizarArrayUsers(){
    users.sort(function(a, b){
        if (a.public_repos < b.public_repos) {
            return -1;
          } else if (a.public_repos > b.public_repos) {
            return 1;
          } else {
            return 0;
          }         
    })
}

function exibirTodosUsuarios(){
    organizarArrayUsers()
    let userText: string = ""
    users.forEach( e => {
        userText += `\nNome: ${e.name}\nID: ${e.id}\nLogin: ${e.login}\n`
    })
    alert(`
    Usuarios:
        ${userText}
    `)
}

function calcularTotalRepository(){
    const totalRepository = users.reduce((accum,e) => (accum + e.public_repos),0)
    alert(`A base de usuarios tem um total de ${totalRepository} repositórios públicos!`)
}

function exibirTopCinco(){
    organizarArrayUsers()
    const topCinco = users.slice(4)
    let message: string = "Top 5 usuários"
    topCinco.forEach((e,index) => {
        message += `
        \nTop: ${index + 1}
        Nome: ${e.name}
        ID: ${e.id}
        Login: ${e.login}\n
        `
    })

    alert(message)
}

async function main() {
    await buscarUsuario('isaacpontes')
    await buscarUsuario('julianaconde')
    await buscarUsuario('pcaldass')
    await buscarUsuario('lucasqueirogaa')
    await buscarUsuario('frans203')
    await buscarUsuario('LeDragoX')
  
    await exibirUsuario('isaacpontes')
    await exibirUsuario('julianaconde')
  
    exibirTodosUsuarios()
    calcularTotalRepository()
    exibirTopCinco()
}
  
main()