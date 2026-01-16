import React from "react";
import RegisterForm from "../components/RegisterForm";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/login");
  };
  return (
    <>
      <div className="flex justify-center">
        <img src="/assets/logo.png" alt="Health Connect" className="size-40" />
      </div>

      <h1 className="text-2xl font-bold text-center mb-6 text-primary">
        Create your account
      </h1>

      <RegisterForm />

      <p className="text-lg font-semibold text-center mt-8 text-gray-500">
        Already have an account?
        <span
          onClick={handleNavigation}
          className="text-primary cursor-pointer"
        >
          Sign in
        </span>
      </p>
    </>
  );
}
