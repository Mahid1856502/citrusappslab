"use client";
import { useTheme } from "@/context/themeContext";
import React from "react";
interface EngageProps {
  title: string;
  heading: string
  info:string
}



const Engage: React.FC<EngageProps> =(props) => {
  const { theme } = useTheme();
  return (
    <div className={`text-left gen-p py-28 ${theme} bg-background`}>
      <h2 className="text-3xl text-orange-400 mb-2">{props.title}</h2>
      <h2 className="text-4.5xl  font-bold mb-3">{props.heading}</h2>
      <p className="mb-8 text-heading">
        {props.info}
      </p>
      <div className="working-banners">
        <div className="bg-cardBackground rounded-2xl px-12 py-9 flex gap-5 items-center my-5">
          <h2 className="text-orange-400 font-bold text-5xl">1.</h2>
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Free Discovery Call{" "}
            </h3>
            <p className="text-heading">
              Our journey begins with a complimentary discovery call. During this session, we listen to your needs, understand your challenges, and gather essential information about your project. This call helps us tailor our approach to meet your unique requirements.
            </p>
          </div>
        </div>
        <div className="bg-cardBackground rounded-2xl px-12 py-9 flex gap-5 items-center my-5">
          <h2 className="text-orange-400 font-bold text-5xl">2.</h2>
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Our Proposal{" "}
            </h3>
            <p className="text-heading">
              Following the discovery call, we craft a detailed proposal outlining our approach, timeline, and cost. This proposal is designed to give you a clear picture of how we plan to achieve your goals, ensuring transparency and setting the stage for a successful partnership.
            </p>
          </div>
        </div>
        <div className="bg-cardBackground rounded-2xl px-12 py-9 flex gap-5 items-center my-5">
          <h2 className="text-orange-400 font-bold text-5xl">3.</h2>
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Initial Workshop{" "}
            </h3>
            <p className="text-heading">
              Next, we conduct an initial workshop with your team. This interactive session allows us to dive deeper into your project requirements, brainstorm solutions, and align our strategies. To secure this workshop, we require a deposit payment, which varies based on the complexity of your project. This ensures that we can dedicate the necessary resources and expertise to plan your project thoroughly.
            </p>
          </div>
        </div>
        <div className="bg-cardBackground rounded-2xl px-12 py-9 flex gap-5 items-center my-5">
          <h2 className="text-orange-400 font-bold text-5xl">4.</h2>
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Project Kick-Off{" "}
            </h3>
            <p className="text-heading">
              Once everything is in place, we move to the official kick-off. This marks the start of the project where our dedicated team begins working on your bespoke solution. We outline key milestones and establish communication channels to keep you informed throughout the process.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Engage;
