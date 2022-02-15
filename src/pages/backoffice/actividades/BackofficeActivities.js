import React from "react";
import { Outlet } from "react-router";

export default function BackOfficeActivities() {
  return (
    <>
      <div className="flex flex-col justify-center">
          <Outlet />
      </div>
    </>
  );
}
