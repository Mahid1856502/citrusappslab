import Image, { StaticImageData } from "next/image";
import React from "react";
import StarRating from "./Rating";
import { PiQuotesFill } from "react-icons/pi";
type TestimonialsCardProps = {
  data: {
    id: number;
    name: string;
    designation: string;
    comment: string;
    rating: number;
    image: StaticImageData;
  };
};

const TestimonialsCard = ({ data }: TestimonialsCardProps) => {
  return (
    <>
      <div className="flex flex-col items-center">
        <Image
          src={data.image}
          alt="profile"
          className="rounded-full h-14 w-14 object-cover mb-3"
        />
        <h1 className="mb-1 font-medium text-lg text-heading">{data.name}</h1>
        <h1 className="mb-3 text-primary text-xl font-light">
          {data.designation}
        </h1>
        <p className="text-heading mb-3">{data.comment}</p>
        <StarRating rating={data.rating} />
      </div>
      <div className="h-16 w-16 rounded-full bg-black flex items-center justify-center mt-3">
        <PiQuotesFill color="#fff" size={20} />
      </div>
    </>
  );
};

export default TestimonialsCard;
