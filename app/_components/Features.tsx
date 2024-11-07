"use client";

import IMAGES from "@/assets/images";
import { useTheme } from "@/context/themeContext";
import Image from "next/image";
import React from "react";

const Features = () => {
  const { theme } = useTheme(); // Access theme from context
  return (
    <div className={`gen-p py-16 md:py-28 ${theme} bg-background`}>
      <h2 className="text-4xl text-orange-400 mb-2">We Provide</h2>
      <h2 className="text-4xl md:text-4.5xl font-bold mb-8">Unique Approach</h2>
      <div className="service-cards text-left grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2.5">
        <div className="bg-gradient-to-r from-orange-100 via-orange-100 to-orange-300 px-6 pt-6 pb-9 rounded-2xl">
          <div>
            <Image src={IMAGES.UNIQUE_1} alt="" />
          </div>
          <h3 className="text-2xl text-black font-bold my-4">
            Experience Exclusive Services{" "}
          </h3>
          <p>
            We design and develop bespoke solutions, form top talent teams end
            to end tailored to our client’s software challenge.
          </p>
        </div>
        <div className="bg-gradient-to-r from-orange-100 via-orange-100 to-orange-300 px-6 pt-6 pb-9 rounded-2xl">
          <div>
            <Image src={IMAGES.UNIQUE_2} alt="" />
          </div>
          <h3 className="text-2xl text-black font-bold my-4">
            Experience Exclusive Services{" "}
          </h3>
          <p>
            We design and develop bespoke solutions, form top talent teams end
            to end tailored to our client’s software challenge.
          </p>
        </div>
        <div className="bg-gradient-to-r from-orange-100 via-orange-100 to-orange-300 px-6 pt-6 pb-9 rounded-2xl">
          <div>
            <Image src={IMAGES.UNIQUE_3} alt="" />
          </div>
          <h3 className="text-2xl text-black font-bold my-4">
            Experience Exclusive Services{" "}
          </h3>
          <p>
            We design and develop bespoke solutions, form top talent teams end
            to end tailored to our client’s software challenge.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Features;
