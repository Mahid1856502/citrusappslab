"use client";
import Certificates from "@/app/_components/Certificates";
import ProcessStep from "@/app/_components/ProcessStep";
import IMAGES from "@/assets/images";
import { STEPS } from "@/constant";
import { useTheme } from "@/context/themeContext";
import Image from "next/image";
import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const ProductManagement = () => {
  const { theme } = useTheme();

  const [showMore, setShowMore] = useState(false);

  return (
    <div className={`gen-p pt-28 ${theme} bg-background text-heading`}>
      <h1 className="text-4xl md:text-4.5xl font-medium">
        NetNexus Global Product Development Process
      </h1>
      <p>
        Our product development process is aspired by industry best practices
        such as Agile, Lean, and Venture Design Framework. We tailored our
        processes to maximize the efficiency and value of our deliveries, our
        process are live and we continuously improve them to provide the best
        services to our clients. Here’s an overview of our process.
      </p>
      {STEPS.map((step, index) => (
        <ProcessStep
          title={step.title}
          description={step.description}
          key={step.id}
          image={step.image}
          index={index}
        />
      ))}
      <Certificates />

      <div className="lg:flex justify-between lg:space-x-5 pb-16">
        <div>
          <h1 className="text-4xl md:text-4.5xl font-medium mb-4">
            Our Agile Product Development Process
          </h1>
          <h2 className="text-2xl font-semibold mb-4">
            Custom Software Development & Consulting
          </h2>
          <p>
            At Net Nexus Global Ltd., our product development process is built
            on the principles of <span className="font-bold">agile</span>{" "}
            methodologies, ensuring flexibility and continuous improvement at
            every stage. We specialize in{" "}
            <span className="font-bold">custom software development</span>,
            tailoring solutions that meet the unique needs of each client. Our
            expert team collaborates closely with you from initial consultation
            to the final product, ensuring that the result aligns perfectly with
            your business goals.
          </p>
          {showMore && (
            <div className=" mt-4">
              <p className="mb-4">
                Our approach begins with a thorough{" "}
                <span className="font-bold">consulting</span> phase, where we
                dive deep into your requirements and pain points. From there, we
                develop a roadmap that emphasizes iterative development,
                allowing for ongoing adjustments and enhancements as your needs
                evolve. This agile framework enables faster time-to-market and
                better alignment with ever-changing market demands.
              </p>
              <p className="mb-4">
                By combining expert{" "}
                <span className="font-bold">consulting</span> services with a
                streamlined{" "}
                <span className="font-bold">custom software development</span>{" "}
                process, we ensure that your product remains scalable,
                innovative, and competitive. Whether you're in the health
                sector, finance, or any other industry, our tailored solutions
                drive real business outcomes, delivering high-quality software
                on time and within budget.
              </p>
              <p className="mb-4">
                This process isn’t just about building software – it’s about
                creating a partnership where your success is our priority. Ready
                to transform your business with our agile development approach?
                Get in touch with us today!
              </p>
              <h3 className="text-lg font-semibold text-gray-800 mt-6">
                Key Stages
              </h3>
              <ul className="list-disc list-inside  mt-2 space-y-2">
                <li>
                  <span className="font-semibold">Conceptualization:</span>{" "}
                  Initial ideas are explored and refined.
                </li>
                <li>
                  <span className="font-semibold">Design and Prototyping:</span>{" "}
                  Creating detailed designs and working prototypes.
                </li>
                <li>
                  <span className="font-semibold">Testing:</span> Evaluating the
                  product for functionality and market fit.
                </li>
                <li>
                  <span className="font-semibold">Launch:</span> The product is
                  released to customers.
                </li>
              </ul>
            </div>
          )}
          <button
            onClick={() => setShowMore(!showMore)}
            className="text-orange-500 font-semibold mt-4"
          >
            {showMore ? (
              <div className="flex ">
                Show Less <FaAngleUp size={24} />
              </div>
            ) : (
              <div className="flex ">
                Show More
                <FaAngleDown size={24} />
              </div>
            )}
          </button>
        </div>
        <Image
          src={IMAGES.CASE_BANNER_3}
          alt=""
          className="rounded-lg w-full lg:w-80 object-cover mt-8"
        />
      </div>
    </div>
  );
};

export default ProductManagement;
