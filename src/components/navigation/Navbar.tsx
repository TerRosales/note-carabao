"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import {
  FaUserCircle,
  FaHome,
  FaBriefcase,
  FaComments,
  FaEnvelope,
  FaTasks,
  FaCompressArrowsAlt,
  FaExpandArrowsAlt
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

// ✅ FIXED: icon typed as ReactElement so cloneElement works cleanly
interface NavItem {
  id: string;
  label: string;
  href: string;
  icon: React.ReactElement;
}

const dropdownVariants = {
  hidden: { opacity: 0, y: -10, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.3, ease: "easeInOut" },
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    transition: { duration: 0.2, ease: "easeInOut" },
  },
};

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);
  const [blinkDone, setBlinkDone] = useState(false);

  // ✅ FIXED: HTMLLIElement matches the <li> ref below
  const profileRef = useRef<HTMLLIElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  // Initial 15-second shrink timer on mount
  useEffect(() => {
    timerRef.current = setTimeout(() => setIsShrunk(true), 15000);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (profileRef.current && !profileRef.current.contains(event.target as Node)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Blinking Animation: Stop after 4 blinks
  useEffect(() => {
    const blinkTimer = setTimeout(() => {
      setBlinkDone(true);
    }, 8000);
    return () => clearTimeout(blinkTimer);
  }, []);

  // ✅ navItems now have icons typed as ReactElement
  const navItems: NavItem[] = isAuthenticated
    ? [
        { id: "manager", label: "Manager", href: "/sections/manager", icon: <FaTasks /> },
        { id: "portfolio", label: "Portfolio", href: "/sections/portfolio", icon: <FaBriefcase /> },
        { id: "chatter", label: "Chatter", href: "/sections/chatter", icon: <FaComments /> },
      ]
    : [
        { id: "home", label: "Home", href: "/", icon: <FaHome /> },
        { id: "portfolio", label: "Portfolio", href: "/sections/portfolio", icon: <FaBriefcase /> },
        { id: "chatter", label: "Chatter", href: "/sections/chatter", icon: <FaComments /> },
        { id: "contact", label: "Contact", href: "/sections/contact", icon: <FaEnvelope /> },
      ];

  return (
    <nav className="fixed top-1/2 right-12 -translate-y-1/2 z-[999] flex items-center">
      {/* Floating Shrink Button */}
      <button
        onClick={() => setIsShrunk((prev) => !prev)}
        className={`absolute -left-16 w-10 h-10 flex items-center justify-center rounded-full bg-black text-white z-[999] transition-opacity duration-300
          ${blinkDone ? "opacity-20" : "animate-blink"}`}
        title={isShrunk ? "Expand Menu" : "Shrink Menu"}
      >
        {isShrunk ? <FaExpandArrowsAlt size={24} /> : <FaCompressArrowsAlt size={24} />}
      </button>

      {/* Toggle Button */}
      <button
        className={`md:hidden bg-white border border-black p-2 rounded-md -translate-y-5 transition-transform duration-300 ease-in-out transform 
          ${isOpen ? "rotate-180 scale-110" : "rotate-0 scale-100"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="transition-transform duration-300 ease-in-out">
          {isOpen ? (
            <IoClose className="text-black" size={24} />
          ) : (
            <HiOutlineMenuAlt3 className="text-black" size={24} />
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
        {/* Profile Button (Only if authenticated) */}
        {isAuthenticated && (
          <li className="mb-4 text-right relative" ref={profileRef}>
            <div className="relative inline-block">
              <button
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                className={`flex items-center justify-center space-x-3 px-5 py-2 rounded-sm ${isShrunk ? "w-12 h-12 p-0" : "w-36"} border duration-300 ease-in-out
                bg-black text-white border-t-2 border-l-2 border-white shadow-lg shadow-gray-900/50 scale-105
                hover:bg-white hover:text-black hover:border-black active:scale-95`}
              >
                <FaUserCircle size={24} />
                {!isShrunk && <span>Profile</span>}
              </button>

              <AnimatePresence>
                {isProfileOpen && !isShrunk && (
                  <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={dropdownVariants}
                    className="absolute z-20 right-0 mt-2 w-48 bg-white shadow-lg border border-gray-300 rounded-md overflow-hidden"
                  >
                    <ul className="text-black">
                      <li>
                        <Link href="/manage/fitness-tracker" className="block px-4 py-2 hover:bg-gray-200">
                          Manage Fitness Tracker
                        </Link>
                      </li>
                      <li>
                        <Link href="/manage/blog" className="block px-4 py-2 hover:bg-gray-200">
                          Manage Blog
                        </Link>
                      </li>
                      <li>
                        <Link href="/edit/profile" className="block px-4 py-2 hover:bg-gray-200">
                          Edit Profile
                        </Link>
                      </li>
                      <li>
                        <Link href="/edit/portfolio" className="block px-4 py-2 hover:bg-gray-200">
                          Edit Portfolio
                        </Link>
                      </li>
                      <li>
                        <button
                          onClick={() => {
                            setIsAuthenticated(false);
                            setIsProfileOpen(false);
                          }}
                          className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-200"
                        >
                          Sign Out
                        </button>
                      </li>
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </li>
        )}

        {/* Navigation Items */}
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <li key={item.id} className="mb-4 relative text-right">
              <Link href={item.href} className="block text-center transition-all">
                <span
                  className={`flex items-center justify-center transition-all ${
                    isShrunk ? "w-12 h-12 p-0 text-2xl" : "px-5 py-2 w-36 text-lg"
                  } rounded-sm border duration-300 ease-in-out
                  ${
                    isActive
                      ? "bg-black text-white border-t-2 border-l-2 border-white shadow-lg shadow-gray-900/50 scale-105"
                      : "bg-white text-black border-b-2 border-r-2 border-black translate-x-8 hover:bg-black hover:text-white hover:border-white hover:translate-x-0"
                  }
                  active:scale-95`}
                >
                  {/* ✅ Clean cloneElement without TS error */}
                  {React.cloneElement(item.icon, { size: 24 })}
                  {!isShrunk && <p className="ml-3">{item.label}</p>}
                </span>
              </Link>
            </li>
          );
        })}

        {/* Sign In Button (Only if NOT authenticated) */}
        {!isAuthenticated && (
          <li className="mt-4 text-right">
            <button
              onClick={() => setIsAuthenticated(true)}
              className={`flex items-center justify-center transition-all ${
                isShrunk ? "w-12 h-12 p-0 text-2xl" : "px-5 py-2 w-36 text-lg"
              } rounded-sm border duration-300 ease-in-out
              bg-black text-white border-t-2 border-l-2 border-white shadow-lg shadow-gray-900/50 scale-105
              hover:bg-white hover:text-black hover:border-black active:scale-95`}
            >
              <FaUserCircle size={24} />
              {!isShrunk && <p className="ml-3">Sign In</p>}
            </button>
          </li>
        )}
      </ul>

      <style jsx>{`
        @keyframes blink {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.5; }
        }

        .animate-blink {
          animation: blink 2s ease-in-out 4;
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
