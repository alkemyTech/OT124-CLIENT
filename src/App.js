import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import ContactUs from "./pages/ContactUs";
import Profile from "./pages/Profile";
import BackofficeCategories from "./pages/backoffice/categories/BackofficeCategories";
import Backoffice from "./components/Backoffice";
import BackofficeHome from "./pages/backoffice";
import BackofficeNews from "./pages/backoffice/news";
import CUNewsForm from "./components/CUNewsForm";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/nosotros" element={<AboutUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contacto" element={<ContactUs />} />
        <Route path="/mi-perfil" element={<Profile />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="backoffice" element={<Backoffice />}>
          <Route index element={<BackofficeHome />} />
          <Route path="novedades" element={<BackofficeNews />} />
          <Route path="categories" element={<BackofficeCategories />} />
          <Route path="news/:id" element={<CUNewsForm />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
