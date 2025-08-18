import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const layout = ({ children }) => {
  return (
    <div className="max-w-[1440px] mx-auto bg-base-200">
      <Header />
      <main>{children}</main>
      <Footer/>
    </div>
  );
};

export default layout;
