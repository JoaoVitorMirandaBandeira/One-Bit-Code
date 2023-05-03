const users = [];
async function buscarUsuario(login) {
    const response = await fetch(`https://api.github.com/users/${login}`);
    const user = await response.json();
    if (user.message) {
        alert("Usuario não localizado");
    }
    else {
        users.push(user);
    }
}
async function exibirUsuario(login) {
    const user = users.find(e => { return e.login === login; });
    if (!user) {
        alert("Usuario não encontrado");
    }
    else {
        const response = await fetch(user.repos_url);
        const repository = await response.json();
        let repositoryText = "";
        repository.forEach(e => {
            repositoryText += `

            Nome: ${e.name}
            Descrição: ${e.description}
            Fork: ${e.fork}
            Estrelas: ${e.stargazers_count}`;
        });
        alert(`
        Nome: ${user.name}
        ID: ${user.id}
        Login: ${user.login}
        Bio: ${user.bio}
        Repositorios: ${user.public_repos}
            ${repositoryText}
        `);
    }
}
function organizarArrayUsers() {
    users.sort(function (a, b) {
        if (a.public_repos > b.public_repos) {
            return -1;
        }
        else if (a.public_repos < b.public_repos) {
            return 1;
        }
        else {
            return 0;
        }
    });
}
function exibirTodosUsuarios() {
    organizarArrayUsers();
    let userText = "";
    users.forEach(e => {
        userText += `\n      Nome: ${e.name}\n       ID: ${e.id}\n       Login: ${e.login}\n`;
    });
    alert(`
    Usuarios:
        ${userText}
    `);
}
function calcularTotalRepository() {
    const totalRepository = users.reduce((accum, e) => (accum + e.public_repos), 0);
    alert(`A base de usuarios tem um total de ${totalRepository} repositórios públicos!`);
}
function exibirTopCinco() {
    organizarArrayUsers();
    const topCinco = users.slice(0, 5);
    let message = "Top 5 usuários";
    topCinco.forEach((e, index) => {
        message += `
        Top: ${index + 1}
        Nome: ${e.name}
        ID: ${e.id}
        Login: ${e.login}
        `;
    });
    alert(message);
}
async function main() {
    /*await buscarUsuario('isaacpontes')
     await buscarUsuario('julianaconde')
     await buscarUsuario('pcaldass')
     await buscarUsuario('lucasqueirogaa')
     await buscarUsuario('frans203')
     await buscarUsuario('LeDragoX')
   
     await exibirUsuario('isaacpontes')
     await exibirUsuario('julianaconde')*/
    await buscarUsuario('JoaoVitorMirandaBandeira');
    await buscarUsuario('olzmooraes');
    await buscarUsuario('fdemarque');
    await exibirUsuario('JoaoVitorMirandaBandeira');
    exibirTodosUsuarios();
    calcularTotalRepository();
    exibirTopCinco();
}
main();
