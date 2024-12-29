"use client";

import React, { useState, useEffect, useRef } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import PrimaryButton from "../components/PrimaryButton";
import Link from "next/link";

const Navbar = ({ openModal }) => {
  const [nav, setNav] = useState(false);
  const [activeSection, setActiveSection] = useState("#showcase"); // Track active section
  const menuRef = useRef(null);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      setNav(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Array containing navigation items
  const navItems = [
    { id: 1, text: "Home", link: "#showcase" },
    { id: 2, text: "About", link: "#about" },
    { id: 3, text: "Services", link: "#services" },
    { id: 4, text: "Projects", link: "#projects" },
    { id: 5, text: "Contact", link: "#contact" },
  ];

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.link.replace("#", ""));
      let currentSection = "";

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            currentSection = `#${section}`;
            break;
          }
        }
      }

      if (currentSection && currentSection !== activeSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection, navItems]);

  return (
    <div className="bg-black sticky top-0 z-50">
      <div className="container flex justify-between items-center h-24 mx-auto px-4 text-white">
        <div className="flex items-center gap-2">
          <Link href="#showcase">
            <img
              src="./logo-full.png"
              className="w-[150px] md:w-[180px]"
              alt="Logo"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex uppercase font-medium space-x-6">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer duration-300 hover:text-primary-main ${
                activeSection === item.link ? "text-primary-main" : ""
              }`}
            >
              <Link href={item.link}>{item.text}</Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <button
            onClick={openModal}
            className="text-white uppercase bg-gradient-to-r from-primary-main via-primary-darker to-primary-dark hover:bg-gradient-to-br font-medium rounded text-xs md:text-sm px-7 py-3 text-center mr-2 mb-2 transition-all duration-300 ease-in-out"
          >
            Start a project
          </button>

          {/* Mobile Navigation Icon */}
          <div
            onClick={handleNav}
            className="block md:hidden cursor-pointer text-white"
          >
            {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        ref={menuRef}
        className={`fixed top-0 right-0 w-[75%] h-full bg-[#000300] pt-10 px-4 text-white transition-transform duration-500 ${
          nav ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        {/* Mobile Navigation Items */}
        <div onClick={handleNav} className="cursor-pointer text-white mb-2 p-2">
          {<AiOutlineClose size={20} className="ml-auto" />}
        </div>
        {navItems.map((item) => (
          <li
            key={item.id}
            onClick={handleNav}
            className={`p-4 border-b hover:bg-primary-main duration-300 hover:text-black cursor-pointer border-primary-dark ${
              activeSection === item.link ? "bg-primary-main text-black" : ""
            }`}
          >
            <Link href={item.link}>{item.text}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
