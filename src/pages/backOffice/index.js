import React from "react";
import BackofficeAdminLayout from "../../components/BackOfficeAdminLayout";
import BackofficeUserLayout from "../../components/BackOfficeUserLayout";

export default function BackofficeHome() {
  // Mockup data
  // Get user role from token
  const role = "admin";

  return (
    <div className="flex justify-center">
      {role === "admin" && <BackofficeAdminLayout />}
      {role === "user" && <BackofficeUserLayout />}
    </div>
  );
}
