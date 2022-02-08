import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ActivitiesForm from "./components/ActivitiesForm";
import ActivitiesList from "./components/ActivitiesList";
import Backoffice from "./components/Backoffice";
import CUNewsForm from "./components/CUNewsForm";
import Home from "./components/Home";
import Layout from "./components/Layout";
import BackofficeHome from "./pages/backoffice";
import BackOfficeActivities from "./pages/backoffice/actividades/BackofficeActivities";
import BackofficeCategories from "./pages/backoffice/categories/BackofficeCategories";
import ContactUs from "./pages/ContactUs";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";

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
          <Route path="categories" element={<BackofficeCategories />} />
          <Route path="news/:id" element={<CUNewsForm />} />
          <Route path="actividades" element={<BackOfficeActivities />}>
            <Route index element={<ActivitiesList />} />
            <Route path="create" element={<ActivitiesForm />} />
            <Route path="edit/:id" element={<ActivitiesForm />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
