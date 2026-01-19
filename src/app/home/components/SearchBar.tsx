import React from "react";
export default function SearchBar() {
  return (
    <div className="bg-white rounded-xl shadow px-4 py-3">
      <input
        type="text"
        placeholder="Search for doctors, services..."
        className="w-full outline-none text-secondary placeholder:text-accent"
      />
    </div>
  );
}
