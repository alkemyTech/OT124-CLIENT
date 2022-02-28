import React from "react";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router";
import Header from "./Header";
import { CSSTransition, TransitionGroup } from "react-transition-group";



export default function Layout() {
  const location = useLocation();

  return (
    <div className="min-h-[100vh] h-[100vh] flex flex-col">
      
      <Header /> 
        <TransitionGroup component={null} className={"h-full"}>
          <CSSTransition key={location.key} classNames="fade" timeout={300}>
            <Outlet />
          </CSSTransition>
        </TransitionGroup>
      {location?.pathname?.indexOf("/backoffice")===-1 && <Footer />}
    </div>
  );
}
