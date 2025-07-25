"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#393e42]/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo and Name */}
          <div className="flex items-center space-x-2">
            <Image
              src="/logo/logo1.png"
              alt="Xanitus Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <Image
              src="/logo/name2.png"
              alt="Xanitus Name"
              width={120}
              height={30}
              className="object-contain"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-white hover:text-[#a0ff4a] transition-colors font-medium"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Button */}
          <div className="hidden md:block">
            <Link
              href="#booking"
              className="bg-[#a0ff4a] text-black px-4 py-2 rounded-md font-medium hover:bg-[#8ce042] transition-colors"
            >
              Book a Call
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block text-white hover:text-[#a0ff4a] transition-colors font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="#booking"
              className="block bg-[#a0ff4a] text-black px-4 py-2 rounded-md font-medium hover:bg-[#8ce042] transition-colors w-full text-center mt-4"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Call
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
