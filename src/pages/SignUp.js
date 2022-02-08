import React from "react";
import SignUpForm from "../components/SignUpForm";

export default function SignUp() {
  return (
    <div>
      <p className="text-2xl font-bold text-center">Registrate</p>
      <div className="flex justify-center p-2">
        <SignUpForm />
      </div>
    </div>
  );
}
