import React from "react";
import { Outlet, useLocation } from "react-router";
import HeaderUser from "./HeaderUser";
import { CSSTransition, TransitionGroup } from "react-transition-group";


export default function LayoutAdmin() {
    const location = useLocation();
    
  return (
    <div>
      <HeaderUser />
      <div className=" min-h-[calc(100vh-150px)] grid items-center ">
      <TransitionGroup component={null} className={"h-full"}>
          <CSSTransition key={location.key} classNames="fade" timeout={300} >
            <Outlet />
            </CSSTransition>
        </TransitionGroup>    
        </div>
    </div>
  );
}
