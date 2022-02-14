import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { selectUserData } from "../features/authSlice";
import { useSelector } from "react-redux";

export function PrivateRoute() {
  const userData = useSelector(selectUserData);
  const role = userData?.role;

  return role === "user" ? <Outlet /> : <Navigate to="/login" />;
}

export function AdminRoute() {
  const userData = useSelector(selectUserData);
<<<<<<< HEAD
  const role = userData?.user?.role || 'admin';
=======
  const role = userData?.role;
>>>>>>> 7037ad47f323656ec4db039422c9a02fa25d84b9

  return role === "admin" ? <Outlet /> : <Navigate to="/" />;
}
