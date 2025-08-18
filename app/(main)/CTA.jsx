
import React from "react";

const CTA = () => {
  return (
    <div className="mt-24 text-white">
      <div className="hero bg-base-200 ">
        <div className="hero-content flex-col lg:flex-row-reverse gap-14">
          <div className="lg:w-1/2 max-w-sm shrink-0 shadow-2xl">
            <h2 className="uppercase text-2xl text-center lg:text-left font-bold">Make appointment</h2>
            <p className="my-2 text-xs opacity-60 text-center lg:text-left">Stop waiting for the perfect time. The perfect time is now.</p>
            <div className="">
              <fieldset className="fieldset">
                <input type="text" className="input w-full mt-2" placeholder="Full Name" />
                <input type="email" className="input w-full mt-2" placeholder="Your Email" />
                <textarea className="textarea w-full h-44 mt-2
                " placeholder="Message"></textarea>
                <button className="btn btn-primary text-black mt-2 lg:w-1/2">Make Appointment</button>
              </fieldset>
            </div>
          </div>
          <div className="text-center lg:text-left lg:w-1/2">
           <img
           src="/cta.jpg"
           alt="img"
           />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
