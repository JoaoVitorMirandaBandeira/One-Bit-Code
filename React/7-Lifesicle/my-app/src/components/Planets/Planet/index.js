import React, { Fragment } from "react";
import ImgDark from "../Shared/DarkImg/index";
import "./style.css";

class Planet extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      satellites: [],
    };
  }

  async getSatellites() {
    const response = await fetch(
      `http://localhost:3000/api/${this.props.id}.json`
    );
    const date = await response.json();
    return date;
  }

  componentDidMount() {
    this.getSatellites().then((date) => {
      this.setState((state) => ({
        satellites: date["satellites"],
      }));
    });
  }

  render() {
    return (
      <Fragment>
        <h4 className="planet-title">{this.props.title}</h4>
        <p className="planet-descripton">{this.props.description}</p>
        <a className="planet-link" href={this.props.urlLink} target="_blank">
          {this.props.descriptionLink}
        </a>
        <ImgDark imgUrl={this.props.imgUrl} dark={this.props.dark} />
        <h5>Satelites</h5>
        <ul>
          {this.state.satellites.map((n, index) => {
            return <li key={index}> {n.name} </li>;
          })}
        </ul>
      </Fragment>
    );
  }
}

export default Planet;
