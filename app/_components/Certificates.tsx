"use client";
import { useTheme } from "@/context/themeContext";
import React, { useState } from "react";
import Image from "next/image";
import { CERTIFICATES } from "@/constant";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Certificates = () => {
  const { theme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  const settings = {
    focusOnSelect: true,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    beforeChange: (current: number, next: number) => setActiveIndex(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className={`py-16 ${theme} bg-background`}>
      <h2 className="text-center text-4xl text-orange-400 mb-2">We Deliver</h2>
      <h2 className="text-center text-4xl md:text-4.5xl font-bold mb-8">
        Reliable Services
      </h2>
      <div className="slider-container">
        <Slider {...settings}>
          {CERTIFICATES.map((item, index) => (
            <div
              key={index}
              className={`relative p-8 mx-3 rounded-xl !flex flex-col items-center bg-background border-2 border-lightGray min-h-[300px] cursor-grab transition-transform duration-300 ${
                index === activeIndex ? "scale-100" : "opacity-40 scale-75"
              }`}
            >
              <Image
                src={item.courseImage}
                className="h-16 w-16 rounded-full object-cover"
                alt=""
              />
              <h1 className="text-heading font-lg text-center mt-3">
                {item.courseName}
              </h1>
              <h1 className="text-primary font-lg text-center mt-3">
                {item.courseDomain}
              </h1>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Certificates;
