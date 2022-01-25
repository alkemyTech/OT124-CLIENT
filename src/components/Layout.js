import React from "react";
import Footer from "./Footer";
import { Outlet } from "react-router";

export default function Layout() {
  return (
    <div>
      <div>
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
}
