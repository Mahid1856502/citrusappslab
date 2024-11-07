"use client";

import IMAGES from "@/assets/images";
import { useTheme } from "@/context/themeContext";
import Image from "next/image";
import React from "react";

const CaseStudies = () => {
  const { theme } = useTheme(); // Access theme from context
  return (
    <div className={`gen-p py-16 md:py-28 ${theme} bg-background`}>
      <h2 className="text-4xl text-orange-400 mb-2">Selected Clients'</h2>
      <h2 className="text-4xl md:text-4.5xl font-bold mb-14">Case studies</h2>
      <div className="service-cards text-left grid grid-cols-1 lg:grid-cols-2 gap-7">
        <div>
          <div>
            <Image src={IMAGES.CASE_1} className="w-full rounded-2xl" alt="" />
          </div>
        </div>
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-5 pb-6 border-b border-b-gray-300 mb-8 gap-4">
            <div className="col-span-2">
              <div>
                <Image src={IMAGES.CASE_2} className="w-full" alt="" />
              </div>
            </div>
            <div className="col-span-3 ">
              <h3 className="text-2xl  font-bold mb-4">
                Experience Exclusive Services{" "}
              </h3>
              <p className="text-heading">
                We design and develop bespoke solutions, form top talent teams
                end to end tailored to our client’s software challenge.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-5 pb-6 border-b border-b-gray-300 mb-8 gap-4">
            <div className="col-span-2">
              <div>
                <Image src={IMAGES.CASE_3} className="w-full" alt="" />
              </div>
            </div>
            <div className="col-span-3 ">
              <h3 className="text-2xl  font-bold mb-4">
                Experience Exclusive Services{" "}
              </h3>
              <p className="text-heading">
                We design and develop bespoke solutions, form top talent teams
                end to end tailored to our client’s software challenge.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
