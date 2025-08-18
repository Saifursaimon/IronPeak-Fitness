import React from "react";
import { GiMuscleUp } from "react-icons/gi";
const About = () => {
  return (
    <div className="mt-12">
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row justify-between gap-24">
          <img
            src="/about.jpg"
            className="lg:w-1/3 rounded-lg shadow-2xl"
          />
          <div className="text-white">
            <p className="text-xs text-primary my-5 flex items-center gap-2"> <GiMuscleUp className="text-sm" /> About IronPeak Fitness</p>
            <h1 className="text-4xl lg:text-5xl font-bold">
              More Than Just Training — It’s a Lifestyle
            </h1>
            <p className="py-6 text-sm lg:text-base">
              At <span className="text-primary">IronPeak Fitness</span>, we believe that fitness isn’t a short-term
              challenge — it’s a long-term lifestyle. With over <span className="text-primary">10 years of
              training experience</span>, we’ve helped countless individuals achieve
              their dream physique and maintain it through customized programs,
              proper nutrition, and motivation that lasts.
            </p>
            <button className="btn btn-outline border-primary text-primary">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
