import React from "react";
import { Outlet } from "react-router";

export default function BackOfficeContacts() {
  return (
    <>
      <div className="mx-auto flex justify-center shadow-lg sm:py-40">
        <div className="sm:px-32 px-2 w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
}
