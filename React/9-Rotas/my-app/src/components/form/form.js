import React, { Fragment, useState, useEffect } from "react";

const resetFilds = {
  name: "",
  description: "",
  img_url: "",
  link: "",
};

function Form(props) {
  const [filds, setFilds] = useState(resetFilds);

  const handleChange = (event) => {
    setFilds({ ...filds, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    props.addPlanet(filds);
    event.preventDefault();
    setFilds(resetFilds);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          name="name"
          value={filds.name}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="description">Description:</label>
        <input
          id="description"
          type="text"
          name="description"
          value={filds.description}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="img_url">URL:</label>
        <input
          id="img_url"
          type="text"
          name="img_url"
          value={filds.img_url}
          onChange={handleChange}
        />
      </div>
      <div>
        <label htmlFor="link">Link:</label>
        <input
          id="link"
          type="text"
          name="link"
          value={filds.link}
          onChange={handleChange}
        />
      </div>

      <br />
      <input type="submit" />
    </form>
  );
}

export default Form;
