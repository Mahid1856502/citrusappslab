import Hero from "./_components/Hero";
import Offers from "./_components/Offers";
import Services from "./_components/Services";
import Features from "./_components/Features";
import CaseStudies from "./_components/CaseStudiesSection";
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
      <Engage title="How it Works" heading="To Engage with Us" info="Here’s a breakdown of how we engage with our clients before the project kick off"/>
    </div>
  );
}
