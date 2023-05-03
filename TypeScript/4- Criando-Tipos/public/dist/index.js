const planets = [];
const addPlanet = (name, codernadas, situation) => {
    planets.push({
        name: name,
        location: codernadas,
        situation: situation,
        satellites: []
    });
    alert(`Planet ${name} successfully added ...`);
};
const updateStatusPlanet = (name, situation) => {
    const planet = searchPlanet(name);
    if (planet) {
        planet.situation = situation;
        alert(`Status of planet ${name} successfully changed to ${situation} ...`);
    }
    else {
        alert(`Planet ${name} not found ...`);
    }
};
const searchPlanet = (name) => {
    let planet;
    planet = planets.find((e) => { return e.name === name; });
    return planet;
};
const addSatellitesPlanet = (name, nameSatellites) => {
    const planet = searchPlanet(name);
    if (planet) {
        planet.satellites.push(nameSatellites);
    }
    else {
        alert(`Planet ${name} not found ...`);
    }
};
const removeSatellitesPlanet = (name, nameSatellites) => {
    const planet = searchPlanet(name);
    if (planet) {
        const indexSatellite = Number(planet.satellites.find((e, index) => {
            if (e === nameSatellites) {
                return index;
            }
        }));
        if (indexSatellite) {
            planet.satellites.splice(indexSatellite, 1);
        }
    }
};
const listPlanet = () => {
    let text = "";
    planets.forEach((e) => {
        text += `Name : ${e.name}
        Situatuon : ${e.situation}
        Location : ${locationPlanet(e)}
        Satellites : ${listSatelite(e)}\n`;
    });
    alert(text);
};
const locationPlanet = (planet) => {
    let location = "";
    planet.location.forEach(e => { location += e; });
    return location;
};
const listSatelite = (planet) => {
    let satellites = "";
    planet.satellites.forEach(e => { satellites += e; });
    return satellites;
};
let control = true;
do {
    let option = prompt("Menu\n 1 - Adicionar planeta\n 2 - Mudar status do Planeta\n 3 - Adicionar satelite\n 4 - Remover satelite\n 5- Listar Palneta");
    switch (option) {
        case "1":
            let namePlanet = prompt("Nome do planeta:");
            let codernadas1 = Number(prompt("Codernadas Norte:"));
            let codernadas2 = Number(prompt("Codernadas Sul:"));
            let codernadas3 = Number(prompt("Codernadas Leste:"));
            let codernadas4 = Number(prompt("Codernadas Oeste:"));
            let codernadas = [codernadas1, codernadas2, codernadas3, codernadas4];
            let situation = prompt("Situação do planeta:(Habitado,Habítavel,Inabítavel,Inexplorado)");
            addPlanet(namePlanet, codernadas, situation);
            break;
        case "2":
            let namePlanetStatus = prompt("Nome do planeta:");
            let statusPlanet = prompt("Situação do planeta:(Habitado,Habítavel,Inabítavel,Inexplorado)");
            updateStatusPlanet(namePlanetStatus, statusPlanet);
            break;
        case "3":
            let namePlanetadd = prompt("Nome do planeta");
            let nameSatelliteadd = prompt("Nome do Satelite");
            addSatellitesPlanet(namePlanetadd, nameSatelliteadd);
            break;
        case "4":
            let namePlanetremove = prompt("Nome do Planeta:");
            let nameSatelliteremove = prompt("Nome do Satelite");
            removeSatellitesPlanet(namePlanetremove, nameSatelliteremove);
            break;
        case "5":
            listPlanet();
            break;
        default:
            alert("Saindo ...");
            control = false;
            break;
    }
} while (control);
