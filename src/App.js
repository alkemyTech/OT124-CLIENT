import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
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
import { AdminRoute, PrivateRoute, PublicRoute } from "./routes";
import Activities from "./pages/Activities";
import Contribuye from "./pages/Contribuye";
import CUOrganizationForm from "./components/Organizations/CUOrganizationForm";
import BackofficeListUsers from "./pages/backoffice/users/BackofficeListUsers";
import BackofficeEditUsers from "./pages/backoffice/users/BackofficeEditUsers";
import BackofficeCreateActivity from "./pages/backoffice/actividades/BackofficeCreateActivity";
import BackofficeEditActivities from "./pages/backoffice/actividades/BackofficeEditActivities";
import ActivitiesDetails from "./components/Activities/ActivitiesDetails";
import { useDispatch, useSelector } from "react-redux";
import { selectIsExpired, setIsExpired, getIsExpired, selectUserData } from "./features/authSlice";
import ExpiredSessionAlert from "./components/Shared/Alerts/ExpiredSessionAlert";
import BackofficeSlides from './pages/backoffice/slides/BackofficeSlides';
import { fetchOngData } from './features/ongSlice';
import Testimonials from './pages/Testimonials';
import BackofficeCreateSlides from "./pages/backoffice/slides/BackofficeCreateSlides";
import BackofficeEditSlides from "./pages/backoffice/slides/BackofficeEditSlides";

function App() {
  const isExpired = useSelector(selectIsExpired)
  const userData = useSelector(selectUserData)
  const [isActive, setIsActive] = useState(true);
  const dispatch = useDispatch()
  
  useEffect(() => {
    if (!isExpired && userData){
      setInterval(() => {
        dispatch(getIsExpired())
      }, 20000);
    } 
  }
    , [dispatch, isExpired, userData]);

    useEffect(()=>{
      if (!isExpired && userData){
      let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        dispatch(setIsExpired(true))
      }, 8000000);
    } else{
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }
    },[isActive, isExpired, userData, dispatch])
    
    document.body.addEventListener('click', ()=>setIsActive(false))

  useEffect(() => {
    // Fetch for initial values from redux
    dispatch(fetchOngData());
  }, []);

  return (
    <>
    {(isExpired) && <ExpiredSessionAlert />}
    <Routes>
      <Route path="/" element={<PublicRoute />}>
        <Route index element={<Home />} />
        <Route path="nosotros" element={<AboutUs />} />
        <Route path="login" element={<Login />} />
        <Route path="contacto" element={<ContactUs />} />
        <Route path="mi-perfil" element={<Profile />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="actividades" element={<Activities />} />
        <Route path="contribuye" element={<Contribuye />} />
        <Route path="testimonios" element={<Testimonials />} />
        <Route path="backoffice" element={<AdminRoute />}>
          
          <Route index element={<BackOfficeAdminLayout />} />
          <Route path="organizacion">
            <Route index element={<Organization />} />
            <Route
              path="editar-organizacion/:id"
              element={<CUOrganizationForm isEdit={true} />}
            />
            <Route path="crear-organizacion" element={<CUOrganizationForm />} />
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
            <Route
              path="editar-miembro/:id"
              element={<BackofficeEditMembers />}
            />
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

          <Route path="actividades">
            <Route index element={<BackOfficeActivities />} />
            <Route
              path="crear-actividad"
              element={<BackofficeCreateActivity />}
            />
            <Route
              path="editar-actividad/:id"
              element={<BackofficeEditActivities />}
            />
          </Route>
          <Route path="contactos" element={<BackOfficeContacts />}>
            <Route index element={<ContactsList />} />
            <Route
              path="editar-contactos/:id"
              element={<BackofficeEditUsers />}
            />
          </Route>
          <Route path="usuarios">
            <Route index element={<BackofficeListUsers />} />
            <Route
              path="editar-usuario/:id"
              element={<BackofficeEditUsers />}
            />
          </Route>
          <Route path="slides">
            <Route index element={<BackofficeSlides />} />
            <Route
              path="crear-slide"
              element={<BackofficeCreateSlides />}
            />
            <Route
              path="editar-slide/:id"
              element={<BackofficeEditSlides />}
            />
          </Route>
        </Route>
        <Route path="me" element={<PrivateRoute />}>
          <Route index element={<BackOfficeUserLayout />} />
        </Route>
        <Route path="novedades" element={<NewsIndex />}>
          <Route index element={<News />} />
          <Route path=":id" element={<NewDetails />} />
        </Route>

        <Route path="actividades/:id" element={<ActivitiesDetails />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
