"use client";
import IMAGES from "@/assets/images";
import { useTheme } from "@/context/themeContext";
import Image from "next/image";
import React from "react";

const Services = () => {
  const { theme } = useTheme(); // Access theme from context
  return (
    <div className={`px-4 md:px-14 lg:px-24 py-28 ${theme} bg-background`}>
      <h2 className="text-4xl text-orange-400 mb-2">We Deliver</h2>
      <h2 className="text-4.5xl font-bold mb-8">Reliable Services</h2>
      <div className="service-cards text-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
        <div className="bg-cardBackground px-6 pt-6 pb-9 rounded-2xl">
          <div>
            <Image src={IMAGES.SERVICE_LOGO_1} alt="" />
          </div>
          <h3 className="text-2xl text-heading font-bold my-4">
            Software Consulting{" "}
          </h3>
          <p className="text-heading">
            Expert advice and bespoke solutions to businesses to help them
            design, develop, and implement software systems effectively.
          </p>
        </div>
        <div className="bg-cardBackground px-6 pt-6 pb-9 rounded-2xl">
          <div>
            <Image src={IMAGES.SERVICE_LOGO_2} alt="" />
          </div>
          <h3 className="text-2xl text-heading font-bold my-4">
            Software Consulting{" "}
          </h3>
          <p className="text-heading">
            Expert advice and bespoke solutions to businesses to help them
            design, develop, and implement software systems effectively.
          </p>
        </div>
        <div className="bg-cardBackground px-6 pt-6 pb-9 rounded-2xl">
          <div>
            <Image src={IMAGES.SERVICE_LOGO_3} alt="" />
          </div>
          <h3 className="text-2xl text-heading font-bold my-4">
            Software Consulting{" "}
          </h3>
          <p className="text-heading">
            Expert advice and bespoke solutions to businesses to help them
            design, develop, and implement software systems effectively.
          </p>
        </div>
        <div className="bg-cardBackground px-6 pt-6 pb-9 rounded-2xl">
          <div>
            <Image src={IMAGES.SERVICE_LOGO_4} alt="" />
          </div>
          <h3 className="text-2xl text-heading font-bold my-4">
            Software Consulting{" "}
          </h3>
          <p className="text-heading">
            Expert advice and bespoke solutions to businesses to help them
            design, develop, and implement software systems effectively.
          </p>
        </div>
        <div className="bg-cardBackground px-6 pt-6 pb-9 rounded-2xl">
          <div>
            <Image src={IMAGES.SERVICE_LOGO_5} alt="" />
          </div>
          <h3 className="text-2xl text-heading font-bold my-4">
            Software Consulting{" "}
          </h3>
          <p className="text-heading">
            Expert advice and bespoke solutions to businesses to help them
            design, develop, and implement software systems effectively.
          </p>
        </div>
        <div className="bg-cardBackground px-6 pt-6 pb-9 rounded-2xl">
          <div>
            <Image src={IMAGES.SERVICE_LOGO_6} alt="" />
          </div>
          <h3 className="text-2xl text-heading font-bold my-4">
            Software Consulting{" "}
          </h3>
          <p className="text-heading">
            Expert advice and bespoke solutions to businesses to help them
            design, develop, and implement software systems effectively.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
