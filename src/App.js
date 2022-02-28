import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import ActivitiesForm from "./components/Activities/Form";
import ActivitiesList from "./components/Activities/List";
import BackOfficeAdminLayout from "./components/Backoffice/BackOfficeAdminLayout";
import BackOfficeUserLayout from "./components/Backoffice/BackOfficeUserLayout";
import Layout from "./components/UI/Layout";
import NewDetails from "./components/NewDatails";
import Organization from "./pages/backoffice/organization/Organization";
import NewsIndex from "./components/News/NewsIndex";
import BackOfficeActivities from "./pages/backoffice/actividades/BackofficeActivities";
import BackofficeCategories from "./pages/backoffice/categories/BackofficeCategories";
import BackofficeCreateCategory from "./pages/backoffice/categories/BackofficeCreateCategory";
import BackofficeEditCategory from "./pages/backoffice/categories/BackofficeEditCategory";
import BackOfficeContacts from "./pages/backoffice/contacts/BackOfficeContacts";
import ContactsList from "./pages/backoffice/contacts/ContactsLIst";
import BackofficeNews from "./pages/backoffice/news/news";
import BackofficeMembers from "./pages/backoffice/members/members";
import BackofficeCreateNews from "./pages/backoffice/news/BackofficeCreateNew";
import BackofficeEditNews from "./pages/backoffice/news/BackofficeEditNew";
import BackofficeCreateMembers from "./pages/backoffice/members/BackofficeCreateMember";
import BackofficeEditMembers from "./pages/backoffice/members/BackofficeEditMember";
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
import Activities from "./pages/Activities";
import CUOrganizationForm from "./components/Organizations/CUOrganizationForm";
import BackofficeListUsers from './pages/backoffice/users/BackofficeListUsers';
import BackofficeEditUsers from './pages/backoffice/users/BackofficeEditUsers';
import BackofficeSlides from './pages/backoffice/slides/BackofficeSlides';
import { fetchOngData } from './features/ongSlice';
import { useDispatch } from 'react-redux';


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch for initial values from redux
    dispatch(fetchOngData());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="nosotros" element={<AboutUs />} />
        <Route path="login" element={<Login />} />
        <Route path="contacto" element={<ContactUs />} />
        <Route path="mi-perfil" element={<Profile />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="actividades" element={<Activities />} />
        <Route path="backoffice" element={<AdminRoute />}>
          <Route index element={<BackOfficeAdminLayout />} />
          <Route path="organizacion">
            <Route index element={<Organization />} />
            <Route
              path="editar-organizacion/:id"
              element={<CUOrganizationForm isEdit={true}/>}
            />
            <Route
              path="crear-organizacion"
              element={<CUOrganizationForm />}
            />
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

          <Route path="miembros">
            <Route index element={<BackofficeMembers />} />
            <Route path="crear-miembro" element={<BackofficeCreateMembers />} />
            <Route path="editar-miembro/:id" element={<BackofficeEditMembers />} />
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
          <Route path="usuarios">
            <Route index element={<BackofficeListUsers />} />
            <Route path='editar-usuario/:id' element={<BackofficeEditUsers />} />
          </Route>
          <Route path="slides">
            <Route index element={<BackofficeSlides />} />
          </Route>
        </Route>
        <Route path="me" element={<PrivateRoute />}>
          <Route index element={<BackOfficeUserLayout />} />
        </Route>
        <Route path="novedades" element={<NewsIndex />}>
            <Route index element={<News />} />
            <Route path=":id" element={<NewDetails />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
