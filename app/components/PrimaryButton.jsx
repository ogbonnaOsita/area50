"use client";

import Link from "next/link";

const PrimaryButton = ({ link, text }) => {
  return (
    <Link
      href={link}
      className="text-white uppercase bg-gradient-to-r from-primary-main via-primary-darker to-primary-dark hover:bg-gradient-to-br font-medium rounded text-xs md:text-sm px-7 py-3 text-center mr-2 mb-2 transition-all duration-300 ease-in-out"
    >
      {text}
    </Link>
  );
};

export default PrimaryButton;
