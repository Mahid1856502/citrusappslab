"use client";
import Hero from "@/app/_components/Hero";
import InfoSection from "@/app/_components/InfoSection";
import IMAGES from "@/assets/images";
import { KEY_POINTS } from "@/constant";
import { useTheme } from "@/context/themeContext";
import Image from "next/image";
import React, { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const CyberSecurity = () => {
  const [showMore, setShowMore] = useState(false);

  const { theme } = useTheme();
  return (
    <div className={`${theme} bg-background text-heading`}>
      <div className="hero_banner relative">
        <Image
          src={IMAGES.CYBER_SECURITY}
          className="h-2/3 w-full object-cover"
          alt=""
        />
        <div className="absolute flex items-center gen-p top-0 left-0 w-full h-full text-start">
          <div>
            <h1 className="text-4.5xl text-white font-semibold">
              Security Compliance and Best <br />
              Practices with Expert Guidance
            </h1>
            <button className="my-5 bg-gradient-to-b from-orange-400 to-amber-700 text-white px-8 py-2.5 rounded-lg font-semibold flex items-center">
              Continue with us
              <IoIosArrowForward className="ml-2" />
            </button>
            <p className="text-gray-50 text-lg">
              We craft cutting-edge digital solutions that propel your business
              <br />
              forward in the ever-evolving tech landscape.
            </p>
          </div>
        </div>
      </div>
      <div className={`bg-background ${theme} pt-28`}>
        <div className="gen-p">
          <h2 className="text-3xl mb-3 font-semibold">Introduction</h2>
          <p className="text-lg mb-6">
            Here at NetNexus, we understand that startups in their stages
            require more than creative ideas. They also need secure software to
            safeguard their data and establish credibility with their clients.
            Our commitment to security compliance is fundamental to our
            approach, ensuring the delivery of software solutions customized for
            each client’s unique requirements. In this piece, we will delve into
            the significance of security compliance and how it has been
            ingrained into our ethos and development methodologies, including
            guidelines from the National Cyber Security Centre.
          </p>
        </div>

        <div className="relative flex justify-start mt-16">
          <Image src={IMAGES.CYBER_SECURITY_2} alt="" className="w-full" />
          <div className="gen-p w-full h-full md:w-1/2 self-stretch flex flex-col justify-center absolute ">
            <h1 className="text-3xl font-semibold mb-5">
              What is Security Compliance According to the National Cyber
              Security Centre?
            </h1>
            <p className="text-lg">
              Security compliance involves adhering to a set of standards and
              regulations designed to protect data and ensure privacy. These
              standards, such as GDPR, CCPA, HIPAA, and SOC 2, mandate specific
              security controls, regular audits, and proper documentation to
              safeguard sensitive information.
            </p>
          </div>
        </div>
        <div className="relative flex justify-end">
          <Image src={IMAGES.CYBER_SECURITY_3} alt="" className="w-full" />
          <div className="gen-p w-full h-full md:w-1/2  self-stretch flex flex-col justify-center absolute ">
            <h1 className="text-3xl font-semibold mb-5">
              Why Security Compliance Matters in Light of National Cyber
              Security Centre Recommendations
            </h1>
            <p className="text-lg">
              For startups, maintaining security compliance is crucial. It helps
              build customer trust, prevent data breaches, and meet legal and
              regulatory requirements. At NetNexus, we prioritize security
              compliance to ensure that our clients can focus on their core
              business without worrying about data security issues.
            </p>
          </div>
        </div>

        {KEY_POINTS.map((point) => (
          <InfoSection
            title={point.title}
            startParagraph={point.startParagraph}
            endParagraph={point.endParagraph}
            bullets={point.bullets}
          />
        ))}

        <div className="gen-p">
          <h2 className="text-3xl mt-16 mb-3 font-semibold">
            Key Security Practices at NetNexus in Alignment with National Cyber
            Security Centre Guidelines
          </h2>
          <p className="text-lg mb-6">
            At NetNexus, we prioritize implementing key security practices that
            align with the standards set forth by the National Cyber Security
            Centre. By following these best practices, we ensure that our
            systems and data remain secure against evolving cyber threats. Our
            commitment to regular security assessments, robust access controls,
            and continuous employee training reflects our dedication to
            safeguarding sensitive information and maintaining compliance with
            national cybersecurity guidelines.
          </p>

          <h2 className="text-3xl mt-16 mb-3 font-semibold">Conclusion </h2>
          <p className="text-lg mb-6">
            Security compliance is not just a regulatory requirement for us at
            NetNexus; it’s a fundamental aspect of how we do business. By
            integrating security into our SDLC, ensuring robust data encryption
            and protection, conducting regular security audits, and maintaining
            continuous employee training, we create secure and reliable software
            solutions for our clients. Our commitment to a Security-First
            Culture means that startups can trust us to deliver safe, compliant,
            and innovative software tailored to their unique needs.
            <br />
            <br />
            As we continue to serve early-age startups, we remain dedicated to
            enhancing our security practices and staying ahead of evolving
            threats. With NetNexus, you can be confident that your data is in
            safe hands, allowing you to focus on what you do best – growing your
            business.
          </p>
        </div>

        <div className="flex justify-between space-x-5 py-16 gen-p">
          <div>
            <h1 className="text-4xl md:text-4.5xl font-medium mb-4">
              National Cyber Security Centre Guidance for Startups
            </h1>
            <h2 className="text-2xl font-semibold mb-4">
              Importance of Security Compliance for Startups
            </h2>
            <p>
              Startups often face unique cybersecurity challenges due to limited
              resources and expertise. The National Cyber Security Centre
              emphasizes the need for startups to implement reliable software
              solutions that protect sensitive data and digital assets.{" "}
              {showMore &&
                "By adhering to security compliance standards such as GDPR, HIPAA, and SOC 2, startups can establish a solid security posture, build trust with customers, and ensure compliance with regulations. Investing in security best practices early on helps safeguard against potential cyber threats and promotes sustainable business growth."}
            </p>
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
            className="rounded-lg w-full md:w-80 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default CyberSecurity;
