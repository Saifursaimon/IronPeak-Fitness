import React from "react";
import Marquee from "react-fast-marquee";
const Hero = () => {
  return (
    <div>
      <div
        className="hero min-h-[70vh]"
        style={{
          backgroundImage: "url(/hero.jpg)",
        }}
      >
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-lg text-white">
            <h1 className="mb-5 text-3xl lg:text-5xl font-bold leading-10 lg:leading-16">
              Transform Your Body. Master Your Strength
            </h1>
            <p className="mb-5 text-sm lg:text-base">
              Join a proven training system that blends science-backed workouts
              with real results. Whether you want to build muscle, burn fat, or
              boost performance — we’ve got you covered.
            </p>
            <div className="flex items-center gap-4 justify-center">
              <button className="btn btn-primary text-black">
              Start Transformation
              </button>
              <button className="btn btn-outline text-primary border-primary">
              View Programs
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-primary py-7 px-2">
        <Marquee speed={200} autoFill={true} pauseOnHover={true}>
          <h2 className="text-2xl lg:text-3xl font-bold mr-10">HOLIDAY OFFER - 40% OFF</h2>
        </Marquee>
      </div>
    </div>
  );
};

export default Hero;
