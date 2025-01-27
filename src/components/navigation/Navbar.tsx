"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "@/styles/navigation/Navbar.module.css";

interface NavItem {
  id: string;
  label: string;
  href: string; // Required for external links
}

const Navbar: React.FC = () => {
  const pathname = usePathname(); // Get the current route

  const navItems: NavItem[] = [
    { id: "home", label: "Home", href: "/" },
    { id: "about", label: "About Me", href: "/sections/about" },
    { id: "portfolio", label: "Portfolio", href: "/sections/portfolio" },
    { id: "chatter", label: "Chatter", href: "/sections/chatter" },
    { id: "contact", label: "Contact", href: "/sections/contact" },
  ];

  return (
    <nav id="navbar" className={styles.navbar}>
      <ul className={styles.navMenu}>
        {navItems.map((item) => (
          <li key={item.id}>
            <Link
              href={item.href}
              className={`${styles.dot} ${
                pathname === item.href ? styles.active : ""
              }`}
            >
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
