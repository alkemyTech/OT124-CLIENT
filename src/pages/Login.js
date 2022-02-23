import React from "react";
import LoginForm from "../components/Auth/LoginForm";
import CenterResponsiveContainer from "../components/Shared/Containers/CenterResponsiveContainer";

export default function Login() {
  return (
    <CenterResponsiveContainer>
      <p className="text-2xl font-bold text-center">Log In</p>
      <div className="flex justify-center p-2">
        <LoginForm></LoginForm>
      </div>
    </CenterResponsiveContainer>
  );
}
