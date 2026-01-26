import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Select from "../../components/select";
import Input from "../../components/input";

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
