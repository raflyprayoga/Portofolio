"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    let savedTheme: string | null = null;
    try {
      savedTheme = window.localStorage.getItem("portfolio-theme");
    } catch {
      // Keep the default when browser storage is unavailable.
    }
    const nextTheme: Theme = savedTheme === "light" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
  }, []);

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    document.documentElement.dataset.theme = nextTheme;
    try {
      window.localStorage.setItem("portfolio-theme", nextTheme);
    } catch {
      // The theme still changes for this visit if browser storage is unavailable.
    }
  }

  return (
    <button
      className="theme-control"
      type="button"
      onClick={toggleTheme}
      aria-pressed={theme === "light"}
      aria-label={`Aktifkan tema ${theme === "dark" ? "terang" : "gelap"}`}
      title={`Aktifkan tema ${theme === "dark" ? "terang" : "gelap"}`}
    >
      <span aria-hidden="true">{theme === "dark" ? "☀" : "☾"}</span>
    </button>
  );
}
