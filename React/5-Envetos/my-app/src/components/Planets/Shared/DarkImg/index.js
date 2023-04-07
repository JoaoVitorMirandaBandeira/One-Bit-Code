import React from "react";
import "./style.css";

function ImgDark(props) {
  return (
    <img
      className={props.dark ? "darkImg" : "imgColor"}
      src={props.imgUrl}
    ></img>
  );
}

export default ImgDark;
