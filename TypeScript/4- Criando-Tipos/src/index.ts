type PlanetLocation = [number,number,number,number];
type PlanetSituation = "Habitado" | "Habítavel" | "Inabítavel" | "Inexplorado"
type Planet = {
    name:string,
    location: PlanetLocation,
    situation: PlanetSituation,
    satellites: string[]
}
const planets: Planet[] = []

const addPlanet = (name: string, codernadas: PlanetLocation,situation: PlanetSituation) => {
    planets.push({
        name: name,
        location: codernadas,
        situation: situation,
        satellites: []
    })
    alert(`Planet ${name} successfully added ...`)
}

const updateStatusPlanet = (name: string, situation: PlanetSituation) => {
    const planet:Planet = searchPlanet(name)
    if(planet){
        planet.situation = situation
        alert(`Status of planet ${name} successfully changed to ${situation} ...`)
    }else{
        alert(`Planet ${name} not found ...`)
    }
}

const searchPlanet = (name: string) => {
    let planet: Planet
    planet = planets.find((e) => {return e.name === name})
    return planet
}