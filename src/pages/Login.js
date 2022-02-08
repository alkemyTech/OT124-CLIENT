import React from "react";
import LoginForm from "../components/LoginForm";

export default function Login() {
  return (
    <div>
      <p className="text-2xl font-bold text-center">Log In</p>
      <div className="flex justify-center p-2">
        <LoginForm></LoginForm>
      </div>
    </div>
  );
}
