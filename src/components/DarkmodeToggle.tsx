import { useEffect, useState } from "react";

const STORAGE_KEY = "theme";

export default function DarkModeToggle() {
  const [dark, setDark] = useState<boolean>(() => {
    return localStorage.getItem(STORAGE_KEY) === "dark";
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem(STORAGE_KEY, "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem(STORAGE_KEY, "light");
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark((prev) => !prev)}
      className="
        p-2 rounded-xl
        bg-white dark:bg-slate-800
        shadow
        transition
      "
      aria-label="Toggle dark mode"
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}
