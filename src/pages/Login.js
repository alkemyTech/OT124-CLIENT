import React from "react";
import LoginForm from "../components/Auth/LoginForm";

export default function Login() {
  return (
    <div className="flex flex-col self-center justify-center justify-items-center p-2 w-96">
      <p className="text-2xl font-bold text-center">Log In</p>
      <div className="flex justify-center p-2 max-w-md">
        <LoginForm></LoginForm>
      </div>
    </div>
  );
}
