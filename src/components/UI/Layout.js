import React from "react";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router";
import Header from "./Header";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { selectIsExpired, setIsExpired } from "../../features/authSlice";
import ExpiredSessionAlert from "../Shared/Alerts/ExpiredSessionAlert";
import { useEffect } from "react";


export default function Layout() {
  const location = useLocation();
  const isExpired = useSelector(selectIsExpired)
  const dispach = useDispatch()

  
  useEffect(() => {
      setInterval(() => {
        dispach(setIsExpired())
      }, 20000);
    } 
    , [dispach]);

  return (
    <div className="flex flex-col justify-between min-h-[100vh]">
      {(isExpired) && <ExpiredSessionAlert />}
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
