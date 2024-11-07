"use client";
import React from "react";
import Image from "next/image";
import IMAGES from "@/assets/images";
import { useTheme } from "@/context/themeContext";

const OurStory = () => {
  const { theme } = useTheme(); // Access theme from context
  const allStory = [
    {
      id: 1,
      heading: "Our Story",
      par_1: [
        {
          text: "At NetNexus Global, we’re all about combining our ",
          link: false,
        },
        { text: "entrepreneurial spirit", link: true, url: "" },
        {
          text: " with top-notch software solutions. As a software development Agency, we’ve got a genuine passion for excellence and take immense pride in what we do. Having been entrepreneurs ourselves, we truly get what our clients need. Before launching our agency, we spent 12 years managing projects across various industries like engineering agency, oil and gas R&D, software consultancy, e-learning platforms, and the Internet of Things (IoT). Since starting NetNexus Global, we’ve had the pleasure to provide exclusive services to three passionate clients. Now, we’re ready to expand, opening our doors to a selected group of new clients who are looking for premium, tailored software services.",
          link: false,
        },
      ],
      image: IMAGES.ourStory_1,
      onImage:
        "With our success in entrepreneurship, we resonate with your goals",
    },
    {
      id: 2,
      heading: "The Beginning",
      par_1: [
        {
          text: "Our journey kicked off in 2019 when we launched our first digital product. By 2021, through the support of Cambridge Judge Business School Accelerate Programme, we cemented our expertise. This success caught the attention of other businesses, eager to boost their online presence and operations with our help. That’s when we decided to shift gears and focus on software development Agency, helping clients reach their goals with innovative, high-quality digital solutions. Since starting NetNexus Global, we’ve had the pleasure of working with three exclusive clients. Now, we’re ready to expand, opening our doors to a select group of new clients who are looking for premium, tailored software services.",
          link: false,
        },
      ],
      image: IMAGES.ourStory_2,
      onImage:
        "Clients organically sought our partnership to fuel their success",
    },
    {
      id: 3,
      heading: "Our Growth",
      par_1: [
        {
          text: "Since then, we’ve worked with a number of clients in the online food marketplace, vehicle auction, financial management, and medical clinics specializing in ophthalmology. Our growth has been organic, fuelled by word-of-mouth and glowing referrals. Our clients’ happiness and trust are at the heart of our success. We’re proud of the strong relationships we’ve built and always strive to exceed expectations. Don’t just take our word for it—check out our testimonials!",
          link: false,
        },
      ],
      image: IMAGES.ourStory_3,
      onImage:
        "We support our clients' growth across various industries",
    },
    {
      id: 4,
      heading: "Our Approach",
      par_1: [
        {
          text: "At NetNexus Global, we create custom teams for each project, tapping into our global network of top-tier software ",
          link: false,
        },
        { text: "development contractors", link: true, url: "" },
        {
          text: " This means we can deliver the best quality solutions that are also cost-effective and perfectly tailored to meet your unique needs. We architect bespoke solutions, build custom software, and maintain it for our clients, so that it is all done for their business with no hassle.",
          link: false,
        },
      ],
      image: IMAGES.ourStory_4,
      onImage:
        "We provide unique services and bespoke solutions from specialized teams.",
    },
    {
      id: 5,
      heading: "Our Mission",
      par_1: [
        {
          text: "Our mission is to redefine the approach to custom software development and consulting by empowering startups and small and medium-sized enterprises to thrive with a competitive software edge in the digital world. We utilize bespoke software solutions tailored to each client’s unique challenges, designing and developing these solutions with exclusive services and top talent teams that manage projects end-to-end. By leveraging our global network, we handpick and vet exceptional talent, ensuring affordable excellence within our clients’ budgets. We prioritize flexibility, offering short-term contracts that allow our clients to engage with us based on the exceptional results we achieve.",
          link: false,
        },
      ],
      image: IMAGES.ourStory_5,
      onImage:
        "Our Mission",
    },
    {
      id: 6,
      heading: "Our Vision",
      par_1: [
        {
          text: "Our vision is to be the leading force in custom software development and consulting, recognized for transforming how startups and small and medium-sized enterprises leverage technology to thrive in the digital world. We aim to foster innovation and growth by providing tailored solutions that empower businesses to stay ahead of the curve, shaping a future where exceptional software drives success across industries.",
          link: false,
        },
      ],
      image: IMAGES.ourStory_6,
      onImage:
        "Our Vision",
    },
  ];

  return (
    <div className={`bg-background ${theme} pt-36 gen-p`}>
      <h1 className="font-semibold text-4xl sm:text-5xl">Committed Partners in Your Success</h1>
      {allStory.map((item, i) => {
        return (
          <div
            key={i}
            className="grid grid-cols-1 lg:grid-cols-2 gap-9 py-16"
          >
            <div className=" bg-cardBackground rounded-2xl text-start py-6 px-7">
              <h2 className="text-3xl sm:text-4.5xl sm:leading-tight font-semibold mb-3 text-heading">
                {item.heading}
              </h2>
              <p className="text-heading text-justify leading-relaxed text-sm sm:text-base">
                {item.par_1.map((part, index) =>
                  part.link ? (
                    <a
                      key={index}
                      href={part.url}
                      className="text-heading leading-normal underline"
                    >
                      {part.text}
                    </a>
                  ) : (
                    part.text
                  )
                )}
              </p>
            </div>
            <div className="rounded-2xl overflow-hidden">
              <div className="relative before:absolute before:bg-gradient-to-r before:from-slate-950 before:to-transparent before:w-full before:h-full before:top-0 before:left-0">
                <Image
                  className="w-full aspect-square"
                  src={item.image.src}
                  width={item.image.width}
                  height={item.image.height}
                  alt=""
                />
                <div className="absolute w-full h-full flex px-6 items-center top-0 left-0 text-start">
                  <h2 className="text-xl text-white sm:text-5xl font-bold">
                    {item.onImage}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OurStory;
