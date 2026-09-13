"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 bg-paper-white px-6 py-3 rounded-full flex items-center justify-between gap-8 border border-ink-black/10 w-[90%] md:w-auto max-w-md shadow-sm">
        <div className="flex items-center gap-1 group cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          {/* Dot Cluster Logo */}
          <div className="grid grid-cols-3 gap-0.5 w-[18px] h-[18px] group-hover:rotate-90 transition-transform duration-700 ease-in-out">
            {[...Array(9)].map((_, i) => (
              <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === 4 ? 'bg-transparent' : 'bg-ink-black'} group-hover:scale-90 transition-transform duration-500`} />
            ))}
          </div>
        </div>
        
        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-[15px] font-medium text-stone">
          <a href="#portfolio" className="hover:text-ink-black transition-colors duration-300">Projects</a>
          <a href="#process" className="hover:text-ink-black transition-colors duration-300">Process</a>
          <a href="#contact" className="hover:text-ink-black transition-colors duration-300">Contact</a>
        </div>

        {/* Mobile Burger Toggle */}
        <button 
          className="md:hidden flex flex-col justify-center items-center gap-1 w-6 h-6"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className={`block w-5 h-0.5 bg-ink-black transition-transform ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block w-5 h-0.5 bg-ink-black transition-opacity ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-5 h-0.5 bg-ink-black transition-transform ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-linen-canvas/95 backdrop-blur-md flex flex-col items-center justify-center gap-8 md:hidden"
          >
            <a href="#portfolio" onClick={() => setIsOpen(false)} className="text-3xl font-light text-ink-black">Projects</a>
            <a href="#process" onClick={() => setIsOpen(false)} className="text-3xl font-light text-ink-black">Process</a>
            <a href="#contact" onClick={() => setIsOpen(false)} className="text-3xl font-light text-ink-black">Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
