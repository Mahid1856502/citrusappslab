"use client";
import { useTheme } from "@/context/themeContext";
import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import TestimonialsCard from "./testimonials/TestimonialsCard";
import IMAGES from "@/assets/images";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonials = () => {
  const { theme } = useTheme();
  const [activeIndex, setActiveIndex] = useState(0);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const testimonials = [
    {
      id: 1,
      name: "Alice Johnson",
      designation: "Marketing Specialist",
      comment:
        "This product completely changed the way we handle our workflow. Super efficient and user-friendly!",
      rating: 5,
      image: IMAGES.USER_1,
    },
    {
      id: 2,
      name: "Mark Thompson",
      designation: "Product Manager",
      comment:
        "A fantastic tool! It has all the features we need and then some. Customer support has been excellent too.",
      rating: 4,
      image: IMAGES.USER_2,
    },
    {
      id: 3,
      name: "Emily Davis",
      designation: "Freelance Designer",
      comment:
        "I love how easy it is to navigate and how much time it saves. Highly recommend to anyone!",
      rating: 5,
      image: IMAGES.USER_3,
    },
    {
      id: 4,
      name: "John Walker",
      designation: "Business Owner",
      comment:
        "Good overall, but some features could be improved. Still, it's very helpful for small businesses.",
      rating: 4,
      image: IMAGES.USER_4,
    },
    {
      id: 5,
      name: "Sophia Turner",
      designation: "Project Coordinator",
      comment:
        "Amazing! It’s helped us stay organized and on track. Very intuitive and the updates are always helpful.",
      rating: 5,
      image: IMAGES.USER_5,
    },
    {
      id: 6,
      name: "Michael Brown",
      designation: "Software Engineer",
      comment:
        "Great tool, but the setup took a bit longer than expected. Once configured, it's smooth sailing.",
      rating: 4,
      image: IMAGES.USER_6,
    },
  ];

  const settings = {
    focusOnSelect: true,
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500,
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

  console.log("activeIndex", activeIndex);
  return (
    <div className={`text-left gen-p pt-16 ${theme} bg-background`}>
      <h2 className="text-center text-4xl text-orange-400 mb-2">We Deliver</h2>
      <h2 className="text-center text-4xl md:text-4.5xl font-bold mb-8">
        Reliable Services
      </h2>
      {/* <Carousel
        responsive={responsive}
        autoPlay
        autoPlaySpeed={3000}
        infinite
        afterChange={handleAfterChange} // Update active slide on change
        customTransition="transform 300ms ease-in-out"
        // showDots
        // renderDotsOutside
        arrows={false}
      >
        {testimonials.map((item, index) => (
          <div
            key={item.id}
            className={`relative p-8 mx-3 rounded-xl bg-cardBackground min-h-[530px] cursor-grab transition-transform duration-300 ${
              index === activeIndex % testimonials?.length
                ? "scale-105"
                : "scale-90 opacity-40"
            }`}
          >
            <TestimonialsCard data={item} />
          </div>
        ))}
      </Carousel> */}
      <Slider {...settings}>
        {testimonials.map((item, index) => (
          <div
            key={item.id}
            className={`relative p-8 mx-3 rounded-xl bg-cardBackground min-h-[530px] cursor-grab transition-transform duration-300 ${
              index === activeIndex ? "scale-100" : "opacity-40 scale-75"
            }`}
          >
            <TestimonialsCard data={item} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Testimonials;
