import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Story from "../components/Story";
import Highlights from "../components/Highlights";
import FlowSteps from "../components/FlowSteps";
import UseCases from "../components/UseCases";
import Testimonial from "../components/Testimonial";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

const LandingPage: React.FC = () => {
  return (
    <div className="antialiased">
      <Header />

      <main className="overflow-x-hidden">
        <Hero />
        <Story />
        <Highlights />
        <FlowSteps />
        <UseCases />
        <Testimonial />
        <CTA />
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
