import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import ContactUs from "./pages/ContactUs";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import { PrivateRoute, AdminRoute } from "./routes";
import BackOfficeAdminLayout from "./components/BackOfficeAdminLayout";
import BackOfficeUserLayout from "./components/BackOfficeUserLayout";
import BackofficeCategories from "./pages/backoffice/categories/BackofficeCategories";
import BackofficeNews from "./pages/backoffice/news";
import BackofficeCreateNews from "./pages/backoffice/news/BackofficeCreateNew";
import BackofficeEditNews from "./pages/backoffice/news/BackofficeEditNew";
import BackofficeTestimonials from "./pages/backoffice/testimonials/BackofficeTestimonials";
import BackofficeEditTestimonials from "./pages/backoffice/testimonials/BackofficeEditTestimonials";
import BackofficeCreateTestimonials from "./pages/backoffice/testimonials/BackofficeCreateTestimonials";
import NewsIndex from "./components/NewsIndex";
import News from "./pages/News";
import NewDetails from "./components/NewDatails";

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
          <Route path="categorias" >
            <Route index element={<BackofficeCategories />} />
          </Route>
          <Route path="novedades" >
            <Route index element={<BackofficeNews />} />
            <Route path="crear-novedad" element={<BackofficeCreateNews />} />
            <Route path="editar-novedad/:id" element={<BackofficeEditNews  />} />
          </Route>
          <Route path="testimonios" element={<BackofficeTestimonials />} >
            <Route path="editar-testimonio/:id" element={<BackofficeEditTestimonials />} />
            <Route path="crear-testimonio" element={<BackofficeCreateTestimonials />} />
          </Route>
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
