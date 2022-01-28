import React from "react";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      
        <Route index element={<Home />} />
        <Route path="/nosotros" element={<AboutUs />} />
      
    </Routes>
  );
}

export default App;
