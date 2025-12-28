import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "../auth/layout/AuthLayout";
import Login from "../auth/pages/Login";

export default function AppRoutes() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        {/* <Route path="/register" element={<Register />} /> */}
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
}
