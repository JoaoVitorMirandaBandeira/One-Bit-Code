type PlanetLocation = [number,number,number,number];
type PlanetSituation = "Habitado" | "Habítavel" | "Inabítavel" | "Inexplorado"
type Planet = {
    name:string,
    location: PlanetLocation,
    situation: PlanetSituation,
    satellites: string[]
}

const planets: Planet[] = []

const addPlanet = () => {
    }