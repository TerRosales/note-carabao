"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

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
    { id: "manager", label: "Manager", href: "/sections/manager" },
    { id: "portfolio", label: "Portfolio", href: "/sections/portfolio" },
    { id: "chatter", label: "Chatter", href: "/sections/chatter" },
    { id: "contact", label: "Contact", href: "/sections/contact" },
  ];

  return (
    <nav className="fixed top-1/2 right-12 -translate-y-1/2 z-[999]">
      {/* Toggle Button */}
      <button
        className={`md:hidden bg-white border border-black p-2 rounded-md -translate-y-5 transition-transform duration-300 ease-in-out transform 
          ${isOpen ? "rotate-180 scale-110" : "rotate-0 scale-100"}
        `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="transition-transform duration-300 ease-in-out">
          {isOpen ? (
            <IoClose className="text-black text-3xl transform scale-110" />
          ) : (
            <HiOutlineMenuAlt3 className="text-black text-3xl transform scale-100" />
          )}
        </span>
      </button>

      {/* Navigation Menu */}
      <ul
        className={`list-none p-0 m-0 transition-all duration-300 ease-in-out ${
          isOpen
            ? "block opacity-100 translate-y-0"
            : "hidden opacity-0 translate-y-4 md:opacity-100 md:translate-y-0 md:block"
        }`}
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
                  className={`inline-block transition-all px-5 py-2 rounded-sm w-full text-center border hover:bg-black hover:text-white hover:border-t-2 hover:border-l-2 hover:border-white ${
                    isActive
                      ? "opacity-100 bg-black text-white border-t-2 border-l-2 border-white translate-x-0 shadow-lg shadow-gray-900/50 scale-105"
                      : "bg-white/70 text-black border-b-2 border-r-2 border-black translate-x-8 hover:bg-black/60 hover:opacity-100 hover:translate-x-0"
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
