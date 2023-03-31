import React, { Fragment } from "react";
import "./style.css";

function Planet() {
  return (
    <div>
      <h4>Mercurio</h4>
      <img
        src="https://s2.glbimg.com/9XGtJ8RoRcFGFZelMveok3hDnxU=/e.glbimg.com/og/ed/f/original/2015/01/30/mercurio1.jpg"
        class="imagem-mercurio"
      ></img>
      <p>
        Um ano em Mercúrio é de 88 dias, mas um dia solar em Mercúrio equivale a
        176 dias terrestres. Como esse planeta está muito próximo do Sol, ele
        sofre um fenômeno de fechadura gravitacional.
      </p>
    </div>
  );
}

export default Planet;
