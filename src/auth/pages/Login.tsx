import React from "react";
import LoginForm from "../components/LoginForm";
import { LuScanLine } from "react-icons/lu";

export default function Login() {
  return (
    <>
      <div className="flex justify-center mb-4">
        <img
          src="../../public/assets/logo.png"
          alt="Health Connect"
          className="size-52"
        />
      </div>

      <h1 className="text-4xl font-bold text-center mb-6 text-primary">
        Sign in to your account
      </h1>

      <LoginForm />
      <p className="text-lg font-medium text-center my-5 text-gray-500 flex justify-center items-center gap-2">
        or login using your QR code <LuScanLine />
      </p>
      <p className="text-lg font-semibold text-center mt-8 text-gray-500">
        Don’t have an account?{" "}
        <span className="text-primary cursor-pointer">Create one</span>
      </p>
    </>
  );
}
