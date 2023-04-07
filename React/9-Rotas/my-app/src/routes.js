import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PlanetsPage from "./pages/PlanetsPage";
import PlanetPage from "./pages/PlanetPage";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PlanetsPage />} />
        <Route exact path="/planet/:id" element={<PlanetPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;
