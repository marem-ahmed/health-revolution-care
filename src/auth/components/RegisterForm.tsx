import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type Role = "user" | "doctor";
type Gender = "male" | "female";

type FormDataType = {
  firstName: string;
  lastName: string;
  phone: string;
  age: string;
  email: string;
  password: string;
  specialization: string;
  license: string;
  experience: string;
};

export default function RegisterForm() {
  const navigate = useNavigate();

  const [role, setRole] = useState<Role>("user");
  const [gender, setGender] = useState<Gender>("male");

  const [formData, setFormData] = useState<FormDataType>({
    firstName: "",
    lastName: "",
    phone: "",
    age: "",
    email: "",
    password: "",
    specialization: "",
    license: "",
    experience: "",
  });

  /* ---------- Handlers ---------- */

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users") || "[]");

    const newUser = {
      ...formData,
      gender,
      role,
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    // auto login
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    localStorage.setItem("role", role);

    navigate(role === "doctor" ? "/doctor" : "/");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="h-[420px] overflow-y-auto no-scrollbar space-y-4">
        <Input
          label="First name"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <Input
          label="Last name"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <Input label="Phone number" name="phone" value={formData.phone} onChange={handleChange} />
        <Input label="Age" name="age" type="number" value={formData.age} onChange={handleChange} />
        <Input
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
        />
        <Input
          label="Password"
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
        />

        {/* Gender */}
        <Select
          label="Gender"
          value={gender}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
            setGender(e.target.value as Gender)
          }
          options={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
          ]}
        />

        {/* Role */}
        <Select
          label="Register as"
          value={role}
          onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setRole(e.target.value as Role)}
          options={[
            { value: "user", label: "Patient" },
            { value: "doctor", label: "Doctor" },
          ]}
        />

        {/* Doctor fields */}
        {role === "doctor" && (
          <>
            <Input
              label="Specialization"
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
            />
            <Input
              label="Medical license number"
              name="license"
              value={formData.license}
              onChange={handleChange}
            />
            <Input
              label="Years of experience"
              name="experience"
              type="number"
              value={formData.experience}
              onChange={handleChange}
            />
          </>
        )}
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="
          w-full bg-primary text-white py-3 rounded-md
          hover:bg-primary-600
          active:scale-[0.98]
          transition
        "
      >
        Create account
      </button>
    </form>
  );
}

/* ---------- Reusable Components ---------- */

type InputProps = {
  label: string;
  name: string;
  value: string;
  type?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

function Input({ label, name, value, type = "text", onChange }: InputProps) {
  return (
    <div>
      <label className="text-secondary dark:text-slate-200 font-semibold">{label}</label>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="
          w-full mt-2 px-4 py-2 rounded-md
          border border-gray-300 dark:border-slate-700
          bg-white dark:bg-slate-900
          text-secondary dark:text-slate-100
          placeholder:text-gray-400 dark:placeholder:text-slate-400
          outline-none focus:ring-2 focus:ring-primary
          transition
        "
      />
    </div>
  );
}

type SelectProps = {
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
};

function Select({ label, value, onChange, options }: SelectProps) {
  return (
    <div>
      <label className="text-secondary dark:text-slate-200 font-semibold">{label}</label>
      <select
        value={value}
        onChange={onChange}
        className="
          w-full mt-2 px-4 py-2 rounded-md
          border border-gray-300 dark:border-slate-700
          bg-white dark:bg-slate-900
          text-secondary dark:text-slate-100
          outline-none focus:ring-2 focus:ring-primary
          transition
        "
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
