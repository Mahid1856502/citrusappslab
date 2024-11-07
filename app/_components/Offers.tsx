"use client";
import { useTheme } from "@/context/themeContext";
import React from "react";

const Offers = () => {
  const { theme } = useTheme(); // Access theme from context

  return (
    <div
      className={`grid grid-cols-1 md:grid-cols-2 gap-9 gen-p py-14 bg-background ${theme}`}
    >
      <div className="text-left ">
        <h2 className="text-4xl text-orange-400 mb-4">We offer</h2>
        <h2 className="text-4.5xl font-bold mb-4">
          Trusted Software Partnership
        </h2>
        <p className="text-heading mb-4">
          We build trusted partnerships through reliable{" "}
          <a href="/" className="underline text-heading">
            {" "}
            software development consultancy
          </a>
          . We believe in an agile approach, offering you the flexibility to
          work with us only when you’re confident in the value we provide—no
          long-term commitments needed.
        </p>
        <p className="text-heading">
          Read more about our story and discover how our passion and expertise
          turned our clients’ visions into reality.
        </p>
        <button className="bg-gradient-to-b from-orange-400 to-amber-700 text-white px-8 py-2.5 rounded-lg font-semibold mt-8">
          Read more
        </button>
      </div>
      <div className="">
        <div className="video-container">
          <iframe
            className="w-full rounded-2xl"
            height="360"
            src="https://www.youtube.com/7c39b910-9ceb-49be-aa69-86f514128877" // Replace {video-id} with the actual ID
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Offers;
