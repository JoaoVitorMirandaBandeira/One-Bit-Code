let spaceShips = []

function creteSpaceShip(name:string, pilot:string, crewLimit: number){
    const spaceShip = {
        name,
        pilot,
        crew : [crewLimit],
        inMission : false
    }
    spaceShips.push(spaceShip)
    console.log(`A nave espacial ${spaceShip.name} foi adicionada com sucesso...`)
}
