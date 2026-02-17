"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-gradient-to-r from-purple-600/90 via-pink-500/90 to-orange-500/90 shadow-lg">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="text-2xl font-bold text-white transition-transform duration-300 group-hover:scale-110">
              📚 BookStore
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-white hover:text-yellow-200 transition-colors duration-200 font-medium"
            >
              Home
            </Link>
            <Link
              href="/dashboard"
              className="text-white hover:text-yellow-200 transition-colors duration-200 font-medium"
            >
              Dashboard
            </Link>
            <Link
              href="/categories"
              className="text-white hover:text-yellow-200 transition-colors duration-200 font-medium"
            >
              Categories
            </Link>
            <Link
              href="/about"
              className="text-white hover:text-yellow-200 transition-colors duration-200 font-medium"
            >
              About
            </Link>
          </div>

          {/* Right side icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              className="p-2 text-white hover:bg-white/20 rounded-full transition-all duration-200 hover:scale-110"
              aria-label="Search"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
            <button
              className="relative p-2 text-white hover:bg-white/20 rounded-full transition-all duration-200 hover:scale-110"
              aria-label="Shopping cart"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="absolute -top-1 -right-1 bg-yellow-400 text-purple-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                3
              </span>
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-white hover:bg-white/20 rounded-lg transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 space-y-3 animate-fade-in">
            <Link
              href="/"
              className="block px-4 py-2 text-white hover:bg-white/20 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/dashboard"
              className="block px-4 py-2 text-white hover:bg-white/20 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              href="/categories"
              className="block px-4 py-2 text-white hover:bg-white/20 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Categories
            </Link>
            <Link
              href="/about"
              className="block px-4 py-2 text-white hover:bg-white/20 rounded-lg transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <div className="flex items-center justify-around pt-2 border-t border-white/20">
              <button
                className="p-2 text-white hover:bg-white/20 rounded-full transition-all"
                aria-label="Search"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
              <button
                className="relative p-2 text-white hover:bg-white/20 rounded-full transition-all"
                aria-label="Shopping cart"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="absolute -top-1 -right-1 bg-yellow-400 text-purple-900 text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                  3
                </span>
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
