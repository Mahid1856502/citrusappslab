"use client";
import React from "react";
import Image from "next/image";
import { ALL_CASES } from "@/constant";
import { useTheme } from "@/context/themeContext";
import Testimonials from "../_components/Testimonials";

const CaseStudies = () => {
  const { theme } = useTheme();
  return (
    <div className={` py-16 md:py-28 ${theme} bg-background`}>
      <div className="text-start my-16 gen-p">
        <h1 className="text-heading  md:leading-tight text-xl md:text-2xl lg:text-4.5xl mb-4 font-semibold">
          Selected Success Stories
        </h1>
        <p className="text-heading">
          At NetNexus Global, we’ve had the privilege of working on a wide range
          of impactful projects across various industries. Below is a selection
          of success stories that reflect our expertise, innovative approach,
          and commitment to{" "}
          <a href="" className="text-heading underline">
            {" "}
            delivering tailored software solutions
          </a>
          . Each case study highlights the value we bring to our clients and the
          lasting results we’ve achieved together.
        </p>
      </div>
      <div className="">
        {ALL_CASES.map((item, i) => (
          <div
            className={`gen-p grid grid-cols-1 md:grid-cols-2 gap-7 py-16 md:py-28 items-center${
              item.id % 2 === 0 && " bg-cardBackground"
            }`}
            key={i}
          >
            <div className={`text-start ${item.id % 2 !== 0 && "md:order-2"}`}>
              <p className="text-orange-400 mb-4 text-base sm:text-lg md:text-xl">
                {item.text_yellow}
              </p>
              <h2 className="text-heading  md:leading-tight text-xl md:text-2xl lg:text-4.5xl mb-6 font-semibold">
                {item.heading}
              </h2>
              <p className="text-heading mb-8">
                {item.par_1.map((part, index) =>
                  part.link ? (
                    <a
                      key={index}
                      href={part.url}
                      className="text-heading leading-normal underline"
                    >
                      {part.text}
                    </a>
                  ) : (
                    part.text
                  )
                )}
              </p>
              <p className="text-heading">{item.par_2}</p>
            </div>
            <div
              className={`${
                item.id % 2 !== 0 && "md:order-1"
              } flex justify-center items-center`}
            >
              <Image
                className="w-10/12 rounded-2xl"
                src={`${item.image.src}`}
                width={700}
                height={700}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
      <Testimonials />
    </div>
  );
};

export default CaseStudies;
