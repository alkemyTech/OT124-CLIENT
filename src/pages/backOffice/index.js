import React from "react";
import BackOfficeAdminLayout from "../../components/BackOfficeAdminLayout";
import BackOfficeUserLayout from "../../components/BackOfficeUserLayout";

export default function BackofficeHome() {
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
