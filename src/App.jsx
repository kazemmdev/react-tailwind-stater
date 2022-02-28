import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import './css/style.scss';


const App = () => {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </React.Fragment>
  );
};

export default App;
