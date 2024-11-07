import React from "react";

export type InfoSectionProps = {
  title: string;
  startParagraph: string;
  bullets: { label: string; description: string }[];
  endParagraph: string;
};

const InfoSection = ({
  title,
  startParagraph,
  bullets,
  endParagraph,
}: InfoSectionProps) => {
  return (
    <div className="gen-p mt-16">
      <h4 className="text-2xl font-semibold text-primary">{title}</h4>
      <p className="text-lg my-5">{startParagraph}</p>
      <ul className="list-disc list-inside space-y-2">
        {bullets.map((bullet, index) => (
          <li key={index} className="font-semibold">
            <span className="font-semibold text-lg">{bullet.label}:</span>
            <span className="font-medium text-lg ml-1">
              {bullet.description}
            </span>
          </li>
        ))}
      </ul>
      <p className="text-lg my-5">{endParagraph}</p>
    </div>
  );
};

export default InfoSection;
