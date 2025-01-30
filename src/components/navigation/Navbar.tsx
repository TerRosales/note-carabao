"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt3 } from "react-icons/hi"; // Hamburger menu icon
import { IoClose } from "react-icons/io5"; // Close button icon

interface NavItem {
  id: string;
  label: string;
  href: string;
}

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { id: "home", label: "Home", href: "/" },
    { id: "about", label: "About Me", href: "/sections/about" },
    { id: "portfolio", label: "Portfolio", href: "/sections/portfolio" },
    { id: "chatter", label: "Chatter", href: "/sections/chatter" },
    { id: "contact", label: "Contact", href: "/sections/contact" },
  ];

  return (
    <nav className="fixed top-1/2 right-12 -translate-y-1/2 z-[999]">
      {/* Toggle Button (Hamburger & Close Icon) */}
      <button
        className="md:hidden bg-white border border-black  p-2 rounded-md transition hover:scale-110 -translate-y-4
        "
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <IoClose className="text-black text-3xl" /> // Close button
        ) : (
          <HiOutlineMenuAlt3 className="text-black text-3xl" /> // Hamburger icon
        )}
      </button>

      {/* Navigation Menu */}
      <ul
        className={`list-none p-0 m-0 ${isOpen ? "block" : "hidden"} md:block`}
      >
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.id} className="mb-4 relative text-right">
              <Link
                href={item.href}
                className="block w-36 text-center transition-all"
              >
                <span
                  className={`inline-block transition-all px-5 py-2 rounded-sm w-full text-center border ${
                    isActive
                      ? "opacity-100 bg-black text-white border-t-2 border-l-2 border-white translate-x-0 shadow-lg shadow-gray-900/50 scale-105"
                      : "opacity-50 bg-white/20 text-black border-b-2 border-r-2 border-black translate-x-8 hover:opacity-100 hover:translate-x-0"
                  }`}
                >
                  <p className="text-lg">{item.label}</p>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
