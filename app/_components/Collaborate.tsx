"use client";

import IMAGES from "@/assets/images";
import { useTheme } from "@/context/themeContext";
import Image from "next/image";
import React from "react";

const Collaborate = () => {
  const { theme } = useTheme(); // Access theme from context
  return (
    <div className={`gen-p py-28 ${theme} bg-background`}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 text-start items-center">
        <div>
          <h2 className="text-3xl font-bold mb-5">
            Interested to collaborate?
          </h2>
          <p className="mb-12 text-lg text-heading">
            Share your email address with us and we will keep in touch
          </p>
          <div className="flex gap-3">
            <input
              type="email"
              placeholder="Email"
              className="border border-gray-400 w-7/12 px-4 py-2 rounded-lg"
            />
            <button className="bg-amber-500 text-white px-8 py-2 rounded-lg font-semibold">
              Send
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <Image
            src={IMAGES.COLLABORATE}
            className="w-10/12 rounded-2xl"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
