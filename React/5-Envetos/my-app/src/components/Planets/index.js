import React from "react";
import Planet from "./Planet/index";
import "./style.css";

const clickPlanet = (name) => {
  console.log(`Clicou no planeta ${name}`);
};

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
        /*urlLink="https://brasilescola.uol.com.br/geografia/mercurio-1.htm"*/
        clickPlanet={clickPlanet}
        dark={true}
        satellites={["a", "b", "c", "d"]}
      />
      <br></br>
      <Planet
        title="Plutão"
        description="Plutão, formalmente designado 134340 Plutão é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol"
        imgUrl="https://i1.wp.com/www.luispellegrini.com.br/blog/wp-content/uploads/2018/09/002.jpg?fit=1200%2C750&ssl=1"
        descriptionLink="Plutão"
        urlLink="https://pt.wikipedia.org/wiki/Plut%C3%A3o"
        clickPlanet={clickPlanet}
        satellites={["a", "b", "c", "d"]}
      />
    </div>
  );
}

export default Planets;
