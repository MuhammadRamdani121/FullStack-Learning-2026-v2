import { useState } from "react";
import Logo from "../../assets/Logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {/* Desktop */}
      <header className="bg-navbar-bg relative flex items-center justify-between border">
        <img className="h-15 w-15 rounded-full" src={Logo} alt="Logo" />

        <nav className="hidden gap-2 md:ml-30 md:flex">
          <a
            href=""
            className="text-navbar-link hover:bg-navbar-link-bg-hover hover:text-navbar-link-hover flex items-center justify-center hover:w-15 hover:rounded-xl"
          >
            Home
          </a>
          <a
            href=""
            className="text-navbar-link hover:bg-navbar-link-bg-hover hover:text-navbar-link-hover flex items-center justify-center hover:w-15 hover:rounded-xl"
          >
            Menu
          </a>
          <a
            href=""
            className="text-navbar-link hover:bg-navbar-link-bg-hover hover:text-navbar-link-hover flex items-center justify-center hover:w-15 hover:rounded-xl"
          >
            About
          </a>
          <a
            href=""
            className="text-navbar-link hover:bg-navbar-link-bg-hover hover:text-navbar-link-hover flex items-center justify-center hover:w-15 hover:rounded-xl"
          >
            Contact
          </a>
        </nav>

        <button className="text-navbar-button hover:bg-navbar-button-hover hover:text-navbar-button-text hover:w-25 hover:rounded-md md:mr-4">
          Order Now
        </button>

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
