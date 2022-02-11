import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import ContactUs from "./pages/ContactUs";
import Backoffice from "./components/Backoffice";
import BackofficeHome from "./pages/backoffice";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import { PrivateRoute, AdminRoute } from "./routes";
import BackOfficeAdminLayout from "./components/BackOfficeAdminLayout";
import BackOfficeUserLayout from "./components/BackOfficeUserLayout";
import BackofficeCategories from "./pages/backoffice/categories/BackofficeCategories";
import BackofficeNews from "./pages/backoffice/news";
import CUNewsForm from "./components/CUNewsForm";
import NewsIndex from "./components/NewsIndex";
import News from "./pages/News";
import NewDetails from "./components/NewDatails";
import Organization from "./pages/backoffice/organization/Organization";
import EditOrganization from "./pages/backoffice/organization/EditOrganization";
import BackofficeCategories from './pages/backoffice/categories/BackofficeCategories'

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
        <Route path="backoffice" element={<AdminRoute />}>
          <Route index element={<BackOfficeAdminLayout />} />
          <Route path="organizacion" element={<Organization />}>
          </Route>
          <Route path="editar-organizacion" element={<EditOrganization />}>
          </Route>
          <Route path="categories" element={<BackofficeCategories />} />
          <Route path="novedades" element={<BackofficeNews />} />
          <Route path="news/:id" element={<CUNewsForm />} />

        </Route>
        <Route path="me" element={<PrivateRoute />}>
          <Route index element={<BackOfficeUserLayout />} />
        </Route>
        <Route path="novedades" element={<NewsIndex />}> 
          <Route index element={<News />}/>
          <Route path=":id" element={<NewDetails />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
