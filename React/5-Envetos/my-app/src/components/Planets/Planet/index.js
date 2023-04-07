import React, { Fragment } from "react";
import ImgDark from "../Shared/DarkImg/index";
import "./style.css";

function link(link, title) {
  if (link) {
    return (
      <a className="planet-link" href={link} target="_blank">
        {title}
      </a>
    );
  } else {
    return null;
  }
}
/*function satellitesRederizar(satellites) {
  const satelliterNaturais = satellites.map((n) => {
    <li>Saterlite {n}</li>;
  });
  return satelliterNaturais;
}*/

function Planet(props) {
  /*const satellites = ["a", "b", "c", "d"];*/
  return (
    <Fragment>
      <div onClick={() => props.clickPlanet(props.title)}>
        <h4 className="planet-title">{props.title}</h4>
        <p className="planet-descripton">{props.description}</p>
        {link(props.urlLink, props.title)}
        <ImgDark imgUrl={props.imgUrl} dark={props.dark} />
        <h5>Satelites</h5>
        <ul>
          {props.satellites.map((n) => (
            <li>Satelites {n}</li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
}

export default Planet;
