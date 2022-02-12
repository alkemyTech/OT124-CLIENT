import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { selectUserData } from "../features/authSlice";
import { useSelector } from "react-redux";

export function PrivateRoute() {
  const userData = useSelector(selectUserData);
  const role = userData?.user.role;

  return role === "user" ? <Outlet /> : <Navigate to="/login" />;
}

export function AdminRoute() {
  const userData = useSelector(selectUserData);
  const role = userData?.user?.role || 'admin';

  return role === "admin" ? <Outlet /> : <Navigate to="/" />;
}
