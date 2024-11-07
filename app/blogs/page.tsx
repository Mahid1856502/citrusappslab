"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import IMAGES from "@/assets/images";
import { useTheme } from "@/context/themeContext";
import { FaCalendarDay } from "react-icons/fa6";
import { GoClock } from "react-icons/go";
import { MdArrowOutward } from "react-icons/md";

const Blogs = () => {
  const { theme } = useTheme();
  const allBlogs = [
    {
      id: 1,
      text_yellow: "A Two-Sided Platform for Buying and Selling Authentic Food",
      heading: "Website and App Development for Online Food Marketplace",
      span_1: "September 16, 2024",
      span_2: "12 min read",
      image: IMAGES.CASE_1,
      type: "Blog",
    },
    {
      id: 2,
      text_yellow: "A Two-Sided Platform for Buying and Selling Authentic Food",
      heading: "Website and App Development for Online Food Marketplace",
      span_1: "September 16, 2024",
      span_2: "12 min read",
      image: IMAGES.CASE_1,
      type: "Blog",
    },
    {
      id: 3,
      text_yellow: "A Two-Sided Platform for Buying and Selling Authentic Food",
      heading: "Website and App Development for Online Food Marketplace",
      span_1: "September 16, 2024",
      span_2: "12 min read",
      image: IMAGES.CASE_1,
      type: "Blog",
    },
    {
      id: 4,
      text_yellow: "A Two-Sided Platform for Buying and Selling Authentic Food",
      heading: "Website and App Development for Online Food Marketplace",
      span_1: "September 16, 2024",
      span_2: "12 min read",
      image: IMAGES.CASE_1,
      type: "Blog",
    },
    {
      id: 5,
      text_yellow: "A Two-Sided Platform for Buying and Selling Authentic Food",
      heading: "Website and App Development for Online Food Marketplace",
      span_1: "September 16, 2024",
      span_2: "12 min read",
      image: IMAGES.CASE_1,
      type: "Blog",
    },
    {
      id: 6,
      text_yellow: "A Two-Sided Platform for Buying and Selling Authentic Food",
      heading: "Website and App Development for Online Food Marketplace",
      span_1: "September 16, 2024",
      span_2: "12 min read",
      image: IMAGES.CASE_1,
      type: "Cybersecurity",
    },
    {
      id: 7,
      text_yellow: "A Two-Sided Platform for Buying and Selling Authentic Food",
      heading: "Website and App Development for Online Food Marketplace",
      span_1: "September 16, 2024",
      span_2: "12 min read",
      image: IMAGES.CASE_1,
      type: "Cybersecurity",
    },
    {
      id: 8,
      text_yellow: "A Two-Sided Platform for Buying and Selling Authentic Food",
      heading: "Website and App Development for Online Food Marketplace",
      span_1: "September 16, 2024",
      span_2: "12 min read",
      image: IMAGES.CASE_1,
      type: "Software and Tools",
    },
  ];

  const [filterType, setFilterType] = useState("All");
  const [page, setPage] = useState(1);

  const filteredCase = allBlogs.filter((item) => {
    if (filterType === "All") return true;
    return item.type == filterType;
  });

  const changePagination = (selectedPage: number) => {
    setPage(selectedPage);
  };

  return (
    <div className={`py-10 bg-background ${theme} pt-36 gen-p`}>
      <div className="text-center mb-5">
        <h1 className="text-3xl md:text-4.5xl font-semibold text-heading mb-1">NetNexus Blog <span>|</span> Tips, Trends & Guides</h1>
        <p className="flex gap-2 justify-center flex-wrap text-heading"><span>Business owners</span> <span>|</span> <span>Software Developers</span> <span>|</span> <span>Software Development Companies</span> <span>|</span> <span>Digital Product Developers</span></p>
      </div>
      <div>
        <div className="md:flex justify-end relative pt-3 pb-9 border-b">
          <Image src={IMAGES.CASE_1} className="rounded-2xl w-full md:w-4/6" alt=""/>
          <div className="absolute bg-black text-white font-medium px-5 py-1.5 rounded-full top-8 right-6">
            Blog
          </div>
          <Link href="" className="md:absolute rounded-2xl shadow-md shadow-lightGray bg-background md:top-10 lg:top-20 left-0 md:w-1/2 p-9">
            <p className="text-xs sm:text-base md:text-xs lg:text-base text-heading pb-2 gap-4 flex items-center">
              <div className="flex gap-1 items-center">
                <FaCalendarDay />
                <span>October 28, 2024</span>
              </div>  
              <div className="flex gap-1 items-center">
                <GoClock/>
                <span>14 min read</span>
              </div>                                  
            </p>
            <h2 className="font-semibold text-xl sm:text-3xl md:text-xl lg:text-4.5xl text-center lg:leading-tight mb-3">How do I create a  startup software project</h2>
            <div className="flex gap-3 items-center">
              <div><Image src={IMAGES.userIcon} className="max-w-14 rounded-full" alt=""/></div>
              <div className="text-heading font-medium">
                <p className="">Zach</p>
                <p className="">Managing Editor</p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className=" lg:flex justify-between mt-9">
        <div>
          <h2 className="text-3xl font-semibold text-heading pb-6 text-start">
            Latest Articles
          </h2>
        </div>
        <div className="flex-col sm:flex-row flex gap-3 pb-6">
          <button
            className={`border-2 shadow px-5 rounded-full py-2 font-medium text-heading ${
              filterType === "All" ? "text-white bg-primary-gradient" : ""
            }`}
            onClick={() => setFilterType("All")}
          >
            All
          </button>
          <button
            className={`border-2 shadow px-5 rounded-full py-2 font-medium text-heading ${
              filterType === "Blog" ? "text-white bg-primary-gradient" : ""
            }`}
            onClick={() => setFilterType("Blog")}
          >
            Blog
          </button>
          <button
            className={`border-2 shadow px-5 rounded-full py-2 font-medium text-heading ${
              filterType === "Cybersecurity"
                ? "text-white bg-primary-gradient"
                : ""
            }`}
            onClick={() => setFilterType("Cybersecurity")}
          >
            Cybersecurity
          </button>
          <button
            className={`border-2 shadow px-5 rounded-full py-2 font-medium text-heading ${
              filterType === "Software and Tools"
                ? "text-white bg-primary-gradient"
                : ""
            }`}
            onClick={() => setFilterType("Software and Tools")}
          >
            Software and Tools
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {filteredCase.slice(page * 6 - 6, page * 6).map((item, i) => {
          return (
            <Link
              href={`/blogs/${item.id}`}
              key={i}
              className="rounded-2xl shadow-md shadow-lightGray overflow-hidden"
            >
              <div className="relative group overflow-hidden">
                <Image
                  alt=""
                  className="w-full group-hover:scale-110 group-hover:transition-all transition-all"
                  src={item.image.src}
                  width={item.image.width}
                  height={item.image.height}
                />
                <div className="absolute bg-black text-white font-medium px-5 py-1.5 rounded-full top-6 right-6">
                  {item.type}
                </div>
              </div>
              <div className="text-start px-6 py-5">
                <h3 className="text-lg sm:text-2xl text-heading font-medium pt-5 pb-2">
                  {item.heading}
                </h3>
                <p className="text-xs sm:text-base text-heading pb-2 gap-4 flex items-center">
                  <div className="flex gap-1 items-center">
                    <FaCalendarDay />
                    <span>{item.span_1}</span>
                  </div>  
                  <div className="flex gap-1 items-center">
                    <GoClock/>
                    <span>{item.span_2}</span>
                  </div>                                  
                </p>
                <div >
                  <span className=" text-heading font-semibold text-xs sm:text-base flex items-end">
                    <span className="pb-1 border-b-2 border-heading pe-2">Read More</span> <span className="pb-1 border-b-2 border-heading"><MdArrowOutward size={20}/></span>
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
      {filteredCase.length > 0 && (
        <div className="pagination flex gap-2 justify-center py-7">
          {[...Array(Math.ceil(filteredCase.length / 6))].map((_, i) => {
            return (
              <span
                className={`px-5 py-1.5 rounded-md bg-red-200 cursor-pointer ${
                  page === i + 1 ? "text-white bg-primary-gradient" : ""
                }`}
                key={i}
                onClick={() => changePagination(i + 1)}
              >
                {i + 1}
              </span>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Blogs;
