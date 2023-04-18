let spaceShips = []

function creteSpaceShip(name:string, pilot:string, crewLimit: number){
    const spaceShip = {
        name,
        pilot,
        crewLimit,
        crew : [crewLimit],
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
    spaceship = spaceShips.find((e) => { e.name === name})
    return spaceship
}