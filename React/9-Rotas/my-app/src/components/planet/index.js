import React, { Fragment, useState, useEffect } from "react";
import ImgDark from "../Planets/Shared/DarkImg/index";
import "./style.css";
import FormSatellites from "./formSatellites";
import { useParams } from "react-router-dom";

async function getPlanet(planet) {
  const response = await fetch(`http://localhost:3000/api/${planet}.json`);
  const date = await response.json();
  return date;
}

function Planet() {
  const [satellites, setSatellites] = useState([]);
  const [planet, setPlanet] = useState({});
  let { id } = useParams();

  useEffect(() => {
    getPlanet(id).then((date) => {
      setSatellites(date["satellites"]);
      setPlanet(date["data"]);
    });
  }, []);

  const addSatellites = (newSatellite) => {
    setSatellites([...satellites, newSatellite]);
  };

  return (
    <Fragment>
      <h4 className="planet-title">{planet.name}</h4>
      <p className="planet-descripton">{planet.description}</p>
      <a className="planet-link" href={planet.link} target="_blank">
        {planet.name}
      </a>
      <ImgDark imgUrl={planet.img_url} dark={planet.dark} />
      <h5>Satelites</h5>
      <hr />
      <FormSatellites addSatellites={addSatellites}></FormSatellites>
      <hr />
      <ul>
        {satellites.map((n, index) => {
          return <li key={index}> {n.name} </li>;
        })}
      </ul>
    </Fragment>
  );
}

export default Planet;
