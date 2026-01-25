import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginSchemaType } from "../schema";
import { MdOutlineMailOutline } from "react-icons/md";
import { TbLockPassword } from "react-icons/tb";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [loginError, setLoginError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginSchemaType) => {
    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const user = users.find((u: any) => u.email === data.email && u.password === data.password);

    if (!user) {
      setLoginError("Invalid email or password");
      return;
    }

    // save session
    localStorage.setItem("currentUser", JSON.stringify(user));
    localStorage.setItem("role", user.role);

    // redirect based on role
    navigate(user.role === "doctor" ? "/doctor" : "/home");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Email */}
      <div>
        <label className="text-secondary dark:text-slate-200 font-semibold text-xl">Email</label>

        <div className="relative mt-3">
          <MdOutlineMailOutline
            className="absolute left-4 top-1/2 -translate-y-1/2
                       text-gray-400 dark:text-slate-400 text-xl"
          />

          <input
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            className="
              w-full pl-12 pr-4 py-3 rounded-md
              border border-gray-300 dark:border-slate-700
              bg-white dark:bg-slate-900
              text-secondary dark:text-slate-100
              placeholder:text-gray-400 dark:placeholder:text-slate-400
              focus:ring-2 focus:ring-primary outline-none
              transition
            "
          />
        </div>

        {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
      </div>

      {/* Password */}
      <div>
        <label className="text-secondary dark:text-slate-200 font-semibold text-xl">Password</label>

        <div className="relative mt-3">
          <TbLockPassword
            className="absolute left-4 top-1/2 -translate-y-1/2
                       text-gray-400 dark:text-slate-400 text-xl"
          />

          <input
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            {...register("password")}
            className="
              w-full pl-12 pr-12 py-3 rounded-md
              border border-gray-300 dark:border-slate-700
              bg-white dark:bg-slate-900
              text-secondary dark:text-slate-100
              placeholder:text-gray-400 dark:placeholder:text-slate-400
              focus:ring-2 focus:ring-primary outline-none
              transition
            "
          />

          <button
            type="button"
            onClick={() => setShowPassword((p) => !p)}
            className="absolute right-4 top-1/2 -translate-y-1/2
                       text-gray-500 dark:text-slate-400
                       hover:text-primary transition"
          >
            {showPassword ? <AiOutlineEyeInvisible size={22} /> : <AiOutlineEye size={22} />}
          </button>
        </div>

        {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
      </div>

      {/* Login Error */}
      {loginError && <p className="text-red-500 text-sm text-center">{loginError}</p>}

      {/* Forgot */}
      <div className="flex justify-end">
        <p className="text-primary font-medium text-xl cursor-pointer">Forgot password?</p>
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="
          w-full bg-primary text-white py-3 rounded-md
          hover:bg-primary-600
          active:scale-[0.98]
          transition disabled:opacity-60
        "
      >
        {isSubmitting ? "Signing in..." : "Sign in"}
      </button>
    </form>
  );
}
