import React, { useEffect } from "react";
import SignUpForm from "../components/Auth/SignUpForm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectUserData } from "../features/authSlice";
import CenterResponsiveContainer from "../components/Shared/Containers/CenterResponsiveContainer";

export default function SignUp() {
  const navigate = useNavigate();
  const userData = useSelector(selectUserData);

  useEffect(() => {
    if (userData) {
      navigate("/");
    }
  }, [userData]);

  return (
    <CenterResponsiveContainer>
      <div className="flex flex-col self-center justify-center justify-items-center p-2 w-96">
        <p className="text-2xl font-bold text-center">Registrarse</p>
        <div className="flex justify-center p-2 max-w-md">
          <SignUpForm />
        </div>
      </div>
    </CenterResponsiveContainer>
  );
}
