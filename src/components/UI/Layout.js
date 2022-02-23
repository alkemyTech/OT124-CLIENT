import React from "react";
import Footer from "./Footer";
import { Outlet, useLocation } from "react-router";
import Header from "./Header";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useDispatch, useSelector } from "react-redux";
import { selectIsExpired, setIsExpired, getIsExpired, selectUserData } from "../../features/authSlice";
import ExpiredSessionAlert from "../Shared/Alerts/ExpiredSessionAlert";
import { useEffect } from "react";
import { useState } from "react";


export default function Layout() {
  const location = useLocation();
  const isExpired = useSelector(selectIsExpired)
  const userData = useSelector(selectUserData)
  const [isActive, setIsActive] = useState(true);
  const dispach = useDispatch()
  
  useEffect(() => {
    if (!isExpired && userData){
      setInterval(() => {
        dispach(getIsExpired())
      }, 20000);
    } 
  }
    , [dispach, isExpired, userData]);

    useEffect(()=>{
      if (!isExpired && userData){
      let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        dispach(setIsExpired(true))
      }, 8000);
    } else{
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }
    },[isActive, isExpired, userData, dispach])
    console.log(isExpired)
    document.body.addEventListener('click', ()=>setIsActive(true))

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
