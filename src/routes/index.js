import React from "react";
import { Navigate, Outlet } from "react-router-dom";

export function PrivateRoute() {
  // Get auth form state
  const role = "user";
  return role === "user" ? <Outlet /> : <Navigate to="/login" />;
}

export function AdminRoute() {
  // Get auth form state
  const role = "admin";

  return role === "admin" ? <Outlet /> : <Navigate to="/" />;
}
