let spaceShips = []

function creteSpaceShip(name:string, pilot:string, crewLimit: number){
    const spaceShip = {
        name,
        pilot,
        crewLimit,
        crew : [],
        inMission : false
    }
    spaceShips.push(spaceShip)
    alert(`A nave espacial ${spaceShip.name} foi adicionada com sucesso...`)
}

function addCrewSpaceShip(nameSpaceShip: string, name: string){
    const spaceShip = findSpaceShip(nameSpaceShip)
    if(spaceShip.crewLimit > spaceShip.crew.length){
        spaceShip.crew.push(name)
        alert(`${name} foi adiconado a tripulação com sucesso...`)
    }else{
        alert(`A tripulação esta completa, não foi possivel adicionar ${name} a tripulação...`)
    }
}

function findSpaceShip(name: string){
    let spaceship: {
        name: string,
        pilot: string,
        crewLimit:number,
        crew: string[],
        inMission: boolean
      }
    spaceship = spaceShips.find((e) => { return e.name === name})
    return spaceship
}

function sendSpaceShip(nameSpaceShip: string){
    const spaceShip = findSpaceShip(nameSpaceShip)
    if(spaceShip){
        if(spaceShip.inMission){
            alert(`Nave ${spaceShip.name} ja se encontra em missão...`)
        }else if(spaceShip.crewLimit > spaceShip.crew.length){
            alert(`A tripulação da nave ${spaceShip.name} esta incompleta ...`)
        }else{
            const confirmation = confirm(`Deseja mesmo manadar ${spaceShip.name} em uma missão?`)
            if(confirmation){
                spaceShip.inMission = true
                alert(`Nave ${spaceShip.name} enviada em missão com sucesso...`)
            }else{
                alert(`Envio da nave ${spaceShip.name} em missão cancelado...`)
            }
        }
    }else{
        alert(`A nave ${nameSpaceShip} não foi encontrada na base de dados...`)
    }
}

function displaySpaceShips(){
    
    let text = `Lista de Espaçonaves\n`
    spaceShips.forEach((spaceship: {
        name: string,
        pilot: string,
        crewLimit:number,
        crew: string[],
        inMission: boolean
    }) => {
        let list = ``
        text += `Nome: ${spaceship.name}
        Piloto: ${spaceship.pilot}
        Tamanho da tripulação: ${spaceship.crewLimit}
        Tripulação: ${displayCrewSpaceShip(spaceship)}
        Em Missão: ${spaceship.inMission ? `Sim\n\n` : `Não\n\n`}`
    })
    alert(text)
}

function displayCrewSpaceShip(spaceShip){
    let list = ``
    spaceShip.crew.forEach((e) => { list +=`\n            ${e}`})
    return list
}

let control = true
while(control){
    let option = prompt(
        `Painel de controle:
            1 - Cadastrar Nave
            2 - Adicionar tripulação
            3 - Enviar Nave em missão
            4 - Visualizar naves`
    )
    switch (option) {
        case "1":
            let name = prompt(`Nome da Espaçonave:`)
            let pilot = prompt(`Nome do Capitão:`)
            let crew  = Number(prompt(`Tamanho da tripulação:`))
            creteSpaceShip(name,pilot,crew)
            break;
        case "2":
            let nameSpaceShip = prompt(`Nome da espaçonave:`)
            let nameTripulacao = prompt(`Nome do tripulante:`)
            addCrewSpaceShip(nameSpaceShip,nameTripulacao)
            break;
        case "3":
            let nameSpaceShipMission = prompt(`Nome da espaçonade a ser enviada:`)
            sendSpaceShip(nameSpaceShipMission)
            break;
        case "4":
            displaySpaceShips()
            break;
        default:
            alert(`Opção invalida...`)
            break;
    }
}