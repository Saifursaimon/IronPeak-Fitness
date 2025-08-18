import React from "react";

const Programs = () => {
  const cardDetails = [
    {
      name: "Strength & Muscle Building",
      desc: "Build lean muscle with progressive overload and expert form coaching.",
      img: "/1.jpg",
    },
    {
      name: "Fat Loss Accelerator",
      desc: "Burn fat efficiently through targeted workouts and nutrition guidance.",
      img: "/2.jpg",
    },
    {
      name: "Functional Fitness",
      desc: "Improve mobility, endurance, and real-world strength.",
      img: "/3.jpg",
    },
  ];
  return (
    <div className="mt-24 text-white ">
      <h1 className="mb-5 text-4xl lg:text-5xl font-bold leading-10 lg:leading-16 text-center">
        Programs Available
      </h1>
      <p className="my-2 text-center lg:w-1/2 mx-auto">Train anytime, anywhere with personalized virtual guidance.Learn the fundamentals and start your fitness journey safely.</p>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-24 lg:gap-3  mt-20">
        {cardDetails.map((i) => {
          return (
            <div key={i.name} className="card bg-base-100 w-80 lg:w-96 mx-auto shadow-sm">
              <div className="card-body h-[145] lg:h-[125px]">
                <h2 className="text-2xl font-bold text-center text-primary">{i.name}</h2>
                <p className="text-center">{i.desc}</p>
              </div>
              <figure>
                <img src={i.img} alt="img" />
              </figure>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Programs;
