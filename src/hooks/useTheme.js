import { useEffect, useState } from "react";

export default function useTheme() {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") || "dark"
  );

  // Whenever theme changes, update body class & localStorage
  useEffect(() => {
    document.body.classList.remove("dark-mode", "light-mode");

    if (theme === "dark") {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.add("light-mode");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  // Toggle function
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  return { theme, toggleTheme };
}
