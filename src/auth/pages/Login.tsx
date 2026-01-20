import React from "react";
import LoginForm from "../components/LoginForm";
import { LuScanLine } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const handleNavigation = () => {
    navigate("/register");
  };
  return (
    <>
      <div className="flex justify-center mb-4">
        <img src="../../public/assets/logo.png" alt="Health Connect" className="size-40" />
      </div>

      <h1 className="text-2xl font-bold text-center mb-6 text-primary">Sign in to your account</h1>

      <LoginForm />
      <p className="text-lg font-medium text-center my-5 text-gray-500 flex justify-center items-center gap-2">
        or login using your QR code <LuScanLine />
      </p>
      <p className="text-lg font-semibold text-center mt-8 text-gray-500">
        Don’t have an account?{" "}
        <span onClick={handleNavigation} className="text-primary cursor-pointer">
          Create one
        </span>
      </p>
    </>
  );
}
