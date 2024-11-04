import IMAGES from "@/assets/images";
import Image from "next/image";
import React from "react";
import Typewriter from "./TypeWriter";

const Hero = () => {
  return (
    <div className="hero_banner relative">
      <Image
        src={IMAGES.MAIN_BANNER}
        className="h-screen object-cover"
        alt=""
      />
      <div className="absolute flex items-center px-4 md:px-14 lg:px-24 top-0 left-0 w-full h-full text-start">
        <div>
          <Typewriter
            textArray={["Innovate.", "Create.", "Succeed."]}
            typingSpeed={120}
            deletingSpeed={50}
            pause={1000}
          />
          <p className="text-gray-50 text-lg">
            We craft cutting-edge digital solutions that propel your business
            <br />
            forward in the ever-evolving tech landscape.
          </p>
          <button className="bg-gradient-to-b from-orange-400 to-amber-700 text-white px-8 py-2.5 rounded-lg font-semibold mt-8">
            Let's connect
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
