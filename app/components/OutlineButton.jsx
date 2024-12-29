"use client";

import Link from "next/link";

const OutlineButton = ({ link, text }) => {
  return (
    <Link
      href={link}
      className="text-white uppercase border-2 hover:bg-white hover:text-black font-medium rounded text-sm px-7 py-3 text-center mr-2 mb-2 transition-all duration-300 ease-in-out"
    >
      {text}
    </Link>
  );
};

export default OutlineButton;
