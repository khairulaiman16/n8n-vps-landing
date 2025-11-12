import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeIn } from "../utils/motionVariants";

const logoPath = "/src/assets/images/logo.png";
const placeholder = "https://placehold.co/40x40?text=GB";

const ImgWithFallback: React.FC<{ src: string; alt?: string; className?: string }> = ({
  src,
  alt,
  className,
}) => {
  return (
    <img
      src={src}
      alt={alt || "logo"}
      className={className}
      onError={(e) => {
        (e.currentTarget as HTMLImageElement).src = placeholder;
      }}
    />
  );
};

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { href: "#story", label: "About" },
    { href: "#highlights", label: "Highlights" },
    { href: "#flow", label: "How it works" },
    { href: "#usecases", label: "Use Cases" },
  ];

  return (
    <>
      {/* HEADER */}
      <motion.header
        className="fixed inset-x-0 top-0 z-50 backdrop-blur-sm bg-white/70 border-b border-gray-100"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <ImgWithFallback src={logoPath} className="w-9 h-9 rounded-md" />
            <span className="font-semibold text-slate-900">n8n VPS</span>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm text-slate-600">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="hover:text-slate-900 transition"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#cta"
              className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition"
            >
              Get Started
            </a>
          </div>

          {/* Burger Button */}
          <div className="md:hidden">
            <button
              aria-label="open menu"
              onClick={toggleMenu}
              className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              {!isOpen ? (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-slate-700"
                >
                  <path
                    d="M4 6h16M4 12h16M4 18h16"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              ) : (
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-slate-700"
                >
                  <path
                    d="M6 6L18 18M6 18L18 6"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </motion.header>

      {/* MOBILE MENU OVERLAY */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Semi-transparent background */}
            <motion.div
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu}
            />

            {/* Slide-down menu */}
            <motion.nav
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -30, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="fixed top-16 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm md:hidden"
            >
              <div className="flex flex-col items-center gap-4 py-6 text-slate-700 font-medium">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={closeMenu}
                    className="hover:text-indigo-600 transition"
                  >
                    {link.label}
                  </a>
                ))}

                <a
                  href="#cta"
                  onClick={closeMenu}
                  className="px-5 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition"
                >
                  Get Started
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
