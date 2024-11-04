import IMAGES from "@/assets/images";
import Image from "next/image";
import Hero from "./_components/Hero";
import Offers from "./_components/Offers";
import Services from "./_components/Services";
import Features from "./_components/Features";
import CaseStudies from "./_components/CaseStudies";
import Testimonials from "./_components/Testimonials";
import Collaborate from "./_components/Collaborate";
import Engage from "./_components/Engage";

export default function Home() {
  return (
    <div className="App">
      <Hero />
      <Offers />
      <Services />
      <Features />
      <CaseStudies />
      <Testimonials />
      <Collaborate />
      <Engage />
    </div>
  );
}
