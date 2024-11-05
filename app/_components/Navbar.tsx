"use client";
import IMAGES from "@/assets/images";
import { useTheme } from "@/context/themeContext";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { FaBars, FaCalendarAlt, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const heroSectionHeight = 100;
      setScrolled(window.scrollY > heroSectionHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${theme}`}>
      <nav
        className={`fixed w-full z-10 px-4 md:px-10 lg:px-24 py-4 flex items-center justify-between transition-colors duration-300 ${
          scrolled
            ? "bg-background shadow-lg border-b border-b-neutral-500"
            : "bg-transparent"
        }`}
      >
        <div className="flex bg-primary-gradient md:hidden items-center rounded-md">
          <button onClick={toggleMenu} className="text-white p-2">
            {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Logo Section */}
        <div className="flex justify-center md:justify-start">
          <Image
            src={
              scrolled && theme === "theme-light"
                ? IMAGES.LOGO
                : IMAGES.LOGO_LIGHT
            }
            alt="logo"
            className="w-16 h-16"
          />
        </div>

        {/* Desktop Navigation Links */}
        <div
          className={`hidden md:flex items-center justify-end space-x-8 flex-1`}
        >
          <button
            className={`hover:text-primary transition-transform duration-300 hover:scale-125 ${
              scrolled ? "text-heading" : "text-white"
            }`}
          >
            About Us
          </button>
          <button
            className={`hover:text-primary transition-transform duration-300 hover:scale-125 ${
              scrolled ? "text-heading" : "text-white"
            }`}
          >
            Processes
          </button>
          <button
            className={`hover:text-primary transition-transform duration-300 hover:scale-125 ${
              scrolled ? "text-heading" : "text-white"
            }`}
          >
            Case Studies
          </button>
          <button
            className={`hover:text-primary transition-transform duration-300 hover:scale-125 ${
              scrolled ? "text-heading" : "text-white"
            }`}
          >
            Blog
          </button>
          {theme === "theme-light" ? (
            <BsSun
              className="cursor-pointer"
              color="#f7941e"
              size={24}
              onClick={() => toggleTheme()}
            />
          ) : (
            <BsMoonStars
              className="cursor-pointer"
              color="#f7941e"
              size={24}
              onClick={() => toggleTheme()}
            />
          )}
          <button className="bg-primary-gradient text-white px-8 py-2 rounded-lg">
            Book Call
          </button>
        </div>

        {/* Mobile Hamburger and Calendar Icon */}
        <div className="flex bg-primary-gradient md:hidden items-center rounded-md">
          <button className="text-white p-2">
            <FaCalendarAlt size={24} />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`absolute top-0 h-screen left-0 w-full bg-background p-4 flex flex-col items-start space-y-4 text-lg md:hidden transition-transform duration-300 ease-in-out ${
            menuOpen ? "transform translate-x-0" : "transform -translate-x-full"
          }`}
        >
          <div className="flex justify-between items-center w-full border-b border-neutral-500 pb-4">
            <div className="flex bg-primary-gradient rounded-md">
              <button onClick={toggleMenu} className="text-white p-2">
                <FaTimes size={24} />
              </button>
            </div>
            {theme === "theme-light" ? (
              <BsSun
                className="cursor-pointer"
                color="#f7941e"
                size={24}
                onClick={() => toggleTheme()}
              />
            ) : (
              <BsMoonStars
                className="cursor-pointer"
                color="#f7941e"
                size={24}
                onClick={() => toggleTheme()}
              />
            )}
          </div>
          <button
            onClick={toggleMenu}
            className="text-heading hover:text-primary"
          >
            About Us
          </button>
          <button
            onClick={toggleMenu}
            className="text-heading hover:text-primary"
          >
            Processes
          </button>
          <button
            onClick={toggleMenu}
            className="text-heading hover:text-primary"
          >
            Case Studies
          </button>
          <button
            onClick={toggleMenu}
            className="text-heading hover:text-primary"
          >
            Blog
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
