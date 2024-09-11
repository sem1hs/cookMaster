import React from "react";
import Blogs from "../Blog/Blogs";

const Hero = () => {
  return (
    <section
      className={`bg-heroImage md:pt-[120px] pb-[120px] py-20 bg-cover bg-no-repeat`}
    >
      <div className="mx-auto max-w-2xl md:max-w-screen-2xl md:px-32">
        <h1 className="text-textColorGray text-[17px] md:text-5xl font-extrabold leading-snug w-max mx-auto">
          Bloglar
        </h1>
        {/* Blogs */}
        <Blogs />
      </div>
    </section>
  );
};

export default Hero;
