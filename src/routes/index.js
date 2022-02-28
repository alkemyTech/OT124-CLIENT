import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { selectUserData } from "../features/authSlice";
import { useSelector } from "react-redux";
import Layout from "../components/UI/Layout";
import LayoutAdmin from "../components/UI/LayoutAdmin";

export function PrivateRoute() {
  const userData = useSelector(selectUserData);
  const role = userData?.role;

  return role === "user" ? <Outlet /> : <Navigate to="/login" />;
}

export function AdminRoute() {
  const userData = useSelector(selectUserData);
  const role = userData?.role;

  return role === "admin" ? <LayoutAdmin/> : <Navigate to="/" />;
}

export function PublicRoute() {
  const location = useLocation()

  return location?.pathname?.indexOf("/backoffice")===-1 ? <Layout/> : <Outlet/>
}

