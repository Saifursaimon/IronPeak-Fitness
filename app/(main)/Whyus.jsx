import React from "react";

const Whyus = () => {
  const whyUs = [
    {
      text: "Personalized Programs",
      desc: "Tailored workouts for your body type, goals, and schedule.",
    },
    {
      text: "Science-Backed Training",
      desc: "Methods proven to deliver results without gimmicks.",
    },
    {
      text: "Flexible Coaching",
      desc: "In-person or online sessions to fit your lifestyle.",
    },
    {
      text: "Nutrition Support",
      desc: "Easy, sustainable meal plans for faster progress.",
    },
    {
      text: "Proven Track Record",
      desc: "Real transformations, real success stories.",
    },
  ];
  return (
    <div className="mt-24 text-white">
      <h1 className="text-4xl lg:text-5xl font-bold text-center leading-16 lg:leading-20">
        WHAT MAKES YOU <br />
        CHOOSE US?
      </h1>
      <div className="mt-12 lg:mt-24">
        <div className="hero">
          <div className="hero-content flex-col lg:flex-row justify-between gap-24">
            <div className="text-white lg:w-1/2">
              <ul className="list bg-base-100 rounded-box shadow-md">
                {whyUs.map((i) => {
                  return (
                    <li className="list-row">
                      <div>
                        <div className="text-lg uppercase font-semibold text-primary opacity-60">
                          {i.text}
                        </div>
                      </div>
                      <p className="list-col-wrap font-medium">{i.desc}</p>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div className=" hidden lg:flex w-1/2">
              <img src="/whyus.jpg" className=" rounded-lg shadow-2xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Whyus;
