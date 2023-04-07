import React, { useState, useEffect } from "react";
import Planet from "./Planet/index";
import "./style.css";
import Form from "../form/form";

async function getPlanets() {
  const response = await fetch("http://localhost:3000/api/planets.json");
  const data = await response.json();
  return data;
}

function Planets() {
  const [planets, setPlanets] = useState([]);

  // const componentDidMount = () => {
  //   getPlanets().then((data) => {
  //     setState((state) => ({
  //       planets: data["planets"],
  //     }));
  //   });
  // };

  useEffect(() => {
    getPlanets().then((data) => {
      setPlanets(data["planets"]);
    });
  }, []);

  const removeLast = () => {
    let newPlanet = [...planets];
    newPlanet.pop();
    setPlanets(newPlanet);
  };

  const addLast = () => {
    let planet = planets[planets.length - 1];
    setPlanets([...planets, planet]);
  };

  const addNewPlanet = (newPlanet) => {
    setPlanets([...planets, newPlanet]);
  };

  return (
    <div>
      <h2>Planets</h2>
      <button onClick={() => removeLast()}>RemoveLast</button>
      <button onClick={() => addLast()}>AddLast</button>
      <hr />
      <Form addPlanet={addNewPlanet}></Form>
      <hr />
      {planets.map((n, index) => {
        return (
          <Planet
            id={n.id}
            title={n.name}
            description={n.description}
            imgUrl={n.img_url}
            /*descriptionLink={n.name}*/
            urlLink={n.link}
            dark={n.dark}
            key={index}
          />
        );
      })}
    </div>
  );
}

export default Planets;
