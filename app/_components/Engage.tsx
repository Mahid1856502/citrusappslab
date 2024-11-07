"use client";
import { useTheme } from "@/context/themeContext";
import React from "react";

const Engage = () => {
  const { theme } = useTheme();
  return (
    <div className={`text-left gen-p py-28 ${theme} bg-background`}>
      <h2 className="text-3xl text-orange-400 mb-2">How it Works</h2>
      <h2 className="text-4.5xl  font-bold mb-3">To Engage with Us</h2>
      <p className="mb-8 text-heading">
        Here’s a breakdown of how we engage with our clients before the project
        kick off
      </p>
      <div className="working-banners">
        <div className="bg-cardBackground rounded-2xl px-12 py-9 flex gap-5 items-center my-5">
          <h2 className="text-orange-400 font-bold text-5xl">1.</h2>
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Experience Exclusive Services{" "}
            </h3>
            <p className="text-heading">
              We design and develop bespoke solutions, form top talent teams end
              to end tailored to our client’s software challenge.
            </p>
          </div>
        </div>
        <div className="bg-cardBackground rounded-2xl px-12 py-9 flex gap-5 items-center my-5">
          <h2 className="text-orange-400 font-bold text-5xl">2.</h2>
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Experience Exclusive Services{" "}
            </h3>
            <p className="text-heading">
              We design and develop bespoke solutions, form top talent teams end
              to end tailored to our client’s software challenge.
            </p>
          </div>
        </div>
        <div className="bg-cardBackground rounded-2xl px-12 py-9 flex gap-5 items-center my-5">
          <h2 className="text-orange-400 font-bold text-5xl">3.</h2>
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Experience Exclusive Services{" "}
            </h3>
            <p className="text-heading">
              We design and develop bespoke solutions, form top talent teams end
              to end tailored to our client’s software challenge.
            </p>
          </div>
        </div>
        <div className="bg-cardBackground rounded-2xl px-12 py-9 flex gap-5 items-center my-5">
          <h2 className="text-orange-400 font-bold text-5xl">4.</h2>
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Experience Exclusive Services{" "}
            </h3>
            <p className="text-heading">
              We design and develop bespoke solutions, form top talent teams end
              to end tailored to our client’s software challenge.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Engage;
