import React, { Fragment, useState, useEffect } from "react";
import ImgDark from "../Shared/DarkImg/index";
import "./style.css";
import FormSatellites from "./formSatellites";

async function getSatellites(props) {
  const response = await fetch(`http://localhost:3000/api/${props.id}.json`);
  const date = await response.json();
  return date;
}

function Planet(props) {
  const [satellites, setSatellites] = useState([]);

  useEffect(() => {
    getSatellites(props).then((date) => {
      setSatellites(date["satellites"]);
    });
  }, []);

  const addSatellites = (newSatellite) => {
    setSatellites([...satellites, newSatellite]);
  };

  return (
    <Fragment>
      <h4 className="planet-title">{props.title}</h4>
      <p className="planet-descripton">{props.description}</p>
      <a className="planet-link" href={props.urlLink} target="_blank">
        {props.descriptionLink}
      </a>
      <ImgDark imgUrl={props.imgUrl} dark={props.dark} />
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
