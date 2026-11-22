import { useState } from "react";
import Logo from "../../assets/Logo.png";

import "../../index.css";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Desktop */}
      <header className="relative flex items-center justify-between border bg-red-300">
        <img className="h-15 w-15 rounded-full" src={Logo} alt="Logo" />

        <nav className="hidden gap-2 md:flex">
          <a href="">Home</a>
          <a href="">Menu</a>
          <a href="">About</a>
          <a href="">Contact</a>
        </nav>

        <button className="">Order Now</button>

        {/* Hambuger */}
        <button
          className="text-3xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "X" : "☰"}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="absolute top-full left-0 flex w-full flex-col gap-4 bg-red-300 p-5 md:hidden">
            <a href="/" onClick={() => setIsOpen(false)}>
              Home
            </a>
            <a href="/" onClick={() => setIsOpen(false)}>
              Menu
            </a>
            <a href="/" onClick={() => setIsOpen(false)}>
              About
            </a>
            <a href="/" onClick={() => setIsOpen(false)}>
              Contact
            </a>

            <button className="rounded-lg bg-white px-4 py-2">Order Now</button>
          </nav>
        )}
      </header>
    </>
  );
}
