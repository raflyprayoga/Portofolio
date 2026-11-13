"use client";

import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navigation = [
  { label: "Home", href: "#home", id: "home" },
  { label: "About", href: "#about", id: "about" },
  { label: "Skill", href: "#skill", id: "skill" },
  { label: "Project", href: "#project", id: "project" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo(0, 0);

    const updateNavigation = () => {
      setIsScrolled(window.scrollY > 24);
      const marker = window.scrollY + window.innerHeight * 0.35;
      let currentSection = "home";

      for (const item of navigation) {
        const section = document.getElementById(item.id);
        if (section && section.offsetTop <= marker) currentSection = item.id;
      }

      setActiveSection(currentSection);
    };

    updateNavigation();
    window.addEventListener("scroll", updateNavigation, { passive: true });
    window.addEventListener("resize", updateNavigation);
    return () => {
      window.removeEventListener("scroll", updateNavigation);
      window.removeEventListener("resize", updateNavigation);
    };
  }, []);

  return (
    <header className={`site-header${isScrolled ? " is-scrolled" : ""}`}>
      <a className="brand" href="#home" aria-label="Rafly, kembali ke Home">rafly<span>.</span></a>
      <nav className="navigation" aria-label="Navigasi utama">
        {navigation.map((item) => (
          <a
            className={`nav-link${activeSection === item.id ? " is-active" : ""}`}
            href={item.href}
            key={item.label}
            aria-current={activeSection === item.id ? "location" : undefined}
          >
            {item.label}
          </a>
        ))}
      </nav>
      <div className="nav-actions">
        <ThemeToggle />
        <a className="nav-cta" href="#contact">Let&apos;s talk <span aria-hidden="true">↗</span></a>
      </div>
    </header>
  );
}
