import React from "react";
import Planet from "./Planet/index";
import "./style.css";

function Planets() {
  return (
    <div>
      <h2>Planets</h2>
      <hr />
      <Planet
        title="Mercurio"
        description="Mercúrio é considerado o menor planeta do Sistema Solar desde o rebaixamento de Plutão a planeta anão"
        imgUrl="https://s2.static.brasilescola.uol.com.br/be/2020/11/mercurio-planeta-proximo-sol.jpg"
        descriptionLink="Mercurio"
        urlLink="https://brasilescola.uol.com.br/geografia/mercurio-1.htm"
      />
    </div>
  );
}

export default Planets;
