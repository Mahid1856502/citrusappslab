import React from "react";
import Image from "next/image";
import IMAGES from "@/assets/images";
import { FaFacebook, FaPhone } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const Footer = () => {
  return (
    <div>
      <div className="contact-attachement relative before:opacity-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gen-p">
          <div className="text-left py-32 relative">
            <h2 className="text-3xl text-orange-400 mb-5">Contact</h2>
            <h2 className="text-5xl text-white font-bold mb-5">
              Discover how we can help{" "}
            </h2>
            <p className="text-white">
              The opportunity to discuss your specific pain points and
              objectives in detail. During this no-obligation consultation,
              we’ll take the time to understand your goals and tailor a strategy
              that aligns with your business needs.
            </p>
            <button className="bg-gradient-to-b from-orange-400 to-amber-700 text-white px-10 py-3 rounded-lg font-semibold mt-8">
              Book a Call
            </button>
          </div>
        </div>
      </div>
      <div className="footer bg-black gen-p text-white">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 pb-8 pt-14 border-b border-white">
          <div className="logo mb-5">
            <div className="">
              <Image
                src={IMAGES.LOGO_LIGHT}
                className="w-full max-w-56"
                alt=""
              />
            </div>
          </div>
          <div className="border-b border-white lg:border-b-0 mb-5">
            <h2 className="text-2xl mb-6">Navigation</h2>
            <ul className="">
              <li className="mb-1">
                <Link
                  href=""
                  className="hover:text-yellow-600 hover:transition transition"
                >
                  Home
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href=""
                  className="hover:text-yellow-600 hover:transition transition"
                >
                  Case Studies
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href=""
                  className="hover:text-yellow-600 hover:transition transition"
                >
                  Our Story
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href=""
                  className="hover:text-yellow-600 hover:transition transition"
                >
                  Product Development
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href=""
                  className="hover:text-yellow-600 hover:transition transition"
                >
                  How we work
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href=""
                  className="hover:text-yellow-600 hover:transition transition"
                >
                  Blog
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href=""
                  className="hover:text-yellow-600 hover:transition transition"
                >
                  Provacy Policy
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href=""
                  className="hover:text-yellow-600 hover:transition transition"
                >
                  Tterms & Conditions
                </Link>
              </li>
              <li className="mb-1">
                <Link
                  href=""
                  className="hover:text-yellow-600 hover:transition transition"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="border-b border-white md:border-b-0 mb-5">
            <h2 className="text-2xl mb-6">Navigation</h2>
            <ul className="">
              <li className="hover:text-yellow-600 hover:transition transition mb-1 flex gap-4 items-center">
                <FaPhone   color="#f7941e"/>+44 1223 782 686
              </li>
              <li className="hover:text-yellow-600 hover:transition transition mb-1 flex gap-4 items-center">
                <MdEmail  color="#f7941e"/>info@netnexus.co.uk
              </li>
              <li className="mb-1">
                <Link
                  href=""
                  className="hover:text-yellow-600 hover:transition transition flex gap-4 items-center"
                >
                  <FaLocationDot size={24} color="#f7941e"/>Future Business Centre, Guildhall, Market Square, Cambridge,
                  CB2 3QJ
                </Link>
              </li>
            </ul>
          </div>
          <div className=" mb-5">
            <h2 className="text-2xl mb-6">Social Media</h2>
            <div className="flex gap-4">
              <Link href="https://web.facebook.com/profile.php?id=61564952752878&_rdc=1&_rdr"><FaFacebook color="#f7941e"/></Link>
              <Link href="https://www.instagram.com/citrusappslab"><FaInstagram color="#f7941e"/></Link>
              <Link href="https://www.linkedin.com/company/citrus-apps-lab/"><FaLinkedin color="#f7941e"/></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
