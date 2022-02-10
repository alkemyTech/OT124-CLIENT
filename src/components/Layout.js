import React from "react";
import Footer from "./Footer";
import { Outlet } from "react-router";
import Header from "./Header";

export default function Layout() {
  return (
    <div>
      {/* <Header/> */}
      <div>
        <Outlet></Outlet>
      </div>
      <Footer />
    </div>
  );
}
