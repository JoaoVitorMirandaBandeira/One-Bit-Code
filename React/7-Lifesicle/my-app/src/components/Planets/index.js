import React from "react";
import Planet from "./Planet/index";
import "./style.css";

class Planets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      planets: [],
    };
  }

  async getPlanets() {
    const response = await fetch("http://localhost:3000/api/planets.json");
    const data = await response.json();
    return data;
  }

  componentDidMount() {
    this.getPlanets().then((data) => {
      this.setState((state) => ({
        planets: data["planets"],
      }));
    });
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
        {this.state.planets.map((n, index) => {
          return (
            <Planet
              id={n.id}
              title={n.name}
              description={n.description}
              imgUrl={n.img_url}
              descriptionLink={n.name}
              urlLink={n.link}
              dark={n.dark}
              key={index}
            />
          );
        })}
      </div>
    );
  }
}

export default Planets;
