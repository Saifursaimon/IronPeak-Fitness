import React from "react";
import { LuDumbbell } from "react-icons/lu";

const Footer = () => {
  return (
    <div className="mt-12">
      <div className="flex flex-col lg:flex-row">
        <footer className="footer lg:w-1/2 sm:footer-horizontal bg-base-100 text-white p-10">
          <aside>
            <h1 className="text-3xl font-bold flex items-center gap-2">
              {" "}
              <LuDumbbell /> IronPeak{" "}
              <span className="text-primary">Fitness</span>
            </h1>
            <p className="my-2 opacity-60">
              Join a proven training system that blends science-backed workouts
              with real results. Whether you want to build muscle, burn fat, or
              boost performance — we’ve got you covered.
            </p>
          </aside>
        </footer>
        <footer className="footer sm:footer-horizontal bg-base-100 text-base-content justify-around p-10 -mt-10 lg:mt-0">
          <nav>
            <h6 className="footer-title">Menu</h6>
            <a className="link link-hover">Home</a>
            <a className="link link-hover">About</a>
            <a className="link link-hover">Programs</a>
            <a className="link link-hover">Pricing</a>
          </nav>
          <form>
            <h6 className="footer-title">Newsletter</h6>
            <fieldset className="w-80">
              <label>Enter your email address</label>
              <div className="join">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item"
                />
                <button className="btn btn-primary join-item text-black">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </footer>
      </div>
      <footer className="footer sm:footer-horizontal footer-center bg-primary text-black font-bold p-4">
        <aside>
          <p>
            Copyright © {new Date().getFullYear()} - All right reserved by ACME
            Industries Ltd
          </p>
        </aside>
      </footer>
    </div>
  );
};

export default Footer;
