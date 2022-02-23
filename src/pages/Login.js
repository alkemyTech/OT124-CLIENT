import React, { useEffect } from "react";
import LoginForm from "../components/Auth/LoginForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUserData } from "../features/authSlice";
import CenterResponsiveContainer from "../components/Shared/Containers/CenterResponsiveContainer";

export default function Login() {
  const navigate = useNavigate();
  const userData = useSelector(selectUserData);

  useEffect(() => {
    if (userData) {
      navigate("/");
    }
  }, [userData]);

  return (
    <CenterResponsiveContainer>
      <p className="text-2xl font-bold text-center">Log In</p>
      <div className="flex justify-center p-2">
        <LoginForm></LoginForm>
      </div>
    </CenterResponsiveContainer>
  );
}
