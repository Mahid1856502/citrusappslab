"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import IMAGES from "@/assets/images";
import { useTheme } from "@/context/themeContext";

const Blogs = () => {
  const { theme } = useTheme(); // Access theme from context
  const allBlogs = [
    {
      id: 1,
      text_yellow: "A Two-Sided Platform for Buying and Selling Authentic Food",
      heading: "Website and App Development for Online Food Marketplace",
      span_1: "September 16, 2024",
      span_2: "12 min read",
      image: IMAGES.CASE_1,
      type: "Blog",
      link: "https://netnexus.co.uk/",
    },
    {
      id: 1,
      text_yellow: "A Two-Sided Platform for Buying and Selling Authentic Food",
      heading: "Website and App Development for Online Food Marketplace",
      span_1: "September 16, 2024",
      span_2: "12 min read",
      image: IMAGES.CASE_1,
      type: "Blog",
      link: "https://netnexus.co.uk/",
    },
    {
      id: 1,
      text_yellow: "A Two-Sided Platform for Buying and Selling Authentic Food",
      heading: "Website and App Development for Online Food Marketplace",
      span_1: "September 16, 2024",
      span_2: "12 min read",
      image: IMAGES.CASE_1,
      type: "Blog",
      link: "https://netnexus.co.uk/",
    },
    {
      id: 1,
      text_yellow: "A Two-Sided Platform for Buying and Selling Authentic Food",
      heading: "Website and App Development for Online Food Marketplace",
      span_1: "September 16, 2024",
      span_2: "12 min read",
      image: IMAGES.CASE_1,
      type: "Blog",
      link: "https://netnexus.co.uk/",
    },
    {
      id: 1,
      text_yellow: "A Two-Sided Platform for Buying and Selling Authentic Food",
      heading: "Website and App Development for Online Food Marketplace",
      span_1: "September 16, 2024",
      span_2: "12 min read",
      image: IMAGES.CASE_1,
      type: "Blog",
      link: "https://netnexus.co.uk/",
    },
    {
      id: 1,
      text_yellow: "A Two-Sided Platform for Buying and Selling Authentic Food",
      heading: "Website and App Development for Online Food Marketplace",
      span_1: "September 16, 2024",
      span_2: "12 min read",
      image: IMAGES.CASE_1,
      type: "Cybersecurity",
      link: "https://netnexus.co.uk/",
    },
    {
      id: 1,
      text_yellow: "A Two-Sided Platform for Buying and Selling Authentic Food",
      heading: "Website and App Development for Online Food Marketplace",
      span_1: "September 16, 2024",
      span_2: "12 min read",
      image: IMAGES.CASE_1,
      type: "Cybersecurity",
      link: "https://netnexus.co.uk/",
    },
    {
      id: 1,
      text_yellow: "A Two-Sided Platform for Buying and Selling Authentic Food",
      heading: "Website and App Development for Online Food Marketplace",
      span_1: "September 16, 2024",
      span_2: "12 min read",
      image: IMAGES.CASE_1,
      type: "Software and Tools",
      link: "https://netnexus.co.uk/",
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
    <div className={`py-10 bg-background ${theme} pt-28 gen-p`}>
      <div className=" md:flex justify-between">
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
              href={`${item.link}`}
              key={i}
              className="rounded-2xl shadow-md shadow-lightGray overflow-hidden"
            >
              <div className="relative group">
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
                <p className="text-xs sm:text-base text-heading pb-2 gap-4 flex">
                  <span>{item.span_1}</span>
                  <span>{item.span_2}</span>
                </p>
                <div>
                  <span className="pb-1 border-b-2 border-heading text-heading font-semibold text-xs sm:text-base">
                    Read More
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
