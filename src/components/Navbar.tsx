"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Careers", href: "/careers" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className={`fixed top-0 z-[100] w-full transition-all duration-500 ${
        scrolled ? "py-2" : "py-6"
      }`}
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
        <div
          className={`glass flex items-center justify-between rounded-[2rem] px-8 py-3 transition-all duration-500 ${
            scrolled ? "bg-black/60 shadow-[0_0_80px_rgba(0,0,0,0.5)] border-white/10" : "bg-transparent border-transparent"
          }`}
        >
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-xl font-black tracking-tighter text-white group flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-xl glass border border-white/10 group-hover:border-primary/50 transition-all">
                <img src="/logo.png" alt="AHMC Logo" className="h-full w-full object-cover" />
              </div>
              <span className="tracking-[-0.1em]">AHMC <span className="text-[10px] font-bold text-slate-500 tracking-wider">SOLUTION</span></span>
            </Link>
          </div>


          {/* Desktop Nav */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-12">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i }}
                >
                  <Link
                    href={link.href}
                    className="relative text-[11px] font-black uppercase tracking-[0.2em] text-slate-400 transition-all hover:text-white group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link href="/project-hub">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative bg-white px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest text-black shadow-xl"
              >
                Project Hub
              </motion.button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-400 hover:bg-white/10 hover:text-white transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 w-full"
          >
            <div className="mx-4 mt-2 glass overflow-hidden rounded-2xl bg-[#08080c]/90 p-4 shadow-2xl">
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-slate-300 hover:bg-primary/10 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
                <div className="pt-4">
                  <button className="w-full bg-primary hover:bg-primary-hover rounded-xl py-4 font-bold text-white transition-all shadow-lg shadow-primary/20">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
