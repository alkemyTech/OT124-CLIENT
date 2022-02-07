import React from "react";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import { Route, Routes } from "react-router-dom";
import ContactUs from "./pages/ContactUs";
import BackOffice from './pages/backOffice/index'
import BackOfficeHome from "./pages/backOffice";
import Organization from "./pages/backOffice/organization/Organization";
import EditOrganization from "./pages/backOffice/organization/EditOrganization";
import BackofficeCategories from './pages/backOffice/categories/BackofficeCategories'
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

        <Route path="backoffice" element={<BackOffice />}>
          <Route index element={<BackOfficeHome />} />
          <Route path="organizacion" element={<Organization />}>
          </Route>
          <Route path="edit-organization/:id" element={<EditOrganization />}>
          </Route>
          <Route path="categories" element={<BackofficeCategories />} /> 
          <Route path="news/:id" element={<CUNewsForm />} />

        </Route>
      </Route>
    </Routes>
  );
}

export default App;
