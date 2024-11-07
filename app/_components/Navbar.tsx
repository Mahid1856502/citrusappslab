"use client";
import IMAGES from "@/assets/images";
import { useTheme } from "@/context/themeContext";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { BsMoonStars, BsSun } from "react-icons/bs";
import { FaBars, FaCalendarAlt, FaTimes } from "react-icons/fa";
import { TiArrowSortedDown } from "react-icons/ti";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(""); // New state for dropdown

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

  const pathname = usePathname();
  console.log("pathname", pathname);

  return (
    <nav
      className={`fixed w-full top-0 z-10 px-4 md:px-10 lg:px-24 py-4 flex items-center justify-between transition-colors duration-300 ${theme} ${
        scrolled || pathname !== "/"
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
      <Link href="/" className="flex justify-center md:justify-start">
        <Image
          src={
            (scrolled && theme === "theme-light") ||
            (pathname !== "/" && theme === "theme-light")
              ? IMAGES.LOGO
              : IMAGES.LOGO_LIGHT
          }
          alt="logo"
          className="w-16 h-16"
        />
      </Link>

      {/* Desktop Navigation Links */}
      <div
        className={`hidden md:flex items-center justify-end space-x-8 flex-1`}
      >
        {/* About Us with Dropdown */}
        <div
          className="relative"
          onMouseEnter={() => setDropdownOpen("about")}
          onMouseLeave={() => setDropdownOpen("")}
        >
          <button
            className={`hover:text-primary transition-transform duration-300 hover:scale-125 font-semibold flex items-center ${
              scrolled || pathname !== "/" ? "text-heading" : "text-white"
            }`}
          >
            About Us <TiArrowSortedDown className="ml-1" size={18} />
          </button>
          {dropdownOpen === "about" && (
            <div className="absolute left-0 bg-white shadow-md rounded-lg p-2">
              <Link
                href="/about/our-story"
                className="block p-4 rounded-md py-2 text-nowrap text-black hover:text-white hover:bg-primary"
              >
                Our Story
              </Link>
              <Link
                href="/about/mission"
                className="block p-4 rounded-md py-2 text-nowrap text-black hover:text-white hover:bg-primary"
              >
                How We Work
              </Link>
            </div>
          )}
        </div>

        <div
          className="relative"
          onMouseEnter={() => setDropdownOpen("process")}
          onMouseLeave={() => setDropdownOpen("")}
        >
          <button
            className={`hover:text-primary transition-transform duration-300 hover:scale-125 font-semibold flex items-center ${
              scrolled || pathname !== "/" ? "text-heading" : "text-white"
            }`}
          >
            Processes <TiArrowSortedDown className="ml-1" size={18} />
          </button>
          {dropdownOpen === "process" && (
            <div className="absolute left-0 bg-white shadow-md rounded-lg p-2">
              <Link
                href="/about/our-team"
                className="block p-4 rounded-md py-2 text-nowrap text-black hover:text-white hover:bg-primary"
              >
                Product Development{" "}
              </Link>
              <Link
                href="/about/mission"
                className="block p-4 rounded-md py-2 text-nowrap text-black hover:text-white hover:bg-primary"
              >
                Cyber Security
              </Link>
            </div>
          )}
        </div>

        <Link
          href={"/case-studies"}
          className={`hover:text-primary transition-transform duration-300 hover:scale-125 font-semibold ${
            scrolled || pathname !== "/" ? "text-heading" : "text-white"
          }`}
        >
          Case Studies
        </Link>
        <Link
          href={"/blogs"}
          className={`hover:text-primary transition-transform duration-300 hover:scale-125 font-semibold ${
            scrolled || pathname !== "/" ? "text-heading" : "text-white"
          }`}
        >
          Blog
        </Link>
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
  );
};

export default Navbar;
