import React from "react";
import { Route, Routes } from "react-router";
import BackOfficeAdminLayout from "../../components/BackOfficeAdminLayout";
import BackOfficeUserLayout from "../../components/BackOfficeUserLayout";
import Organization from "./organization/Organization";
import Layout from '../../components/Layout'
export default function BackOfficeHome() {
  // Mockup data
  // Get user role from token
  const role = "admin";

  return (
    <div className="flex justify-center">
      {role === "admin" && <BackOfficeAdminLayout />}
      {role === "user" && <BackOfficeUserLayout />}
      
    </div>
  );
}
