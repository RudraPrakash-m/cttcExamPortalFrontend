import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  SignInButton,
  SignedOut,
  SignedIn,
  UserButton,
} from "@clerk/clerk-react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-[#0f1b3a] text-white border-b border-blue-700/50 h-[60px] z-50">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* LEFT - LOGO */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="text-2xl font-bold tracking-wide bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent"
        >
          CTTC
        </motion.h1>

        {/* CENTER - NAV LINKS (Desktop) */}
        <ul className="hidden md:flex gap-8 text-lg">
          {navLinks.map((link, i) => (
            <motion.li
              key={link.name}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1, duration: 0.3 }}
              className="relative"
            >
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  `transition-colors ${
                    isActive ? "text-cyan-300" : "text-white"
                  }`
                }
              >
                {link.name}
              </NavLink>
              {navLinks.some((l) => l.path === link.path) && (
                <NavLink to={link.path}>
                  {({ isActive }) =>
                    isActive && (
                      <motion.span
                        layoutId="underline"
                        className="absolute left-0 -bottom-1 h-[2px] bg-cyan-300 w-full"
                      />
                    )
                  }
                </NavLink>
              )}
            </motion.li>
          ))}
        </ul>

        {/* RIGHT - AUTH BUTTONS */}
        <div className="flex items-center gap-3">
          {/* SIGN IN BUTTON */}
          <SignedOut>
            <SignInButton mode="modal">
              <button
                className="
          px-3 py-1.5 
          rounded-lg 
          font-medium text-sm
          bg-gradient-to-r from-blue-500 to-cyan-500
          text-white 
          border border-blue-400/30
          shadow-sm
          transition-all duration-200
          hover:from-blue-600 hover:to-cyan-600
          hover:shadow-md
        "
              >
                Login
              </button>
            </SignInButton>
          </SignedOut>

          {/* USER BUTTON */}
          <SignedIn>
            <UserButton
              appearance={{
                elements: { userButtonAvatarBox: { width: 32, height: 32 } },
              }}
            />
          </SignedIn>

          {/* MOBILE MENU TOGGLE */}
          <button
            className="md:hidden focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <HiX size={24} /> : <HiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#0f1b3a] border-t border-blue-700/50 overflow-hidden"
          >
            <ul className="flex flex-col gap-4 p-4 text-lg">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={({ isActive }) =>
                      `block transition-colors ${
                        isActive ? "text-cyan-300" : "text-white"
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Nav;
