import React from "react";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Layout from "./components/Layout";
//import EditUser from "./components/EditUser";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Route, Routes } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import Backoffice from "./components/Backoffice";
import BackofficeHome from "./pages/backoffice";
import Organization from "./pages/backoffice/organization/Organization";
import EditOrganization from "./pages/backoffice/organization/EditOrganization";
import BackofficeCategories from './pages/backoffice/categories/BackofficeCategories'
import CUNewsForm from "./components/CUNewsForm";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="nosotros" element={<AboutUs />} />
        <Route path="login" element={<Login />} />
        <Route path="contacto" element={<ContactUs />} />
        <Route path="signup" element={<SignUp />} />

        <Route path="backoffice" element={<Backoffice />}>
          <Route index element={<BackofficeHome />} />
          <Route path="organizacion" element={<Organization />}>
          </Route>
          <Route path="editar-organizacion" element={<EditOrganization />}>
          </Route>
          <Route path="categorias" element={<BackofficeCategories />} /> 
          <Route path="news/:id" element={<CUNewsForm />} />

        </Route>
      </Route>
    </Routes>
  );
}

export default App;
