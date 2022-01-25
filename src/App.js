import React from "react";
import Home from "./componets/Home";
import OboutUs from "./componets/OboutUs";
import { Router, Route, Routes } from "react-router";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/nosotros" element={<OboutUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
