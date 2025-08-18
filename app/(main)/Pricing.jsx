import React from "react";

const Pricing = () => {
  const plans = [
    {
      name: "Starter Plan",
      price: "$49/month",
      includes: [
        "2 training sessions per week",

        " Customized workout plan",

        "Email support",
      ],
    },
    {
      name: "Pro Plan",
      price: "$99/month",
      includes: [
        "4 training sessions per week",
        "Full nutrition plan",
        "Weekly progress tracking",
        "Priority support",
      ],
    },
    {
      name: "Elite Plan",
      price: "$199/month",
      includes: [
        "Unlimited training sessions",

        "Full nutrition & supplement plan",

        "24/7 trainer access",

        "Monthly fitness assessment",
      ],
    },
  ];
  return (
    <div className="mt-24 text-white">
      <h1 className="mb-5 uppercase text-4xl lg:text-5xl font-bold leading-16  text-center">
        Your First 7 Days Are Free
      </h1>
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-5">
        {plans.map((i) => {
          return (
            <div key={i.price} className="card w-80 lg:w-96 bg-base-100 shadow-sm mx-auto">
              <div className="card-body">
                <span className="badge badge-xs badge-warning">{i.name}</span>
                <div className="flex justify-between">
                  <h2 className="text-3xl font-bold">{i.name}</h2>
                  <span className="text-xl">{i.price}</span>
                </div>
                <ul className="mt-6 flex flex-col gap-2 text-xs h-[100px]">
                  {i.includes.map((n) => {
                    return (
                      <li key={n}>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="size-4 me-2 inline-block text-success"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span>{n}</span>
                      </li>
                    );
                  })}
                </ul>
                <div className="mt-6">
                  <button className="btn btn-primary btn-block text-black">
                    Start Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;
