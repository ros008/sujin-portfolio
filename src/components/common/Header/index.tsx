"use client";
import React, { useEffect, useRef, useState } from "react";

const Header = () => {
  const [showHeader, setShowHeader] = useState(true);
  const prevScrollPos = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      if (currentScrollPos > 100 && currentScrollPos > prevScrollPos.current) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }

      prevScrollPos.current = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 w-full bg-blue-600 text-white text-center p-4 transition-transform duration-300 ${
        showHeader ? "transform translate-y-0" : "transform -translate-y-full"
      }`}
    >
      <h1 className="text-xl">SUJIN KIM</h1>
    </header>
  );
};

export default Header;
