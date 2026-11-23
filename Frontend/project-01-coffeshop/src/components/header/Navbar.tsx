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
            href="#Home"
            className="text-navbar-link hover:bg-navbar-link-bg-hover hover:text-navbar-link-hover flex items-center justify-center hover:w-15 hover:rounded-xl"
          >
            Home
          </a>
          <a
            href="#Menu"
            className="text-navbar-link hover:bg-navbar-link-bg-hover hover:text-navbar-link-hover flex items-center justify-center hover:w-15 hover:rounded-xl"
          >
            Menu
          </a>
          <a
            href="#About"
            className="text-navbar-link hover:bg-navbar-link-bg-hover hover:text-navbar-link-hover flex items-center justify-center hover:w-15 hover:rounded-xl"
          >
            About
          </a>
          <a
            href="#Contact"
            className="text-navbar-link hover:bg-navbar-link-bg-hover hover:text-navbar-link-hover flex items-center justify-center hover:w-15 hover:rounded-xl"
          >
            Contact
          </a>
        </nav>

        <button className="text-navbar-button hover:bg-navbar-button-hover hover:text-navbar-button-text hidden hover:w-25 hover:rounded-md md:mr-4">
          Order Now
        </button>

        {/* Hambuger */}
        <button
          className="text-navbar-link mr-5 text-3xl md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "X" : "☰"}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="bg-navbar-bg border-navbar-link absolute top-full left-0 z-10 flex w-full flex-col gap-4 border-t-2 p-5 md:hidden">
            <a
              href="#Home"
              className="text-navbar-link hover:bg-navbar-link-bg-hover hover:text-navbar-link-hover flex items-center hover:w-15 hover:justify-center hover:rounded-xl"
            >
              Home
            </a>
            <a
              href="#Menu"
              className="text-navbar-link hover:bg-navbar-link-bg-hover hover:text-navbar-link-hover flex items-center hover:w-15 hover:justify-center hover:rounded-xl"
            >
              Menu
            </a>
            <a
              href="#About"
              className="text-navbar-link hover:bg-navbar-link-bg-hover hover:text-navbar-link-hover flex items-center hover:w-15 hover:justify-center hover:rounded-xl"
            >
              About
            </a>
            <a
              href="#Contact"
              className="text-navbar-link hover:bg-navbar-link-bg-hover hover:text-navbar-link-hover flex items-center hover:w-15 hover:justify-center hover:rounded-xl"
            >
              Contact
            </a>

            <button className="text-navbar-button hover:bg-navbar-button-hover hover:text-navbar-button-text h-10 rounded-md border-2 hover:rounded-md">
              Order Now
            </button>
          </nav>
        )}
      </header>
    </>
  );
}
