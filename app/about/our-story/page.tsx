"use client";
import React from "react";
import Image from "next/image";
import IMAGES from "@/assets/images";
import { useTheme } from "@/context/themeContext";

const OurStory = () => {
  const { theme } = useTheme(); // Access theme from context
  const allStory = [
    {
      id: 1,
      heading: "Website and App Development for Online Food Marketplace",
      par_1: [
        {
          text: "At NetNexus Global, we’re all about combining our",
          link: false,
        },
        { text: " software development team", link: true, url: "" },
        {
          text: " with top-notch software solutions. As a software development Agency, we’ve got a genuine passion for excellence and take immense pride in what we do. Having been entrepreneurs ourselves, we truly get what our clients need. Before launching our agency, we spent 12 years managing projects across various industries like engineering agency, oil and gas R&D, software consultancy, e-learning platforms, and the Internet of Things (IoT). Since starting NetNexus Global, we’ve had the pleasure to provide exclusive services to three passionate clients. Now, we’re ready to expand, opening our doors to a selected group of new clients who are looking for premium, tailored software services.",
          link: false,
        },
      ],
      image: IMAGES.CASE_1,
      onImage:
        "With our success in entrepreneurship, we resonate with your goals",
    },
  ];

  return (
    <div className={`bg-background ${theme} pt-28`}>
      {allStory.map((item, i) => {
        return (
          <div
            key={i}
            className="grid grid-cols-1 lg:grid-cols-2 gen-p gap-9 py-16"
          >
            <div className=" bg-cardBackground rounded-2xl text-start py-6 px-7">
              <h2 className="text-3xl sm:text-4.5xl font-semibold mb-3 text-heading">
                Our Story
              </h2>
              <p className="text-heading text-justify leading-relaxed text-sm sm:text-base">
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
            </div>
            <div className="rounded-2xl overflow-hidden">
              <div className="relative before:absolute before:bg-gradient-to-r before:from-black before:to-transparent before:w-full before:h-full before:top-0 before:left-0">
                <Image
                  className="w-full"
                  src={item.image.src}
                  width={item.image.width}
                  height={item.image.height}
                  alt=""
                />
                <div className="absolute w-full h-full flex px-6 items-center top-0 left-0 text-start">
                  <h2 className="text-xl text-white sm:text-5xl font-bold">
                    {item.onImage}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OurStory;
