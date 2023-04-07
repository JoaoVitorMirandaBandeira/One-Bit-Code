import React from "react";
import ImgDark from "../Shared/DarkImg/index";
import "./style.css";
import { Link } from "react-router-dom";

function Planet(props) {
  return (
    <div>
      <Link to={`/planet/${props.id}`}>
        <h4 className="planet-title">{props.title}</h4>
      </Link>
      <p className="planet-descripton">{props.description}</p>
      <a className="planet-link" href={props.urlLink} target="_blank">
        {props.descriptionLink}
      </a>
      <ImgDark imgUrl={props.imgUrl} dark={props.dark} />
    </div>
  );
}

export default Planet;
