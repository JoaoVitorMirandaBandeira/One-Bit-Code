import React, { Fragment } from "react";
import ImgDark from "../Shared/DarkImg/index";
import "./style.css";

function Planet(props) {
  return (
    <Fragment>
      <h4 class="planet-title">{props.title}</h4>
      <p class="planet-descripton">{props.description}</p>
      <a class="planet-link" href={props.urlLink} target="_blank">
        {props.descriptionLink}
      </a>
      <ImgDark imgUrl={props.imgUrl} />
    </Fragment>
  );
}

export default Planet;
