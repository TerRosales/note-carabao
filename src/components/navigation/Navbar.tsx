"use client"
import React, { useEffect, useState } from "react";
import styles from "@/styles/navigation/Navbar.module.css"

interface NavItem {
  id: string;
  label: string;
}

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll<HTMLElement>("section");
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const offsetTop = section.offsetTop - 100;
        const offsetBottom = offsetTop + section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (sectionId && scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  const navItems: NavItem[] = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Me" },
    { id: "services", label: "Services" },
    { id: "testimonials", label: "Testimonials" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav id="navbar" className={styles.navbar}>
      <ul className={styles.navMenu}>
        {navItems.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              className={`${styles.dot} ${
                activeSection === item.id ? styles.active : ""
              }`}
              onClick={(e) => handleClick(e, item.id)}
            >
              <span>{item.label}</span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
