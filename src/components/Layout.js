import React from "react";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router";
import Header from "./Header";
import { CSSTransition, TransitionGroup } from "react-transition-group";

export default function Layout() {
  const location = useLocation();
  return (
    <div>
      <Header />
      <div>
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
