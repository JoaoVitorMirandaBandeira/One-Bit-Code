import React, { useState, useEffect } from "react";

const filds = {
  name: "",
};

function FormSatellites(props) {
  const [satellites, setSatellites] = useState(filds);
  const handleChange = (e) => {
    setSatellites({ ...satellites, [e.target.name]: e.target.value });
  };

  const handleSubmit = (ev) => {
    props.addSatellites(satellites);
    ev.preventDefault();
    setSatellites(filds);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Nome Satelite:</label>
      <input
        id="name"
        type="text"
        value={satellites.name}
        name="name"
        onChange={handleChange}
      />
      <input type="submit" />
    </form>
  );
}

export default FormSatellites;
