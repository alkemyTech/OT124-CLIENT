import React from "react";
import BackofficeAdminLayout from "../../components/BackOfficeAdminLayout";
import BackofficeUserLayout from "../../components/BackOfficeUserLayout";

export default function BackofficeHome() {
  // Mockup data
  // Get user role from token - Where is token though?
  const role = "admin";

  return (
    <div className="flex justify-center">
      {role === "admin" && <BackofficeAdminLayout />}
      {role === "user" && <BackofficeUserLayout />}
    </div>
  );
}
