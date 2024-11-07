import IMAGES from "@/assets/images";
import Image, { StaticImageData } from "next/image";
import React from "react";
import { motion } from "framer-motion";

type ProcessStep = {
  title: string;
  description: string;
  image: StaticImageData;
  index: number;
};

const ProcessStep = ({ title, description, image, index }: ProcessStep) => {
  const isOdd = index % 2 !== 0;
  const slideInVariantLeft = {
    hidden: { x: -50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const slideInVariantRight = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };
  return (
    <div className="flex flex-col md:flex-row items-center justify-between gap-8 py-6 md:py-20 text-heading">
      {/* Left Image Section */}
      <div className={`relative w-full md:w-1/2 ${isOdd ? "md:order-3" : ""}`}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={isOdd ? slideInVariantRight : slideInVariantLeft}
        >
          <Image
            src={image}
            alt="Discovery Process"
            className="rounded-lg shadow-lg"
            layout="responsive"
            objectFit="cover"
            width={400}
            height={300}
          />
          <Image
            src={IMAGES.DASH_ELEMENT}
            alt="dash element"
            className={`hidden md:block w-12 bottom-0  object-cover absolute ${
              isOdd ? "-left-[4.8rem] rotate-180 pt-8" : "-right-[4.8rem] pb-8"
            }`}
          />
        </motion.div>
      </div>
      <div
        className={`w-0.5 self-stretch bg-heading mx-9 ${
          isOdd ? "md:order-2" : ""
        }`}
      />
      <div
        className={`relative flex flex-col md:flex-row items-center md:items-start w-full md:w-1/2 self-stretch justify-center ${
          isOdd ? "md:order-1" : ""
        }`}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          variants={isOdd ? slideInVariantLeft : slideInVariantRight}
        >
          <Image
            src={IMAGES.DASH_ELEMENT}
            alt="dash element"
            className={`hidden md:block w-12 top-0  object-cover absolute ${
              isOdd ? "-right-[4.8rem] pt-8" : "-left-[4.8rem] rotate-180 pb-8"
            }`}
          />
          <div className="text-center md:text-left flex flex-col justify-center h-full">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">
              {title}{" "}
            </h2>
            <p>{description}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProcessStep;
