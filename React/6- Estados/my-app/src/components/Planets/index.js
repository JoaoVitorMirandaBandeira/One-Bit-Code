import React from "react";
import Planet from "./Planet/index";
import "./style.css";

class Planets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: [
        {
          title: "Mercurio",
          description:
            "Mercúrio é considerado o menor planeta do Sistema Solar desde o rebaixamento de Plutão a planeta anão",
          imgUrl:
            "https://s2.static.brasilescola.uol.com.br/be/2020/11/mercurio-planeta-proximo-sol.jpg",
          descriptionLink: "Mercurio",
          urlLink: "https://brasilescola.uol.com.br/geografia/mercurio-1.htm",
        },
        {
          title: "Plutão",
          description:
            "Plutão, formalmente designado 134340 Plutão é um planeta anão do Sistema Solar e o nono maior e décimo mais massivo objeto observado diretamente orbitando o Sol",
          imgUrl:
            "https://i1.wp.com/www.luispellegrini.com.br/blog/wp-content/uploads/2018/09/002.jpg?fit:1200%2C750&ssl:1",
          descriptionLink: "Plutão",
          urlLink: "https://pt.wikipedia.org/wiki/Plut%C3%A3o",
        },
      ],
    };
  }

  removeLast() {
    let newPlanet = [...this.state.planets];
    newPlanet.pop();
    this.setState((state) => ({
      planets: newPlanet,
    }));
  }

  addLast = () => {
    let planet = this.state.planets[this.state.planets.length - 1];
    this.setState((state) => ({
      planets: [...this.state.planets, planet],
    }));
  };

  render() {
    return (
      <div>
        <h2>Planets</h2>
        <button onClick={() => this.removeLast()}>RemoveLast</button>
        <button onClick={() => this.addLast()}>AddLast</button>
        <hr />
        {this.state.planets.map((n) => {
          return (
            <Planet
              title={n.title}
              description={n.description}
              imgUrl={n.imgUrl}
              descriptionLink={n.descriptionLink}
              urlLink={n.urlLink}
            />
          );
        })}
      </div>
    );
  }
}

export default Planets;
