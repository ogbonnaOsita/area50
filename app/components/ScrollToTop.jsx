"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 10) {
      // Adjust the value as needed
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => {
      window.removeEventListener("scroll", toggleVisible);
    };
  }, []);

  return (
    <button
      onClick={scrollToTop}
      style={{ display: visible ? "block" : "none" }}
      className="m-5 bg-primary-main text-primary-darker hover:text-white p-3 transition-all ease-in-out hover:bg-primary-dark duration-200 rounded animate-bounce fixed ml-auto bottom-0 right-0 z-50"
    >
      <FaArrowUp />
    </button>
  );
};

export default ScrollToTop;
