import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ActivitiesForm from "./components/Activities/Form";
import ActivitiesList from "./components/Activities/List";
import BackOfficeAdminLayout from "./components/BackOfficeAdminLayout";
import BackOfficeUserLayout from "./components/BackOfficeUserLayout";
import Layout from "./components/Layout";
import NewDetails from "./components/NewDatails";
import Organization from "./pages/backoffice/organization/Organization";
import EditOrganization from "./pages/backoffice/organization/EditOrganization";
import NewsIndex from "./components/NewsIndex";
import BackOfficeActivities from "./pages/backoffice/actividades/BackofficeActivities";
import BackofficeCategories from "./pages/backoffice/categories/BackofficeCategories";
import BackofficeCreateCategory from "./pages/backoffice/categories/BackofficeCreateCategory";
import BackofficeEditCategory from "./pages/backoffice/categories/BackofficeEditCategory";
import BackOfficeContacts from "./pages/backoffice/contacts/BackOfficeContacts";
import ContactsList from "./pages/backoffice/contacts/ContactsLIst";
import BackofficeNews from "./pages/backoffice/news";
import BackofficeCreateNews from "./pages/backoffice/news/BackofficeCreateNew";
import BackofficeEditNews from "./pages/backoffice/news/BackofficeEditNew";
import BackofficeCreateTestimonials from "./pages/backoffice/testimonials/BackofficeCreateTestimonials";
import BackofficeEditTestimonials from "./pages/backoffice/testimonials/BackofficeEditTestimonials";
import BackofficeTestimonials from "./pages/backoffice/testimonials/BackofficeTestimonials";
import ContactUs from "./pages/ContactUs";
import Home from "./pages/Home";
import Login from "./pages/Login";
import News from "./pages/News";
import Profile from "./pages/Profile";
import SignUp from "./pages/SignUp";
import { AdminRoute, PrivateRoute } from "./routes";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="nosotros" element={<AboutUs />} />
        <Route path="login" element={<Login />} />
        <Route path="contacto" element={<ContactUs />} />
        <Route path="mi-perfil" element={<Profile />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="backoffice" element={<AdminRoute />}>
          <Route index element={<BackOfficeAdminLayout />} />
          <Route path="organizacion" element={<Organization />}>
          </Route>
          <Route path="editar-organizacion" element={<EditOrganization />}>
          </Route>
        

          <Route path="categorias">
            <Route index element={<BackofficeCategories />} />
            <Route
              path="crear-categoria"
              element={<BackofficeCreateCategory />}
            />
            <Route
              path="editar-categoria/:id"
              element={<BackofficeEditCategory />}
            />
          </Route>
          <Route path="novedades">
            <Route index element={<BackofficeNews />} />
            <Route path="crear-novedad" element={<BackofficeCreateNews />} />
            <Route path="editar-novedad/:id" element={<BackofficeEditNews />} />
          </Route>
          <Route path="testimonios">
            <Route index element={<BackofficeTestimonials />} />
            <Route
              path="editar-testimonio/:id"
              element={<BackofficeEditTestimonials />}
            />
            <Route
              path="crear-testimonio"
              element={<BackofficeCreateTestimonials />}
            />
          </Route>

          <Route path="actividades" element={<BackOfficeActivities />}>
            <Route index element={<ActivitiesList />} />
            <Route path="create" element={<ActivitiesForm />} />
            <Route path="edit/:id" element={<ActivitiesForm />} />
          </Route>
          <Route path="contactos" element={<BackOfficeContacts />}>
            <Route index element={<ContactsList />} />
          </Route>
          <Route path="novedades" element={<NewsIndex />}>
            <Route index element={<News />} />
            <Route path=":id" element={<NewDetails />} />
          </Route>
        </Route>
        <Route path="me" element={<PrivateRoute />}>
          <Route index element={<BackOfficeUserLayout />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
