"use client";

import Link from "next/link";
import logo from "../../../../public/home/commonImg/logo.png"
import Image from "next/image";

const Navbar = () => {
  const navItems = [
    {
      id: 1,
      name: "Layanan",
      path: "/layanan",
    },
    {
      id: 2,
      name: "Venue",
      path: "/venue",
    },
    {
      id: 3,
      name: "Dresses",
      path: "/dresses",
    },
    {
      id: 4,
      name: "Contact",
      path: "/contact",
    },
  ];

  return (
    <nav className="border-b bg-white px-4 py-4 shadow-sm">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-sky-500">
          <Image className="w-12.5 rounded-2xl" src={logo}/>
        </Link>

        {/* Menu */}
        <ul className="order-3 flex w-full items-center justify-center gap-6 text-sm font-medium md:order-2 md:w-auto">
          {navItems.map((item) => (
            <li key={item.id}>
              <Link
                href={item.path}
                className="transition-all duration-300 text-[#FF477E] hover:text-[#fac7d6]"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Buttons */}
        <div className="order-2 flex items-center gap-3 md:order-3">
          <Link
            href="/register"
            className="rounded-full border border-[#fac7d6] px-4 py-2 text-sm font-medium text-[#FF477E] transition-all duration-300 hover:bg-[#fac7d6] hover:text-white"
          >
            Daftar
          </Link>

          <Link
            href="/login"
            className="rounded-full bg-[#FF477E] px-4 py-2 text-sm font-medium text-white transition-all duration-300 hover:bg-[#fac7d6] hover:text-[#FF477E]"
          >
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar