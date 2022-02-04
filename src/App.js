import React from "react";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import { Route, Routes } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Categories from "./pages/backOffice/categories/Categories";
import Backoffice from "./components/Backoffice";
import BackofficeHome from "./pages/backoffice";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="nosotros" element={<AboutUs />} />
        <Route path="login" element={<Login />} />
        <Route path="contacto" element={<ContactUs />} />
        <Route path="backoffice" element={<Backoffice />}>
          <Route index element={<BackofficeHome />} />
          <Route path="categories" element={<Categories/>} /> 
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
