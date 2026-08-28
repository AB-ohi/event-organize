"use client";

import { useState, useEffect, useRef } from "react";
import logo from "../../../../public/home/commonImg/logo.png";
import Image from "next/image";
import { Menu, X } from "lucide-react"; 
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const lastScrollY = useRef(0);

const navItems = [
  { id: 1, name: "Services", target: "services" },
  { id: 2, name: "Venue", target: "venue" },
  { id: 3, name: "Dresses", target: "dresses" },
  { id: 4, name: "Contact", target: "contact" },
]

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // top e thakle always dekhabe
      if (currentScrollY < 50) {
        setShowNav(true);
      } else if (currentScrollY > lastScrollY.current) {
        // scroll down -> hide
        setShowNav(false);
      } else {
        // scroll up -> show
        setShowNav(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
const handleScrollTo = (targetId) => {
    setIsOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const yOffset = -80; 
      const y =
        element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 border-b bg-white px-4 py-4 shadow-sm transition-transform duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-2xl font-bold text-sky-500"
        >
          <Image className="w-12.5 rounded-2xl" src={logo} alt="logo" />
        </button>

        {/* Hamburger button - mobile only */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="order-2 md:hidden text-[#FF477E]"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>

        {/* Menu */}
        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } order-4 w-full flex-col items-center gap-4 text-sm font-medium md:order-2 md:flex md:w-auto md:flex-row md:gap-6`}
        >
          {navItems.map((item) => (
            <li key={item.id}>
              <ScrollLink
               to={item.to}
                onClick={() => handleScrollTo(item.target)}
                className="transition-all duration-300 text-[#000000] hover:text-[#FF477E]"
              >
                {item.name}
              </ScrollLink>
            </li>
          ))}
           {/* Buttons */}
        <div className="order-3 flex items-center gap-3 md:order-3">
          <ScrollLink
            href="/register"
            className="rounded-full border border-[#fac7d6] px-4 py-2 text-sm font-medium text-[#FF477E] transition-all duration-300 hover:bg-[#fac7d6] hover:text-white"
          >
            Daftar
          </ScrollLink>

          <Link
           href="/login"
            className="rounded-full bg-[#FF477E] px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-[#fac7d6] hover:text-[#FF477E]"
          >
            Login
          </Link>
        </div>
        </ul>

       
      </div>
    </nav>
  );
};

export default Navbar;