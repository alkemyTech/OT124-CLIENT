import React from "react";
import Home from "./componets/Home";
import OboutUs from "./componets/OboutUs";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from './componets/Header';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route path="/nosotros" element={<OboutUs/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
