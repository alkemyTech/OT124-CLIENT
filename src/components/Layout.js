import React from "react";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router";
import Header from "./Header";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function Layout() {
  const location = useLocation();
  return (
    <div className="flex flex-col justify-between min-h-[100vh]">
      <Header />
      <div className="flex flex-col flex-grow justify-center py-[25px]">
        <TransitionGroup component={null}>
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            <Outlet></Outlet>
          </CSSTransition>
        </TransitionGroup>
      </div>
      <Footer />
    </div>
  );
}
