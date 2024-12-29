"use client";

import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font bg-black border-t border-t-primary-dark">
      <div className="container px-5 py-8 mx-auto flex items-center md:justify-between sm:flex-row flex-col">
        <Link
          href="#showcase"
          className=" title-font font-medium text-gray-900"
        >
          <img src="/logo-full.png" className="w-40" alt="" />
        </Link>
        <p className="text-sm text-gray-500 sm:py-2 sm:mt-0 mt-4">
          &copy; {new Date().getFullYear()} Area50 — All rights reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;
