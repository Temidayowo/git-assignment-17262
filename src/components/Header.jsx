"use client";

import { Menu, X } from "lucide-react";
import { useState } from "react";

const Header = () => {  
    const [isOpen, setIsOpen] = useState(false);

    const links = [
        { name: "Projects", href: "#projects" },
        {name: "Services", href: "#services"},
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" },
    ];
  return (
    <header className="bg-[#0d0f14] w-full py-5 px-8 md:px-20 lg:px-36 xl:px-56 flex items-center justify-between border-b border-[#222633] fixed top-0 z-50">
      <h1 className="font-syne text-white font-extrabold text-xl lg:text-2xl">
        DEV<span className="text-[#22c55e]">.</span>
      </h1>

      {/* navigation links */}
      <nav className="hidden md:block">
        <ul className="flex space-x-6 font-dm-sans font-medium">
          {links.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="text-white hover:text-[#22c55e] transition-colors duration-300 nav-link"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* desktop cta  */}
      <button className="hidden md:block bg-[#1a1b20] hover:bg-[#1a1e28] px-6 rounded-full py-3 text-white text-sm transition-colors duration-300 border border-[#222633] font-dm-sans font-medium">
        Let&apos;s Talk
      </button>

        {/* mobile menu toggle */}
      <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <X /> : <Menu />}
      </button>

      {/* mobile menu */}
      {isOpen && (
        <div className="absolute left-0 top-17 w-full bg-[#0d0f14] py-4 px-8 md:hidden border-b border-[#222633] ">
          <ul className="flex flex-col space-y-4 font-dm-sans font-medium">
            {links.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-white hover:text-[#22c55e] transition-colors duration-300 nav-link"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <button className="mt-4 w-full bg-[#1a1b20] hover:bg-[#1a1e28] px-6 rounded-full py-3 text-white text-sm transition-colors duration-300  border border-[#222633] font-dm-sans font-medium">
            Let&apos;s Talk
          </button>
        </div>
      )}

    </header>
  );
};

export default Header;
