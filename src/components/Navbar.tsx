'use client'

import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brandBg/80 backdrop-blur-md border-b border-brandCard/50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link
          href="/"
          className="text-white text-xl font-bold tracking-tight bg-gradient-to-r from-brandPrimary to-brandSecondary bg-clip-text text-transparent"
        >
          Movax <span className="text-brandTextMain">.Technologies</span>
        </Link>

        <div className="hidden md:flex items-center space-x-8 text-sm font-semibold">
          <Link href="/about" className="text-brandTextMuted hover:text-brandTextMain transition-colors duration-300">
            Our Vision
          </Link>
          <Link href="/services" className="text-white hover:text-brandTextMuted transition-colors duration-300">
            Services
          </Link>
          <Link
            href="/contact"
            className="bg-gradient-to-r from-brandPrimary to-brandSecondary text-brandBg px-5 py-2 rounded-full font-bold shadow-md hover:opacity-90 transition duration-300"
          >
            Work With Us
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-brandTextMain focus:outline-none"
          aria-label="Toggle Menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-brandCard/50 flex flex-col text-center space-y-4">
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="block text-brandTextMuted hover:text-brandTextMain transition-colors duration-300"
          >
            Our Vision
          </Link>
          <Link
            href="/services"
            onClick={() => setIsOpen(false)}
            className="block text-white hover:text-brandTextMuted transition-colors duration-300"
          >
            Services
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block bg-gradient-to-r from-brandPrimary to-brandSecondary text-brandBg px-5 py-2 rounded-full font-bold shadow-md transition duration-300"
          >
            Work With Us
          </Link>
        </div>
      )}
    </nav>
  );
}